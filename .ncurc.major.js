const minorConfig = require('./.ncurc.minor');

module.exports = {
  reject: ['@mdx-js/react', ...minorConfig.reject],
};
