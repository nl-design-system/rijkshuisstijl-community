module.exports = {
  root: true,
  extends: ['../../../.eslintrc.json', 'plugin:react-hooks/recommended'],
  plugins: ['react-refresh'],
  ignorePatterns: ['dist'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
