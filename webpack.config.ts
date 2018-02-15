import { join, resolve } from 'path';
import { BannerPlugin } from 'webpack';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';

export default {
  target: 'node',
  entry: './src/index.ts',
  output: {
    filename: 'npm-versions',
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

    new UglifyJSPlugin({
      uglifyOptions: {
        sourceMap: true,
        ie8: false,
        ecma: 8,
        comments: false,
        output: {
          comments: false,
          beautify: false,
          bracketize: true
        },
        // Only activate for pre-production releases
        cache: true,
        parallel: true,
        toplevel: true,
        unused: true,
        reduce_vars: true,
        warnings: (process.env.CUSTOM_ENV === 'debug'),
        safari10: true,
      },
    }),
  ],
};
