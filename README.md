## 直播源的制作
### 方法一： Nginx + ffmpeg
* 1、安装Nginx
```
Mac: brew install nginx-full --with-rtmp-module
Windows: https://nginx.org/en/download.html

验证： 在浏览器输入服务启动后生成的网址
```
[Windows 搭建 nginx rtmp服务器](https://www.cnblogs.com/sntetwt/p/11435564.html)

* 2、安装ffmpeg
```
Mac: brew install ffmpeg
Windows: https://ffmpeg.zeranoe.com/builds/

验证： ffmpeg
```
#### 关于'ffmpeg' 不是内部或外部命令,也不是可运行的程序
> 解决：官网下载ffmpeg后，ffmpeg使用需要加上ffmpeg.exe程序的全路径
* 3、配置Nginx
```
Mac: cd /usr/local/etc/nginx/
    open nginx.conf -a atom
```

```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        # 新增直播
        location /hls {
            types {
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            root /usr/local/var/www;
            add_header Cache-Control no-cache;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

}

rtmp {
    server {
        listen 1935;
        chunk_size 4000;

        # RTMP 直播流配置
        application rtmplive {
            live on;
            max_connections 1024;
        }

        # hls 直播流配置
        application hls {
            live on;
            hls on;
            hls_path /usr/local/var/www/hls;
            hls_fragment 5s;
        }
    }
}
```
> 配置完成，重启服务： nginx.exe -c conf/nginx-win.conf
#### 报错： nginx: [emerg] unknown directive "rtmp"
> 解决办法：参考文档 Windows 搭建 nginx RTMP 服务器
[https://www.cnblogs.com/linuxAndMcu/p/12517787.html](https://www.cnblogs.com/linuxAndMcu/p/12517787.html)

> 下载地址： http://nginx-win.ecsds.eu/download/

* 4、准备视频
* 5、利用ffmpeg推流

`ffmpeg.exe -re -i e:\node\h5live-demo\video.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/rtmplive/rtmp`

`ffmpeg.exe -re -i e:\node\h5live-demo\video.mp4  -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/hls/stream`

### 方法二： 集成服务
* 1. 推流命令
`ffmpeg.exe -re -i e:\node\h5live-demo\video.mp4 -c copy -f flv rtmp://localhost:1935/live/movie`
* 2.验证地址：
```
RTMP: rtmp://localhost:1935/live/movie
flv:  http://127.0.0.1:7001/live/movie.flv
HLS:  http://127.0.0.1:7002/live/movie.m3u8
```

## 服务器上操作步骤
* 1. 安装nginx
> 如果之前没有安装过nginx的，可以直接一起安装nginx-rtmp-module
* 2. 下载nginx-rtmp-module
```
cd nginx

mkdir modules

cd modules

git clone https://github.com/arut/nginx-rtmp-module.git

cd ../

yum 安装 openssl: yum -y install openssl openssl-devel

./configure --with-http_ssl_module --add-module=./modules/nginx-rtmp-module && make && make install

如何在CentOS 7上安装和使用FFmpeg
rpm -v --import http://li.nux.ro/download/nux/RPM-GPG-KEY-nux.ro
rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm

一旦启用存储库，安装FFmpeg：
yum install ffmpeg ffmpeg-devel

通过运行ffmpeg -version命令验证FFmpeg安装：
ffmpeg -version
```
[如何在CentOS 7上安装和使用FFmpeg](https://www.myfreax.com/how-to-install-ffmpeg-on-centos-7/)

* 3. nginx配置
```
user  root;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       9000;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        # hls
        location /hls {
            types {
                application/vnd.apple.mpegurl m3u8;
                video/mp2t ts;
            }
            root www;
            add_header Cache-Control no-cache;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}

    include /root/nginx/*.conf;
    # include /root/ngnix/vhosts/*.conf;
}

rtmp {
    server {
        listen 1935;
        chunk_size 4000;

        # RTMP
        application rtmplive {
            live on;
            max_connections 1024;
        }

        # hls
        application hls {
            live on;
            hls on;
            hls_path www/hls;
            hls_fragment 5s;
        }
    }
}
```
* 4. 重启服务
`nginx -s reload`
* 5. 推流
```
mkdir media
添加测试视频
cd media
ffmpeg -re -i video.mp4 -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/rtmplive/rtmp

ffmpeg -re -i video.mp4 -c copy -f flv rtmp://localhost:1935/live/movie
```
[macOS 系统 nginx + rtmp 流媒体传输实践](https://www.jianshu.com/p/4a0d44f2b465)