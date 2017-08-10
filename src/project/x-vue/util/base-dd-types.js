/**
 * Created by bestXie on 2017/8/3.
 */

/**
 * dd_base
 * 钉钉方法
 */

let dd_base = {
    setTitle(title) {
        dd.ready(function () {
            dd.ui.webViewBounce.disable();
            dd.ui.pullToRefresh.disable();
            dd.biz.navigation.setTitle({
                title: title,
                onSuccess: function (result) {

                },
                onFail: function (err) {
                    alert(err)
                }
            });
            dd.biz.navigation.setRight({
                show: false,
            });
        });
        dd.error(function (error) {
            alert('dd error: ' + JSON.stringify(err));
        });
    }
};

export const DD = dd_base;