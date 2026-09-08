#!/usr/bin/env node
/**
 * drop-in replacement for npm dependency rimraf
 * @example
 * ./rm.js -h
 * rm <file/directory>
 * ./rm.js agents.md
 * ./rm.js dist/
 */
import { rmSync } from 'node:fs';
import path from 'node:path';
import { argv, cwd, exit } from 'node:process';

(function () {
  const args = argv.slice(2);

  if (args.includes('-h')) {
    console.log('rm <file/directory>');
    exit(0);
  }

  for (const it of args) {
    const rmPath = path.resolve(cwd(), it);

    try {
      rmSync(it, { recursive: true });
      console.info(`rm ${rmPath};`);
    } catch {
      console.warn(`file or directory ${rmPath} not found. skip deletion;`);
    }
  }
  exit(0);
})();
