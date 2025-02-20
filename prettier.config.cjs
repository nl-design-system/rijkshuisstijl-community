/**
 * @type {import('prettier').Config}
 */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
