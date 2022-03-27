const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@common': path.resolve(__dirname, 'src/common/'),
      '@images': path.resolve(__dirname, 'src/images/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};
