module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint'),
        config.module
            .rule('images')
            .set('parser', {
                dataUrlCondition: {
                maxSize: 4 * 1024 // 4KiB
                }
            })
          
    },
    configureWebpack:{
        performance: {
          hints: false
        },
        optimization: {
          splitChunks: {
            minSize: 10000,
            maxSize: 250000,
          }
        }
    },
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
}

