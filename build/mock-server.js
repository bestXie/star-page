let serve = require('koa-static');
let router = require('./router.js');
let path = require('path');
let koa = require('koa');
let app = koa();

function getIPAdress() {
    let interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4') {
                return alias.address;
            }
        }
    }
}

app.use(serve('.'));
app.use(router.routes());
app.use(router.allowedMethods());
let server = require('http').createServer(app.callback());
server.listen(8999, function () {
    console.log('Http server running on http://%s:%s', getIPAdress(), server.address().port);
});
