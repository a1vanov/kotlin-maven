const packageJson = require('./package.json');
const path = require('path');
// var webpack = require('webpack');

const PATHS = {
    build: path.join(__dirname, 'target'),
    output: path.join(__dirname, 'target', 'classes')
};
//mode: 'production',

module.exports = {
    entry: {
        main: [
            path.join(PATHS.build, 'js', 'packages', packageJson.name, packageJson.main)
        ]
    },
    resolve: {
        modules: [
            path.join(PATHS.build, 'js', 'packages', packageJson.name),
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
        path: path.join(PATHS.output, 'js'),
        filename: packageJson.main
    },
    devtool: 'source-map'
};