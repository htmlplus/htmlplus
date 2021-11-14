const
  path = require('path'),
  withPlugins = require('next-compose-plugins'),
  withPWA = require('next-pwa'),
  withTM = require('next-transpile-modules')(['@htmlplus/examples']),
  root = path.resolve(__dirname);

// TODO
require('./scripts/icons');

module.exports = withPlugins([[withPWA], [withTM]], {
  sassOptions: {
    includePaths: [
      path.join(root, './src/styles')
    ],
    prependData: `@import './variables';`,
  },
  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ['react', ...config.externals];
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      react: path.resolve(__dirname, './node_modules/react'),
      ['react-dom']: path.resolve(__dirname, './node_modules/react-dom'),
      '@htmlplus/examples': require.resolve('@htmlplus/examples'),
    };

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    sw: 'service-worker.js',
  }
});
