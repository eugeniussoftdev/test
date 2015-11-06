var path = require('path');
var webpack = require('webpack');
var BowerWebpackPlugin = require('bower-webpack-plugin');
var bower_dir = __dirname + '/bower_components';


var config = {
    cache: true,
    debug: true,
    devtool: 'eval',
    entry: {
        app: ["bootstrap-webpack!./bootstrap.config.js", './app/app.js'],
        vendor: ['angular', 'bootstrap', 'angular-ui-router', 'oclazyload', 'jquery']
    },

    output: {
        path: path.join(__dirname, "app"),
        filename: '/bundle.js'
    },
    //   resolve: {
    //     alias: {
    //         // 'bootstrap': bower_dir + '/bootstrap/less/bootstrap.less'
    //     },
    //     modulesDirectories: ['bower_components', 'node_modules']
    // },
    // 
    module: {

        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            {
                test: /\.less/,
                loader: "style!css!less?strictMath&noIeCompat"
            },
            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/glyphicons-halflings-regular.woff2"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },

    plugins: [
        // new BowerWebpackPlugin({
        //     excludes: /.*\.less/
        // }),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ "vendor", /* filename= */ "/vendor.bundle.js"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new BowerWebpackPlugin({
            modulesDirectories: ["bower_components"],
            manifestFiles: "bower.json",

            searchResolveModulesDirectories: true
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: {
            chunkModules: false,
            colors: true
        },
        contentBase: './app'
    }
};

module.exports = config;
