const { defineConfig } = require('@vue/cli-service')
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('tiff')
      .test(/\.(tif|tiff)$/)
      .use('file-loader')
        .loader('file-loader')
        .options({
          name: '[name].[hash:8].[ext]',
          outputPath: 'assets/img',
        });
  }
};