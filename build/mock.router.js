let router = require('koa-router')();


router.post('/post', function *(next) {
    this.body = {
        success: 2000
    };
});

router.get('/get', function *(next) {
    this.body = {
        success: 2000
    };
});

module.exports = router;
