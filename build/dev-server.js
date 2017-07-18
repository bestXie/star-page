/**
 * Created by bestxie on 2017/6/6.
 */
require('./check-versions')();

let config = require('../config');

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

let opn = require('opn');
let path = require('path');
let express = require('express');
let webpack = require('webpack');
let chalk = require('chalk');
let proxyMiddleware = require('http-proxy-middleware');
let webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
let port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
let autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
let proxyTable = config.dev.proxyTable;

let app = express();
let compiler = webpack(webpackConfig);


Date.prototype.format = function (format) {
    let o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

let devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    noInfo: false,
    stats: {
        colors: true, toJson(data){
            console.log(data)
        }
    }
});

let hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: (data) => {
        console.log(chalk.cyan(data + '  ==>>  ' + (new Date()).format("yyyy-MM-dd hh:mm:ss") + '\n'));
    }
});


function getIPAdress() {
    let interfaces = require('os').networkInterfaces();
    console.log(JSON.stringify(interfaces) + '\n');
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address != "127.0.0.1") {
                return alias.address;
            }
        }
    }
}
console.log(chalk.cyan(' start.\n  项目启动中...\n'));


// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb()
    })
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context];
    if (typeof options === 'string') {
        options = {target: options}
    }
    app.use(proxyMiddleware(options.filter || context, options))
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

let uri = 'http://localhost:' + port;
let ip = getIPAdress()

devMiddleware.waitUntilValid(function () {

    console.log('> Listening at ' + uri + '\n');
    console.log(chalk.cyan('> Listening at ' +' '+ (new Date()).format("yyyy-MM-dd hh:mm:ss S")+ ' '+ 'http://' + ip + ':' + port + '\n'));
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn('http://' + ip + ':' + port)
    }
});
