/**
 * Created by bestxie on 2017/6/6.
 */
import axios from 'axios';
// import router from '../router';

// 创建axios实例
const service = axios.create({
    baseURL: '' // api的base_url
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => response
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    ,
    error => {
        console.log('err' + error);// for debug
        return Promise.reject(error);
    }
);

export default service;