const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    mode: "development",
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader","css-loader","sass-loader"],
        },
        {
            test: /\.(png|svg|jpeg|jpg|gif)/,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot)$/i,
            type: 'asset.resource',
        },
        {
            test: /\.html$/,
            use:{
                loader: "html-loader",
                options:{
                    attrs:[":src"]
                }
            }
        },

    ]
}

}