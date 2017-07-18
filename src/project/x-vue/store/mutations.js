/**
 * Created by bestXie on 2017/6/29.
 */

export default{
    /*加载中*/
    updateLoadingStatus (state, status) {
        state.loadingShow = status;
        console.log(state.loadingShow)
    },
    /*confirm*/
    confirm(state, status){
        (typeof (status.show) === "undefined") && (status.show = true);
        if (status.show) {
            if (!status.data.list) {
                status.data.list = [{id: 1, text: '确定'}];
            }
            if (!status.data.cancel) {
                status.data.cancel = '取消';
            }
        }
        state.confirm = status;
    },
    /*toast*/
    toast(state, status){
        (typeof (status.show) === "undefined") && (status.show = true);
        state.toast = status;
    }
}