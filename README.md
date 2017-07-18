# 前言
   基于vue2.0快速构建前端框架，参考阿里WEEX脚手架，项目结构和依赖文件可以随意配置
   支持快速构建项目、多项目同时dev、build分包处理,入口动态配置化

   项目目录 ./src/project/[projectNmae]/
   项目入口 ./src/project/[projectNmae]/platforms/web.entry.js

## 技术栈
vue2 + vue-router + vuex + webpack + ES6/7 + axios + sass + less

# install dependencies
npm i
### node-sass ==> cnpm i

# 启动 mock 服务器
npm run mock

# 启动 vue web dev 环境，自启服务器 at localhost:8081
npm run start --[项目名(可选)]

### dev 配置和说明
npm run start          默认dev <src/project/x-vue>中项目 env为默认的路径
npm run start -- dome  dev <src/project/dome>中项目 env为默认的路径


# Web环境下所需要的资源，这是可以正式部署的静态资源
npm run build --[项目名(可选)]

### build 配置和说明
npm run build          默认打包 <src/project/x-vue>中项目  env为默认的路径
npm run build -- dome  打包 <src/project/dome>中项目 env为默认的路径



# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 win7   Chrome 56  nodejs 6.10.0

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍


# 最终目标

1、利用 weex vue  写出跨 Android 、IOS、WEB 的一键化的完整打包脚手架

。。。敬请期待





