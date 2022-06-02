const CracoAlias = require('craco-alias');
const CircularDependencyPlugin = require('circular-dependency-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")

const stage = process.env.NODE_ENV;

const webpackConfigs = {
  development: {
  },
  production: {
    configure: {
      output: {
        filename: 'static/js/[name].bundle.js'
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              name: 'node_vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all'
            }
          }
        },
        minimize: true,

        minimizer: [new TerserPlugin({ extractComments: false })]
      },
      plugins: [
        // new BundleAnalyzerPlugin(),
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: ['./build']
        })
      ]
    }
  }
};

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: ".",
        tsConfigPath: "./tsconfig.paths.json"
      }
    }
  ],
  webpack: {
    plugins: [
      new CircularDependencyPlugin({
        exclude: /node_modules/,

        failOnError: true,

        allowAsyncCycles: false
      })
    ],
    ...webpackConfigs[stage]
  }
};
