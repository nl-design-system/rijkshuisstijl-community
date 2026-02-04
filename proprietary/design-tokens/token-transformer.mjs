import { existsSync, mkdirSync } from 'fs';
import { readFile, writeFile } from 'node:fs/promises';

// Split tokens into separate files
async function transformAndSplitTokens() {
  // Read the raw JSON file directly
  const json = await readFile('./figma/figma.tokens.json', 'utf-8');
  const tokens = JSON.parse(json);

  // Process themes to add the enabled components
  const themes = tokens.$themes || [];
  const processedThemes = {};

  themes.forEach((theme) => {
    const themeTokens = {};

    Object.entries(theme.selectedTokenSets).forEach(([tokenSet, status]) => {
      if (status === 'enabled' && !tokenSet.endsWith('[figma-only]')) {
        if (tokens[tokenSet]) {
          themeTokens[tokenSet] = tokens[tokenSet];
        }
      }
    });
    // Add default type scale here, because Figma does not understand `clamp(...)`
    themeTokens['overrides/type-scale/default [code-only]'] = tokens['overrides/type-scale/default [code-only]'];

    processedThemes[theme.name] = {
      id: theme.id,
      tokens: themeTokens,
      group: theme.group,
    };
    processedThemes[`${theme.name}-information-dense`] = {
      id: theme.id,
      tokens: {
        ...themeTokens,
        ['overrides/type-scale/information dense [code-only]']:
          tokens['overrides/type-scale/information dense [code-only]'],
      },
      group: theme.group,
    };
  });

  // Ensure directories exist
  if (!existsSync('./src/generated')) {
    mkdirSync('./src/generated', { recursive: true });
  }

  // Write files
  await writeFile(
    './src/generated/base.tokens.json',
    JSON.stringify(processedThemes['Kern - Lintblauw'].tokens, null, 2),
  );
  await writeFile('./src/generated/themes.json', JSON.stringify(processedThemes, null, 2));
}

transformAndSplitTokens();
