import 'dotenv/config';
import fs from 'fs';
import fetch from 'node-fetch';
import process from 'process';
const folder = 'data';

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = 'Q5Imc7Xi9KnBQhcYI3Hytj';

async function getComponentSetsPerPage() {
  const res = await fetch(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });

  if (!res.ok) {
    // console.error("❌ Figma API error:", res);
    console.error('❌ Figma API error:', res.statusText);
    return;
  }

  const data = await res.json();
  const pages = data.document.children;

  const result = [];

  for (const page of pages) {
    const components = [];

    // eslint-disable-next-line no-inner-declarations
    function findComponentSets(nodes) {
      const layerMap = {};

      for (const node of nodes) {
        if (node.type === 'COMPONENT_SET') {
          const layerName = node.name;
          const appearanceMap = {};

          for (const variant of node.children || []) {
            const props = Object.fromEntries(
              variant.name.split(',').map((part) => {
                const [key, value] = part.split('=').map((s) => s.trim());
                return [key, value];
              }),
            );

            const appearance = props['Appearance'] || 'Unknown';
            const state = props['State'] || 'Default';

            if (!appearanceMap[appearance]) {
              appearanceMap[appearance] = [];
            }

            if (!appearanceMap[appearance].some((s) => s.state === state)) {
              appearanceMap[appearance].push({ state });
            }
          }

          const appearances = Object.entries(appearanceMap).map(([appearance, states]) => ({
            appearance,
            states,
          }));

          if (!layerMap[layerName]) {
            layerMap[layerName] = { appearances };
          } else {
            layerMap[layerName].appearances.push(...appearances);
          }
        }

        // 🔥 NEW: handle standalone components
        if (node.type === 'COMPONENT') {
          const layerName = node.name;
          if (!layerMap[layerName]) {
            layerMap[layerName] = {
              appearances: [{ appearance: 'Default', states: [] }],
            };
          }
        }

        if (node.children) {
          findComponentSets(node.children);
        }
      }

      for (const [layer, { appearances }] of Object.entries(layerMap)) {
        components.push({
          layer,
          appearances,
        });
      }
    }

    findComponentSets(page.children || []);

    if (components.length > 0) {
      result.push({
        page: `${page.name}`,
        components,
      });
    }
  }

  // Create folder if it doesn't exist
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  // Write the file
  fs.writeFileSync(`${folder}/rhc-figma.json`, JSON.stringify(result, null, 2, 2));
  console.log('✅ Saved to data/rhc-figma.json');
}

getComponentSetsPerPage();
