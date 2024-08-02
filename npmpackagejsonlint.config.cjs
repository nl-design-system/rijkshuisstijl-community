module.exports = {
  rules: {
    'no-caret-version-dependencies': 'error',
    'no-caret-version-devDependencies': 'error',
    'no-tilde-version-dependencies': 'error',
    'no-tilde-version-devDependencies': 'error',
    'require-repository-directory': 'error',
    'valid-values-license': ['error', ['EUPL-1.2']],
    'valid-values-name-scope': ['error', ['@rijkshuisstijl-community']],
  },
  overrides: [
    {
      patterns: ['proprietary/**/package.json'],
      rules: {
        'valid-values-license': ['error', ['SEE LICENSE IN LICENSE.md']],
      },
    },
  ],
};
