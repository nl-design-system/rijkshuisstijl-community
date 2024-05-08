const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, 'storybook', '@storybook/*', 'eslint'],
  target: 'latest',
};
