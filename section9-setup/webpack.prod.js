//pathはnodejsが内蔵しているデフォルトの機能
const path = require('path');

//不必要なjsファイルは削除してくれる
const{ CleanWebpackPlugin } = require('clean-webpack-plugin');

//nodejsのexport文
//webpackコマンドを実行したときによまれる
module.exports = {
    mode: 'production',  //デフォルトはproduction.
    //スタート地点
    //entrty: './dist/main.js',
    entry: './src/food-app/main.ts',   //ts-loaderを使う場合こっち
    //最終的にbundleしてアウトプットする
    output: {
        //キャッシュによって更新されない不具合を起こさないために
        //filename:'[contenthash]bundle.js'
        filename:'bundle.js',
        path: path.resolve(__dirname,'dist'),    //絶対パスが入る
    },
    devtool: 'none',
    //import/exportできる。どのファイルをどう使うか
    module: {
        rules:[{
            test: /\.ts$/,    //typescriptのファイルを対象とする
            use: 'ts-loader',  
            exclude: /node_modules/    //node_modulesからとってきたものだったらという意味。あんまり今回はいらない
        }]
    },
    resolve: {
        extensions :['.ts','.js']
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}