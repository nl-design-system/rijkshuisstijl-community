const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.twig$/,
        use: {
          loader: 'twig-loader',
        }
      },
    ],
  },
  node: {
    fs: "empty"
  }
};
