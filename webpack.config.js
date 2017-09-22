const path = require('path');

module.exports = {
    entry : path.join(__dirname, 'src', 'app.jsx'),
    output : {
        path : path.join(__dirname, 'public', 'js'),
        filename : 'bundle.js'
    },

    module : {
        loaders : [
            {
                test : /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    }
};
