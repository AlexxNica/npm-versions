import { join, resolve } from 'path';
import { BannerPlugin } from 'webpack';

export default {
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2',
  },

  resolve: {
    alias: {
      modules: resolve(__dirname, 'src/modules/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    modules: [
      join(process.cwd(), 'app'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader!shebang-loader' },
    ]
  },

  externals: {
    yargs: 'yargs'
  },

  plugins: [
    new BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
  ],
};