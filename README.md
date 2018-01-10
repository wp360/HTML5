## 百度外卖项目
1. 步骤1：准备工作
  * index.html页面顶部 添加计算html标签fontsize的代码
  * sass中准备 base,normalize,index scss文件
  * index.scss中 引入 其他的 scss
  * index.scss中 把swiper的样式页一起合并 这里需要修改后缀名为scss
  * index.html页面中导入 index.css swiper的js zepto的 核心，事件，touch，动画，动画方法模块

2. 步骤2：定义sass混入 函数 提升编码速度
  * 函数 p2r 传入 数值 计算为 rem
  * 混入 size 传入宽 高 直接生成 宽高样式 并且计算为rem了
  * 混入 bgc  传入url 以及宽度 实现图片左右居中
  * 混入 bg   传入url 实现 背景图给容器一样大 并且添加了定位

3. 步骤3：轮播区域实现
  * 页面添加swiper结构 有7页
  * 调用swiper的js 设置swiper 滚动的方向是 竖直方向
  * 设置swiper容器的样式 让其铺满全屏
  * 调整 loading welcome 及swiper的层级 实现
      * loading 最顶层
      * welcome 第二层
      * swiper 第三层
  * 为每一页 添加不同的类名 方便后续添加样式
  * 为每一页 设置不同的背景色
