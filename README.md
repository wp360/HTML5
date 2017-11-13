## Git 分支 - 分支的新建与合并
```js
git checkout -b readApp //新建一个分支并同时切换到那个分支上
git status
git add .
git commit -m "add file"
git push
git push --set-upstream origin readApp
```
[文档详细说明](https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6)
## Html5本地存储

sessionStorage 会话级别的本地存储，会话结束后数据就是自动清除

localStorage 永久本地存储

sessionStorage与localStorage都有四个方法来对本地存储进行操作:

1. setitem(key,value);添加本地存储数据
2. getitem(key); 通过key获取相应的value;
3. removeitem(key);通过key删除本地数据
4. clear();清空数据

### 参考实例：
```html
<style type="text/css">
    section {
        width: 600px;
        margin: 0 auto;
        border: 1px solid #000;
        box-shadow: 0px 5px 10px #c3edf3;
        border-radius: 4px;
        background: #e9dfc7;
    }

    section p {
        text-align: center;
    }

    div {
        display: inline-block;
    }

    .bg {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        border: 1px solid #000;
        margin: 5px;
        vertical-align: middle;
    }

    .bg1 {
        background: rgb(40, 53, 72);
    }

    .bg2 {
        background: #e9dfc7;
    }

    .div1 {
        text-align: center;
        display: block;
    }
</style>

<body>
    <section id="section">
        <p>海上生明月，天涯共此时。</p>
        <p>情人怨遥夜，竟夕起相思。</p>
        <p>灭烛怜光满，披衣觉露滋。</p>
        <p>不堪盈手赠，还寝梦佳期。</p>
        <p>作者简介：</p>
        <p>张九龄(678-740) : 唐开元尚书丞相，诗人。字子寿，一名博物，汉族，韶州曲江（今广东韶关市）人。长安年间进士。官至中书侍郎同中书门下平章事。后罢相，为荆州长史。诗风清淡。有《曲江集》。他是一位有胆识、有远见的著名政治家、文学家、诗人、名相。他忠耿尽职，秉公守则，直言敢谏，选贤任能，不徇私枉法，不趋炎附势，敢与恶势力作斗争，为“开元之治”作出了积极贡献。他的五言古诗，以素练质朴的语言，寄托深远的人生慨望，对扫除唐初所沿习的六朝绮靡诗风，贡献尤大。誉为“岭南第一人”。</p>
    </section>
    <div class="div1">
        <p>字体
            <button id="large_button">放大</button>
            <button id="small_button">缩小</button>
        </p>
        <div>
            <span>背景色</span>
            <div class=" bg bg1"></div>
            <div class=" bg bg2"></div>
        </div>
    </div>
    <script src="http://libs.baidu.com/jquery/1.9.1/jquery.js" type="text/javascript"></script>
    <!-- 闭包处理 (function(){})(); -->
    <script type="text/javascript">
        // 封装一个函数 --开始---
        (function () {
            //存储数据
            var Util = (function () {
                //封装一个类，作为key的前缀
                var pirfix = 'html5_reader';
                //获取key在本地的存储值
                var stroageGet = function (key) {
                    return localStorage.getItem(pirfix + key);
                }
                //讲value存进key字段
                var stroageSet = function (key, value) {
                    return localStorage.setItem(pirfix + key, value);
                }
                return {
                    stroageGet: stroageGet,
                    stroageSet: stroageSet
                }
            })();
            //封装一个函数 ---结束---
            //定义一些变量
            var bgColor;
            var textColor;
            //存储字体的大小 --开始--
            //字体要放大的容器id
            var Rootcontainer = $('#section');
            //取存储的字体大小，是一串字符串
            var initFontsize = Util.stroageGet('font-size');
            //转换为数字 initFontsize=parseInt(initFontsize);
            //如果没有存储的字体，就设置初始字号
            if (!initFontsize) {
                initFontsize = 14;
            }
            Rootcontainer.css('font-size', initFontsize);
            //存储字体的大小 --结束--
            //存储背景色和字体颜色
            textColor = Util.stroageGet('color');
            $('#section p').css('color', textColor);
            bgColor = Util.stroageGet('background');
            Rootcontainer.css('background', bgColor);
            //交互数据的绑定
            function EvantHeader() {
                //放大字体
                $('#large_button').click(function () {
                    if (initFontsize > 20) {
                        return;
                    }
                    initFontsize += 1;
                    Rootcontainer.css('font-size', initFontsize);
                    Util.stroageSet('font-size', initFontsize);
                });
                //缩小字体
                $('#small_button').click(function () {
                    if (initFontsize < 12) {
                        return;
                    }
                    initFontsize -= 1;
                    Rootcontainer.css('font-size', initFontsize);
                    Util.stroageSet('font-size', initFontsize);
                });
                //改变背景颜色和字体颜色
                $('.bg1').click(function () {
                    bgColor = 'rgb(40, 53, 72)';
                    textColor = '#fff';
                    $('#section p').css('color', textColor);
                    Util.stroageSet('color', textColor);
                    Rootcontainer.css('background', bgColor);
                    Util.stroageSet('background', bgColor);
                });
                $('.bg2').click(function () {
                    bgColor = '#e9dfc7';
                    textColor = '#000';
                    Rootcontainer.css('background', bgColor);
                    Util.stroageSet('background', bgColor);
                    $('#section p').css('color', textColor);
                    Util.stroageSet('color', textColor);
                });
            }
            EvantHeader();
        })();
    </script>
</body>
```