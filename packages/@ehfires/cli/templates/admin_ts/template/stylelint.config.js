module.exports = {
  defaultSeverity: "error",
  extends: [
    "stylelint-config-airbnb",
    "stylelint-config-css-modules",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: [
    "stylelint-scss",
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    // 不要使用已被 autoprefixer 支持的浏览器前缀
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    // 最多允许嵌套7层，去掉默认的最多2层
    "max-nesting-depth": 7,
    // 颜色值要小写
    "color-hex-case": "lower",
    // 颜色值能短则短
    "color-hex-length": "short",
    // 不能用important
    "declaration-no-important": true,
    // 允许id作为css选择器
    "selector-max-id": 2,
    // 去掉小数点前面的0
    "number-leading-zero": "always",
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/dollar-variable-pattern": null,
  },
};
