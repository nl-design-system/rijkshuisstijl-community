const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  // eslint, eslint-plugin-json, style-dictionary: manual major upgrades
  // Angular, Storybook, React, Next.js, Vite: handled separately in Phase 4 (framework majors)
  // @eslint/js + @eslint/eslintrc: bump together with eslint major upgrade
  // @whitespace/storybook-addon-html: 9.0+ requires Storybook 10; upgrade with Storybook
  // @utrecht/* and @amsterdam/*: NL Design System packages; require dedicated migration work
  reject: [
    ...minorConfig.reject,
    'eslint',
    'eslint-plugin-json',
    'style-dictionary',
    // vitest 4.x dropped Chai; jest-dom not yet compatible; upgrade separately
    // jest 30.x: upgrade separately (components-angular uses jest-preset-angular)
    'jest',
    'jest-preset-angular',
    /^@types\/jest/,
    // react-syntax-highlighter 16.x: check breaking changes before upgrading
    'react-syntax-highlighter',
    /^@types\/react-syntax-highlighter/,
    // vitest 4.x dropped Chai; jest-dom not yet compatible; upgrade separately
    'vitest',
    /^@vitest\//,
    // Stylelint ecosystem (new rules break existing CSS; migrate separately)
    'stylelint',
    /^stylelint-/,
    // ESLint ecosystem (must upgrade together)
    '@eslint/js',
    '@eslint/eslintrc',
    // NL Design System — Utrecht and Amsterdam (breaking API changes; migrate separately)
    /^@utrecht\//,
    /^@amsterdam\//,
    // Angular ecosystem
    /^@angular\//,
    /^@angular-devkit\//,
    'angular-tabler-icons',
    'ng-packagr',
    // Storybook ecosystem
    /^@storybook\//,
    'storybook',
    'storybook-addon-pseudo-states',
    /^eslint-plugin-storybook/,
    '@chromatic-com/storybook',
    'chromatic',
    '@whitespace/storybook-addon-html',
    // React ecosystem
    'react',
    'react-dom',
    /^@types\/react/,
    // Next.js ecosystem
    'next',
    'eslint-config-next',
    // Vite ecosystem
    'vite',
    /^@vitejs\//,
    'vite-plugin-dts',
    'vite-plugin-twig-drupal',
  ],
  target: 'latest',
};
