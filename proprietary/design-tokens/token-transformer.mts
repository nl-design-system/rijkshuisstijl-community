import { existsSync, mkdirSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

type JsonValue = boolean | JsonObject | JsonValue[] | null | number | string;

interface JsonObject {
  [key: string]: JsonValue;
}

interface ThemeDefinition {
  group: string;
  id: string;
  name: string;
  selectedTokenSets: Record<string, string>;
}

interface TokensFile {
  themes: ThemeDefinition[];
  tokenSets: Record<string, JsonValue>;
}

interface ProcessedTheme {
  group: string;
  id: string;
  tokens: Record<string, JsonValue>;
}

const DEFAULT_TYPE_SCALE_TOKEN_SET = 'overrides/type-scale/default [code-only]';
const INFORMATION_DENSE_TYPE_SCALE_TOKEN_SET = 'overrides/type-scale/information dense [code-only]';
const BASE_THEME_NAME = 'Kern - Lintblauw';

const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export const isJsonValue = (value: unknown): value is JsonValue => {
  if (value === null || typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string') {
    return true;
  }

  if (Array.isArray(value)) {
    return value.every(isJsonValue);
  }

  if (!isObject(value)) {
    return false;
  }

  return Object.values(value).every(isJsonValue);
};

export const parseThemeDefinition = (value: unknown): ThemeDefinition => {
  if (!isObject(value)) {
    throw new TypeError('Expected each theme definition to be an object.');
  }

  const { group, id, name, selectedTokenSets } = value;

  if (typeof group !== 'string' || typeof id !== 'string' || typeof name !== 'string') {
    throw new TypeError('Expected each theme to have string "group", "id", and "name" properties.');
  }

  if (!isObject(selectedTokenSets)) {
    throw new TypeError('Expected "selectedTokenSets" to be an object.');
  }

  const parsedSelectedTokenSets: Record<string, string> = {};

  for (const [tokenSet, status] of Object.entries(selectedTokenSets)) {
    if (typeof status !== 'string') {
      throw new TypeError(`Expected token set status for "${tokenSet}" to be a string.`);
    }

    parsedSelectedTokenSets[tokenSet] = status;
  }

  return {
    group,
    id,
    name,
    selectedTokenSets: parsedSelectedTokenSets,
  };
};

export const parseTokensFile = (json: string): TokensFile => {
  const parsed: unknown = JSON.parse(json);

  if (!isObject(parsed)) {
    throw new TypeError('Expected the Figma tokens file to contain a JSON object.');
  }

  const tokenSets: Record<string, JsonValue> = {};
  let themes: ThemeDefinition[] = [];

  for (const [key, value] of Object.entries(parsed)) {
    if (key === '$themes') {
      if (!Array.isArray(value)) {
        throw new TypeError('Expected "$themes" to be an array.');
      }

      themes = value.map(parseThemeDefinition);
      continue;
    }

    if (!isJsonValue(value)) {
      throw new TypeError(`Expected token set "${key}" to contain valid JSON values.`);
    }

    tokenSets[key] = value;
  }

  return { themes, tokenSets };
};

const addTokenSetIfPresent = (
  tokenSets: Record<string, JsonValue>,
  key: string,
  value: JsonValue | undefined,
): void => {
  if (value !== undefined) {
    tokenSets[key] = value;
  }
};

// Split tokens into separate files
export async function transformAndSplitTokens(): Promise<void> {
  // Read the raw JSON file directly
  const json = await readFile('./figma/figma.tokens.json', 'utf-8');
  const tokens = parseTokensFile(json);

  // Process themes to add the enabled components
  const processedThemes: Record<string, ProcessedTheme> = {};

  tokens.themes.forEach((theme) => {
    const themeTokens: Record<string, JsonValue> = {};

    Object.entries(theme.selectedTokenSets).forEach(([tokenSet, status]) => {
      if (status === 'enabled' && !tokenSet.endsWith('[figma-only]')) {
        addTokenSetIfPresent(themeTokens, tokenSet, tokens.tokenSets[tokenSet]);
      }
    });

    // Add default type scale here, because Figma does not understand `clamp(...)`
    addTokenSetIfPresent(themeTokens, DEFAULT_TYPE_SCALE_TOKEN_SET, tokens.tokenSets[DEFAULT_TYPE_SCALE_TOKEN_SET]);

    processedThemes[theme.name] = {
      id: theme.id,
      tokens: themeTokens,
      group: theme.group,
    };

    processedThemes[`${theme.name}-information-dense`] = {
      id: theme.id,
      tokens: {
        ...themeTokens,
        ...(tokens.tokenSets[INFORMATION_DENSE_TYPE_SCALE_TOKEN_SET] !== undefined
          ? {
              [INFORMATION_DENSE_TYPE_SCALE_TOKEN_SET]: tokens.tokenSets[INFORMATION_DENSE_TYPE_SCALE_TOKEN_SET],
            }
          : {}),
      },
      group: theme.group,
    };
  });

  const baseTheme = processedThemes[BASE_THEME_NAME];

  if (!baseTheme) {
    throw new Error(`Expected "${BASE_THEME_NAME}" to exist in processed themes.`);
  }

  // Ensure directories exist
  if (!existsSync('./src/generated')) {
    mkdirSync('./src/generated', { recursive: true });
  }

  // Write files
  await writeFile('./src/generated/base.tokens.json', JSON.stringify(baseTheme.tokens, null, 2));
  await writeFile('./src/generated/themes.json', JSON.stringify(processedThemes, null, 2));
}

await transformAndSplitTokens();
