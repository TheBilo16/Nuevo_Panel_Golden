const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry : path.join(__dirname,"src","app","index.tsx"),
    output : {
        filename : "bundle.js",
        path : path.join(__dirname,"src","build")
    },
    resolve:{
        extensions : [".ts",".tsx",".js",".jsx",".json"]
    },
    module : {
        rules : [
            {
                test : /\.tsx?$/,
                loader : "awesome-typescript-loader"
            },
            {
                test : /\.(css|scss|sass)/,
                use : [
                    miniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test : /\.(png|jpg|jpeg|gif|svg)$/,
                use : [
                    { 
                        loader : "file-loader",
                        options : {
                            name : "images/[name].[ext]"
                        } 
                    }
                ]
            }
        ]
    },
    plugins: [
        new miniCssExtractPlugin("styles.css")
    ]
}