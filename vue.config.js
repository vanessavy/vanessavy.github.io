module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
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
    }
}

