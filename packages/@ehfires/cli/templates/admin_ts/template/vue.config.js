const path = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  transpileDependencies: ["vuex-module-decorators"],
  pluginOptions: {
    mock: {
      entry: "mock/index.js",
      mockDir: "mock",
      prefix: "",

      disable: false,
      log: true,
    },
  },
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: "./src/styles/index.scss",
        })
        .end();
    });
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
      },
    },
    plugins: [
      new StylelintPlugin({
        files: ["**/*.{html,vue,css,sass,scss}"],
        fix: false,
        cache: true,
        failOnError: false,
      }),
    ],
  },
};
