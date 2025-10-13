import { dirname, join } from 'path';
// Utility to resolve the absolute path of a package needed in projects that use Yarn PnP or are set up within a monorepo
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
export const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));
