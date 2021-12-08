const { resolve } = require( 'path' )
module.exports = {
entry: './src/index.js',
module: {
  rules: [
      {
          test: /\.js$/, //using regex to tell babel exactly what files to transcompile
          exclude: /node_modules/, // files to be ignored
          use: {
              loader: 'babel-loader' // specify the loader
          } 
      }
  ]
},
output: {
filename: 'bundle.js',
path: resolve( __dirname, 'dist' )
},
devServer: {
static: {
directory: resolve( __dirname, 'dist' )
}
},
target: 'web',
mode: 'production'
}