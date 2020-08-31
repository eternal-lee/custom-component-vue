// vue.config.js

module.exports = {
  // 将 examples 目录添加为新的页面
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      template: "public/index.html",
      // 输出文件名
      filename: "index.html"
    }
  },
  // 基本路径,相对路径
  publicPath: "./",
  // 输出文件目录
  outputDir: process.env.outputDir ? process.env.outputDir : "./dist",
  lintOnSave: false, // 关闭eslint
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置 配置高于chainWebpack中关于css loader的配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  devServer: {
    port: 8081,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true
      },
      "/foo": {
        target: "<other_url>",
        changeOrigin: true
      }
    }
  }
};
