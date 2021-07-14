# 代码目录规范

代码目录结构如下:

```
├── .vscode (项目自动化规范配置目录, 不可删！！！)
|── docs (项目文档目录)
├── public
│   └── index.html(模板首页)
├── src (源码主目录)
│   ├── assets (资源目录)
│   │   ├── common (通用资源目录)
│   │   │   └── default_avatar.png
│   │   ├── icons (svg物理资源目录)
│   │   ├── imgags (各个视图图片资源目录)
│   ├── components (基础组件或公共组件目录)
│   ├── globals (拓展总全局目录)
│   │   ├── cookies
│   │   ├── eventBus (全局公链)
│   │   │   ├── bus.ts (公链入口)
│   │   │   └── type.ts (公链类型)
│   ├── networks (TCP相关配置目录)
│   ├── locales (国际化目录)
│   │   ├── en_US.ts (英文语言资源)
│   │   └── zh_CN.ts (中文语言资源)
|   ├── routers (路由目录)
|   ├── services (接口领域目录; 含防腐层)
│   ├── store (状态机关联目录)
│   ├── styles (样式目录)
│   │   ├── common.css (公共样式)
│   |   │   ├── _base.scss (基础样式函数申明)
│   |   │   ├── _bem.scss (bem结构样式函数申明)
│   |   │   ├── _reset.scss (重置样式申明)
│   |   │   ├── _transition.scss (动画样式申明)
│   |   │   ├── _var.scss (设计规范样式申明)
│   │   ├── element-variables.scss (ui主题样式)
│   │   ├── index.scss (入口样式)
│   ├── views (视图)
│   │   ├── error (报错视图; 404)
│   │   ├── login (登录视图)
│   │   │   ├── styles (登录样式目录)
│   │   │   └── login.vue (登录视图组件)
│   │   ├── main (主界面视图)
│   │   ├── index.scss (入口样式)
│   ├── App.vue (应用总组件)
│   ├── main.js (应用总入口)
│   └──registerServiceWorker.js (sw独立线程注册注销入口)
├── tests (单元测试)
├── .browserslistrc (浏览器兼容申明配置)
├── .env.development (开发环境变量)
├── .env.production (生产环境变量)
├── .eslintignore (eslint规则白名单配置)
├── .eslintrc.js (eslint规则配置)
├── .gitignore (git白名单配置)
├── .stylelintignore (stylelint白名单配置)
├── babel.config.js (js编译器兼容配置)
├── jest.config.js (单元测试配置)
├── tsconfig.json (ts服务功能项配置)
├── package.json (项目package)
├── README.md (项目README)
├── stylelint.config.js (stylelint配置)
├── svgo.config.js (svg压缩体积配置)
├── vue.config.js (vue脚手架配置)
└── yarn.lock (yarn文件)
```