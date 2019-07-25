const { resolve } = require('path');

module.exports = {
  name: '@ekumenlabs.com/react-org-chart',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    d3: {
      commonjs: 'd3',
      commonjs2: 'd3',
      amd: 'd3',
      root: '_'
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: '_'
    }
  }
}
