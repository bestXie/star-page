/**
 * Created by bestXie on 2017/6/20.
 */

/*module_banner start*/
/*
 * module_banner banner广告
 module_banner_w375h90_v100,
 module_banner_w375h120_v100,
 module_banner_w375h150_v100
 * */
import {
    module_banner_w375h90_v100,
    module_banner_w375h120_v100,
    module_banner_w375h150_v100
} from '../modules/banner/index.js'
/*module_banner end*/


/*module_stationGuide start*/
/*
 * module_stationGuide 企业地图
 module_stationGuide_h2v1_icon_v100,
 module_stationGuide_h2v1_v100,
 module_stationGuide_h4v1_icon_v100,
 module_stationGuide_h4v1_v100,
 module_stationGuide_h4v2_icon_v100,
 module_stationGuide_h4v2_v100
 * */
import {
    module_stationGuide_h2v1_icon_v100,
    module_stationGuide_h2v1_v100,
    module_stationGuide_h4v1_icon_v100,
    module_stationGuide_h4v1_v100,
    module_stationGuide_h4v2_icon_v100,
    module_stationGuide_h4v2_v100
} from '../modules/stationGuide/index.js'
/*module_stationGuide end*/

/*module_doMyself start*/
/*
 * module_doMyself 自助应用
 module_doMyself_h5v1_v100,
 module_doMyself_h4v1_v100
 * */
import {
    module_doMyself_h5v1_v100,
    module_doMyself_h4v1_v100
} from '../modules/doMyself/index.js'
/*module_doMyself end*/


/*module_dingtalkISV start*/
/*
 * module_dingtalkISV
 module_dingtalkISV_h3v3_v100,
 module_dingtalkISV_h4v2_v100,
 module_dingtalkISV_h5v1_v100
 * */
import {
    module_dingtalkISV_h3v3_v100,
    module_dingtalkISV_h4v2_v100,
    module_dingtalkISV_h5v1_v100
} from '../modules/doMyself/index.js'
/*module_dingtalkISV end*/


/*base-modules start */
import {HoverStyle} from './base-modules-types.js'
/*base-modules end */

/*test start*/
import {modulesApplication01} from '../modules/application/index.js'
/*test end*/

export default Vue => {

    Vue.component('module_banner_w375h90_v100', module_banner_w375h90_v100);
    Vue.component('module_banner_w375h120_v100', module_banner_w375h120_v100);
    Vue.component('module_banner_w375h150_v100', module_banner_w375h150_v100);

    Vue.component('module_stationGuide_h2v1_icon_v100', module_stationGuide_h2v1_icon_v100);
    Vue.component('module_stationGuide_h2v1_v100', module_stationGuide_h2v1_v100);
    Vue.component('module_stationGuide_h4v1_icon_v100', module_stationGuide_h4v1_icon_v100);
    Vue.component('module_stationGuide_h4v1_v100', module_stationGuide_h4v1_v100);
    Vue.component('module_stationGuide_h4v2_icon_v100', module_stationGuide_h4v2_icon_v100);
    Vue.component('module_stationGuide_h4v2_v100', module_stationGuide_h4v2_v100);

    Vue.component('module_doMyself_h5v1_v100', module_doMyself_h5v1_v100);
    Vue.component('module_doMyself_h4v1_v100', module_doMyself_h4v1_v100);


    Vue.component('module_dingtalkISV_h3v3_v100', module_dingtalkISV_h3v3_v100);
    Vue.component('module_dingtalkISV_h4v2_v100', module_dingtalkISV_h4v2_v100);
    Vue.component('module_dingtalkISV_h5v1_v100', module_dingtalkISV_h5v1_v100);

    Vue.component('modulesApplication01', modulesApplication01);

    // base
    Vue.component('HoverStyle', HoverStyle);
};