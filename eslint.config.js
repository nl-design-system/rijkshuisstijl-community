// eslint.config.js
export default [
  {
    ignores: [
      // 3rd party
      'node_modules/',
      'vendor/',

      // generated
      'build/',
      'coverage/',
      'dist/',
      'tmp/',

      // Next.js app with its own ESLint config
      'apps/rhc-templates/',
    ],
  },
  // add your other ESLint config entries here...
];
