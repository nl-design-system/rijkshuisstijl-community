const fs = require('fs');
const path = require('path');

// read package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
const version = pkg.version;
const buildDate = new Date().toLocaleString();

// Function to load and parse a JSON file
function loadJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading or parsing ${filePath}:`, error.message);
    process.exit(1);
  }
}

function getStorybookComponents(storybookData) {
  return Object.values(storybookData.entries || {})
    .map((entry) => entry.title.split('/').pop().toLowerCase())
    .filter(
      (name) =>
        ![
          'changelog',
          'standaard thema',
          'digid thema',
          'logius thema',
          'mijnoverheid thema',
          'rivm thema',
          'toestemming voor gebruik',
          'open source license',
          'intro nl design system',
          'font',
          'componenten',
          'details',
          'homepage',
          'mijn omgeving',
          'rich text',
          'helpers',
          'readme',
        ].includes(name),
    );
}

// Function to extract component names from figma.json
function getFigmaComponents(figmaData) {
  return (figmaData || []).map((item) => {
    return item.page.replace(/[^a-zA-Z0-9- ]/g, '').toLowerCase();
  });
}

// Function to extract component names and badges from nlds-components.json
function getNldsComponents(nldsData) {
  return (nldsData || []).map((item) => ({
    title: item.title.toLowerCase(),
    badge: item.badge || 'None', // Default to "None" if badge is missing
  }));
}

// Function to combine all unique components from all sources
function getAllUniqueComponents(nldsComponents, storybookComponents, figmaComponents) {
  const allComponents = new Map();

  // Add components from nlds-components.json (Source 1) with badges
  nldsComponents.forEach((component) => {
    allComponents.set(component.title, {
      title: component.title,
      badge: component.badge,
    });
  });

  // Add components from storybook.json (Source 2)
  storybookComponents.forEach((title) => {
    if (!allComponents.has(title)) {
      allComponents.set(title, { title, badge: 'None' });
    }
  });

  // Add components from figma.json (Source 3)
  figmaComponents.forEach((title) => {
    if (!allComponents.has(title)) {
      allComponents.set(title, { title, badge: 'None' });
    }
  });

  return Array.from(allComponents.values());
}

// Function to generate HTML table
function generateHtmlTable(allComponents, nldsComponents, storybookComponents, figmaComponents, version, buildDate) {
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Comparison Table</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
    tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    .checkmark {
      color: green;
      font-size: 1.2em;
    }
    .cross {
      color: red;
      font-size: 1.2em;
    }
  </style>
</head>
<body>
  <h2>Component Comparison Table</h2>
  <div class="meta">
    <p>Generated: ${buildDate}</p>
  </div>
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Badge</th>
        <th width="140">Source 1 (<a href="https://nldesignsystem.nl/componenten/">NLDS Components</a>)</th>
        <th width="140">Source 2 (<a href="https://rijkshuisstijl-community.vercel.app/">Storybook RHC</a>)</th>
        <th width="140">Source 3 (<a href="https://www.figma.com/design/Q5Imc7Xi9KnBQhcYI3Hytj/-WIP--NL-Design-System---Bibliotheek---Rijkshuisstijl-Community?node-id=16044-24466&t=PcOe0S2IkuuSmM1a-0">Figma RHC 2.0</a>)</th>
        <th width="140">Match (Source 2 & 3)</th>
      </tr>
    </thead>
    <tbody>
`;

  allComponents.forEach((component) => {
    const inNlds = nldsComponents.some((c) => c.title === component.title) ? '✅' : '❌';
    const inStorybook = storybookComponents.includes(component.title) ? '✅' : '❌';
    const inFigma = figmaComponents.includes(component.title) ? '✅' : '❌';
    const isMatch = inStorybook === '✅' && inFigma === '✅' ? '✅' : '❌';

    html += `
      <tr align="left">
        <td style="text-align:left">${component.title}</td>
        <td style="text-align:left; width: 200px;">${component.badge}</td>
        <td class="${inNlds === '✅' ? 'checkmark' : 'cross'}">${inNlds}</td>
        <td class="${inStorybook === '✅' ? 'checkmark' : 'cross'}">${inStorybook}</td>
        <td class="${inFigma === '✅' ? 'checkmark' : 'cross'}">${inFigma}</td>
        <td class="${isMatch === '✅' ? 'checkmark' : 'cross'}">${isMatch}</td>
      </tr>
`;
  });

  html += `
    </tbody>
  </table>
  <p>Package version: ${version}</p>
</body>
</html>
`;

  return html;
}

// Main function
function main() {
  // File paths
  const dataFolder = path.join(__dirname, '../data');
  const storybookPath = path.join(dataFolder, 'rhc-storybook.json');
  const figmaPath = path.join(dataFolder, 'rhc-figma.json');
  const nldsComponentsPath = path.join(dataFolder, 'nlds-website.json');

  // Load JSON files
  const storybookData = loadJsonFile(storybookPath);
  const figmaData = loadJsonFile(figmaPath);
  const nldsData = loadJsonFile(nldsComponentsPath);

  // Extract component names
  const nldsComponents = getNldsComponents(nldsData);
  const storybookComponents = getStorybookComponents(storybookData);
  const figmaComponents = getFigmaComponents(figmaData);

  // Combine all unique components
  const allComponents = getAllUniqueComponents(nldsComponents, storybookComponents, figmaComponents);

  // Validate components
  if (allComponents.length === 0) {
    console.error('No components found in any source');
    process.exit(1);
  }

  // Generate HTML table
  const htmlTable = generateHtmlTable(
    allComponents,
    nldsComponents,
    storybookComponents,
    figmaComponents,
    version,
    buildDate,
  );

  // Save to file
  const distFolder = path.join(__dirname, '../dist');
  const outputPath = path.join(distFolder, 'comparison-table.html');
  try {
    // Ensure the folder exists
    if (!fs.existsSync(distFolder)) {
      fs.mkdirSync(distFolder, { recursive: true });
    }
    fs.writeFileSync(outputPath, htmlTable);
    console.log(`✅ Saved to ${outputPath}`);
  } catch (error) {
    console.error('Error saving HTML table to file:', error.message);
    process.exit(1);
  }
}

// Run the script
main();
