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