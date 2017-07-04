/**
 * Created by bestXie on 2017/6/29.
 */

export default{
    increment (state) {
        state.count++
    },
    balance (state) {

    },
    updateLoadingStatus (state, status) {
        state.loadingShow = status;
        console.log(state.loadingShow)
    },
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
    toast(state, status){
        (typeof (status.show) === "undefined") && (status.show = true);
        state.toast = status;
    }
}