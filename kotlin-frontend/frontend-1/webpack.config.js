const packageJson = require('./package.json');
const path = require('path');
// var webpack = require('webpack');

const PATHS = {
    compiled: path.join(__dirname, 'target', 'kotlin-compiled'),
    output: path.join(__dirname, 'target', 'classes', 'js')
};

module.exports = {
    entry: {
        main: [
            path.join(PATHS.compiled, packageJson.main)
        ]
    },
    resolve: {
        modules: [
            'node_modules'
        ]
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'kotlin-source-map-loader'
                ],
                enforce: 'pre'
            }
        ]
    },
    output: {
        path: path.join(PATHS.output),
        filename: packageJson.main
    },
    devtool: 'source-map'
};