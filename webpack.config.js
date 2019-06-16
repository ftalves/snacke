const path = require('path')

const rootPath = p => path.resolve(__dirname, `${p}`)

module.exports = {
  mode: 'development',
  entry: './src/run.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': rootPath('src'),
    },
    plugins: [
      new (require('directory-named-webpack-plugin'))(true),
    ],
  },
  watch: true,
}
