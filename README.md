# vue-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Explain

``` bash	
# 素材
	页面上用到的图标网上找 阿里（http://www.iconfont.cn/）		  
# 路径问题
	dist文件夹下是打包后的代码，直接打开index.html可查看效果，或者本地配置nginx查看。
	最开始编译出现问题，一个问题是编译后直接打开index.html报错，这时改webpack中的配置路径
	还有一个问题是css中引入外部链接出错，这时css中的外部链接不要引号加http之类的
# 使用
	这个小项目我使用vue2.0进行开发，
    使用vue-cli脚手架搭建项目，vue-router进行路由道航与页面嵌套，vuex进行组件状态通讯。
    页面布局是flex,样式使用scss预处理器。
```




