/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Frameless B.V.
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

import { transformTokens } from 'token-transformer';

export const tokenTransformer = ({ input, output, themes }) => {
  const rawTokens = JSON.parse(readFileSync(input));

  const sets = Object.keys(rawTokens);

  const themeToSetName = (theme) => `theme/${theme ?? ''}`.toLowerCase();
  const themeSets = themes.map(themeToSetName);

  const setsToUse = sets.filter(
    (name) =>
      !name.toLowerCase().startsWith('theme/') || (themeSets.length > 0 && themeSets.includes(name.toLowerCase())),
  );
  const excludes = [];

  const transformerOptions = {
    throwErrorWhenNotResolved: true,
  };

  const resolved = transformTokens(rawTokens, setsToUse, excludes, transformerOptions);

  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, JSON.stringify(resolved, null, 2), () => {
    console.log(`Tokens Studio JSON converted to Style Dictionary JSON:\n${output}`);
  });
};
