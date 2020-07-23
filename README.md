# 前端数据可视化

## 基础知识

* 1.Canvas

> canvas绘图流程
```
1. 编写canvas标签（注意指定宽高）
2. 获取canvas DOM对象
3. 获取Canvas对象
4. 设置绘图属性
5. 调用绘图API
```

* 2. SVG

> SVG 意为可缩放矢量图形（Scalable Vector Graphics）。

* 3. WebGL

> WebGL（Web Graphics Library）是一种 3D 绘图协议，WebGL可以为 HTML5 Canvas 提供硬件3D加速渲染，这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。

* 4. zrender

> zrender 是二维绘图引擎，它提供 Canvas、SVG、VML 等多种渲染方式。ZRender 也是 ECharts 的渲染器。

```
* zrender 绘图的流程

1. 引入 zrender 库
2. 编写 div 容器
3. 初始化 zrender 对象
4. 初始化 zrender 绘图对象
5. 调用 zrender add 方法绘图

```

[zrender官网](https://ecomfe.github.io/zrender-doc/public/)

* 5. D3

> D3（Data-Driven Documents） 是一个 Javascript 图形库，基于 Canvas、Svg 和 HTML。

[D3.js 学习之路](https://zhuanlan.zhihu.com/p/38001672)

* 6. Three.js

> Three.js 是一个基于 WebGL 的 Javascript 3D 图形库

## Canvas进阶案例：图片压缩
`详见： canvas-compress.html`

## Highcharts

> Highcharts 是一个用纯JavaScript编写的一个图表库， 能够很简单便捷的在web网站或是web应用程序添加有交互性的图表，并且免费提供给个人学习、个人网站和非商业用途使用。Highcharts 系列包含 Highcharts JS，Highstock JS，Highmaps JS 共三款软件，均为纯 JavaScript 编写的 HTML5 图表库。

## AntV

> AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。

* G2 案例：折线图

```

*** Antv G2 的绘图流程 ***
1. 引入 js 库
2. 编写渲染容器 DOM
3. 准备渲染数据
4. 获取渲染 DOM 对象
5. 初始化 G2 绘图对象（如：G2Plot.Line），配置绘图参数
6. 调用 render 完成渲染

```

* G6 案例：绘制矢量图
```js
// 完成G6图的初始化
const data = {};
const graph = new G6.Graph({
  container: 'g6-chart',
  width: 800,
  height: 500
});
graph.data(data); // 绑定数据源
graph.render(); // 绘制矢量图
```

```

*** Antv G6 的绘图流程 ***
1. 引入 js 库
2. 编写渲染容器 DOM
3. 准备渲染数据
4. 获取渲染 DOM 对象
5. 初始化 G6 绘图对象（如：G6.Graph），配置绘图参数
6. 调用 render 完成渲染

```

* L7 案例：气泡图

```

*** Antv L7 的绘图流程 ***
1. 引入 js 库
2. 编写渲染容器 DOM
3. 初始化地图对象 L7.Scene
4. 请求数据
5. 数据清洗
6. 初始化绘图对象（如：L7.PointLayer）
7. 调用 L7.Scene.addLayer 方法绘图

```

## Echarts 基础

* 1. 入门案例：销售柱状图
```

*** ECharts 的绘图流程 ***
1. 引入 js 库
2. 编写渲染容器 DOM，添加 width 和 height 样式属性
3. 获取渲染 DOM 对象
4. 初始化 ECharts 对象
5. 编写 option 参数
6. 调用 setOption 完成渲染

```

* 2. 自定义主题

[https://www.echartsjs.com/theme-builder/](https://www.echartsjs.com/theme-builder/)


## git 远程分支上传
```
git remote add origin https://github.com/wp360/HTML5.git

git checkout -b visual

git status

git add .

git commit -m "add file"

git push

git push --set-upstream origin visual
```