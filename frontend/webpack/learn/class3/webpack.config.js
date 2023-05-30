const path = require('path')
/** @type {import('webpack'.Configuration)} */
module.exports = {
    entry: {
        // main: {
        //     filename: 'target.js',
        //     import:'./src/index.js'
        // }
        app:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:8].js',
        clean:true
    },
    
}