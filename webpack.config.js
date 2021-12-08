const { resolve } = require( 'path' )
module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
path: resolve( __dirname, 'dist' )
},
devServer: {
static: {
directory: resolve( __dirname, 'dist' )
}
},
target: 'node',
mode: 'production'
}