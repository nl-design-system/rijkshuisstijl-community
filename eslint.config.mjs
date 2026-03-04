import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import _import from 'eslint-plugin-import';
import json from 'eslint-plugin-json';
import react from 'eslint-plugin-react';
import * as mdx from 'eslint-plugin-mdx';
import prettier from 'eslint-config-prettier';
import { fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import sortExports from 'eslint-plugin-sort-exports';

import jsRules from './.eslintrc.js.json' with { type: 'json' };
import reactRules from './.eslintrc.react.json' with { type: 'json' };

const reactSettings = { react: { version: 'detect' } };

const sharedRules = {
  ...jsRules.rules,
  ...reactRules.rules,
};

export default defineConfig([
  globalIgnores([
    '**/node_modules/',
    '**/vendor/',
    '**/build/',
    '**/coverage/',
    '**/dist/',
    '**/tmp/',
    'apps/rhc-templates/',
  ]),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: reactSettings,
  },

  // JSON files (no comments allowed)
  json.configs.recommended,

  // JSONC files (tsconfig.*.json — TypeScript config files allow comments)
  {
    ...json.configs['recommended-with-comments'],
    files: ['**/tsconfig*.json', '**/tsconfig.*.json', '**/.storybook/tsconfig*.json'],
  },

  // MDX files
  {
    ...mdx.flat,
    files: ['**/*.mdx'],
    plugins: {
      ...mdx.flat.plugins,
      react,
      import: fixupPluginRules(_import),
    },
    settings: reactSettings,
    rules: {
      ...mdx.flat.rules,
      ...react.configs.flat.recommended.rules,
      ...prettier.rules,
      ...sharedRules,
    },
  },

  // JS/JSX files
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      react,
      import: fixupPluginRules(_import),
    },
    settings: reactSettings,
    rules: {
      ...react.configs.flat.recommended.rules,
      ...prettier.rules,
      ...sharedRules,
    },
  },

  // TS/TSX files
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      import: fixupPluginRules(_import),
    },
    settings: reactSettings,
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...prettier.rules,
      ...sharedRules,
    },
  },

  // TS/TSX with projectService + extra rules (excluding stencil and .storybook)
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/stencil.tsx', '**/*.stencil.tsx', '**/.storybook/**'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'sort-exports': sortExports,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      'sort-exports/sort-exports': [
        'error',
        {
          sortDir: 'asc',
          pattern: '**/index.ts',
        },
      ],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
        },
      ],
    },
  },

  // Node config files (vite.config.ts, jest.config.js, etc.)
  {
    files: ['**/*.config.{js,cjs,mjs,ts}', '**/*.config.*.{js,cjs,mjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Jest/Vitest test files
  {
    files: ['**/*.spec.{js,ts,tsx}', '**/*.test.{js,ts,tsx}', '**/tests/**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
