var path = require('path')

module.exports = {
    entry: [
       'webpack-dev-server/client?http://localhost:8080/',
       './src/main.js',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './public',
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}
