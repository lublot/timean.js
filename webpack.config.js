const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /__tests__/],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
    library: 'Timean',
    umdNamedDefine: true
  },
};
