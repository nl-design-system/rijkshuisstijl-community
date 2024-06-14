const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, 'eslint', 'eslint-plugin-json'],
  target: 'latest',
};
