import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'rhc',
  srcDir: './src/',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    reactOutputTarget({
      outDir: '../web-components-react/src/',
      stencilPackageName: '@rijkshuisstijl-community/web-components-stencil',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
  extras: { enableImportInjection: true },
};
