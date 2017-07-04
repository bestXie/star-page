/**
 * Created by bestxie on 2017/6/6.
 */
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let baseCasUrl = 'http://ouat.fosun.com';
let routerMode = 'history';
let imgBaseUrl = 'http://apptestuat.fosun.org/';


if (process.env.NODE_ENV == 'development') {//开发

} else if (process.env.NODE_ENV == 'production') {//生产
    // baseUrl = 'http://ouat.fosun.com'
} else if (process.env.NODE_ENV == 'local') {//测试
    baseUrl = 'http://ouat.fosun.com'
}


export {
    baseUrl,
    baseCasUrl,
    routerMode,
    imgBaseUrl,
}