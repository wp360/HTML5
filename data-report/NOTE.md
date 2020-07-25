# 数据报表开发笔记

## 项目搭建

* 1. 创建项目
`vue create data-report`

* 2. 手动选择环境配置
```
? Please pick a preset:
  default (babel, eslint)
> Manually select features


? Check the features needed for your project: (Press <space> to selec? Check the features needed for your project:
 (*) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (*) Router
 ( ) Vuex
 (*) CSS Pre-processors
 (*) Linter / Formatter
 ( ) Unit Testing
>( ) E2E Testing


? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) n


? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
  Sass/SCSS (with dart-sass)
> Sass/SCSS (with node-sass)
  Less
  Stylus


? Pick a linter / formatter config:
  ESLint with error prevention only
  ESLint + Airbnb config
> ESLint + Standard config
  ESLint + Prettier


? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save
 ( ) Lint and fix on commit


? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files
  In package.json


? Save this as a preset for future projects? (y/N) n
```

## 备注：
> 创建项目缓慢，可以使用淘宝镜像
`vue create data-report --registry=https://registry.npm.taobao.org`

> 安装中出现node-sass报错
`cnpm i`

> 启动项目出现报错
```
E:\node\visual\data-report\src\router\index.js
  7:1  error  Expected indentation of 0 spaces but found 2  indent

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

* 解决办法：package.json里lint添加--fix
```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service --fix lint"
  },
```