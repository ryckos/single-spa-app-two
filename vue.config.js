module.exports = {
    publicPath: "//app-two/",
    css: {
        extract: false
    },
    configureWebpack: {
        devtool: 'none', 
        output: {
            library: "singleVue", 
            libraryTarget: "window", 
        }
    },
    devServer: {
        contentBase: './',
        compress: true,
    }
};
