import { createRollupConfig } from '../library-react/rollup.config.mjs';
import { readFileSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default createRollupConfig(packageJson);
