const path = require('path'); //formato commonJs
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')


module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins: [
                            "react-hot-loader/babel",
                            "jsx-control-statements"
                        ]
                    }
                }
            },  //Babel Loader
            {
                test: /\.(png|gif|jpg|svg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[ext]'
                        }
                    }

                ]
            },  //Loader imágenes
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: "index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
    },
}
