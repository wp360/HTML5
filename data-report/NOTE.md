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

* 3. 项目初始化

* 4. 安装element
`vue add element`

```
 WARN  There are uncommited changes in the current repository, it's recommended to commit or stash them first.
? Still proceed? (y/N) y

Installing vue-cli-plugin-element...

✔  Successfully installed plugin: vue-cli-plugin-element

? How do you want to import Element? // 全局引入还是按需引入，选择按需
  Fully import
> Import on demand

? Choose the locale you want to load (Use arrow keys) // 选择中文简体
> zh-CN
  zh-TW
  af-ZA
  ar
  bg
  ca
  cs-CZ
(Move up and down to reveal more choices)
```

* 5. 安装echarts
`cnpm i -S echarts`

* 6. 引入echarts
```js
// main.js
import Echarts from 'echarts'

// ...

Vue.prototype.$echarts = Echarts

```

* 7. 新建组件（TopView、SalesView、BottomView、MapView）

## 头部组件

* 1. 按需加载Element-UI的Card组件
```js
// src/plugins/element.js
import { Card } from 'element-ui'

Vue.use(Card)

```

* 2. 使用Card组件
```vue
<template>
  <div class="top-view">
    <el-card shadow="hover">
      鼠标悬浮时显示
    </el-card>
    <el-card shadow="hover">
      鼠标悬浮时显示
    </el-card>
    <el-card shadow="hover">
      鼠标悬浮时显示
    </el-card>
    <el-card shadow="hover">
      鼠标悬浮时显示
    </el-card>
  </div>
</template>
```

* 3. 按需加载布局组件
```js
import { Card, Row, Col } from 'element-ui'

Vue.use(Card)
Vue.use(Row)
Vue.use(Col)

```

* 4. Layout 布局
```vue
<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <!-- 间距设置 :body-style="{padding: 0}" -->
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
```

* 5. 公共组件(通用卡片组件)
> src/components/CommonCard/index.vue

```vue
<template>
  <div class="common-card">
    <div class="title"></div>
    <div class="value"></div>
    <div class="chart"></div>
    <div class="line"></div>
    <div class="total"></div>
  </div>
</template>
```

* 6. 新建TotalSales组件

* 7. 引入通用卡片组件

* 8. 新建组件（TotalOrders、TodayUsers、TotalUsers）

* 9. 引入对应组件

* 10. 新建mixins
```js
// mixins/commonCardMixin.js
import CommonCard from '@/components/CommonCard'

export default {
  components: {
    CommonCard
  }
}

```

* 11. vue中mixins的使用
```js
// src/components/TotalSales/index.vue
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'totalSales',
  mixins: [commonCardMixin]
}
```

* 12. 通用卡片组件样式调整

* 13. 累计销售额组件