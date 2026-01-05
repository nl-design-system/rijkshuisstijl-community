import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');

const rootEslintrc = JSON.parse(fs.readFileSync(path.join(repoRoot, '.eslintrc.json'), 'utf8'));

const compat = new FlatCompat({
  baseDirectory: repoRoot,
});

const asArray = (value) => (Array.isArray(value) ? value : [value]);

export default [
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  ...asArray(reactHooks.configs['recommended-latest']),
  ...asArray(reactRefresh.configs.vite),
  ...compat.config(rootEslintrc),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
];
