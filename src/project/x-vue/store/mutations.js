/**
 * Created by bestXie on 2017/6/29.
 */

export default{
    /*加载中*/
    updateLoadingStatus (state, status) {
        let loading = {};
        status = status || {};
        loading.show = status.show || false;
        loading.tips = status.tips || '';
        loading.state = status.state || '';
        state.loading = loading
    },
    updatePhotoEditorEd(state, status){
        state.photoEditorEd = status;
        console.log(state.photoEditorEd)
    },
    /*confirm*/
    confirm(state, status){
        console.log(status.filter);
        (typeof (status.show) === "undefined") && (status.show = true);
        (typeof (status.filter) === "undefined") && (status.filter = true);

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
        status = status || {};
        (typeof (status.show) === "undefined") && (status.show = true);
        state.toast = status;
    },
    /*tostError*/
    tostError(state, status){
        status = status || {};
        status.show = true;
        status.type = 'error';
        state.toast = status;
    },

}