<template>
    <div class="wrapper">
        <confirm :confirm="confirm"></confirm>
        <toast :propData="toast" :zindex="111"></toast>
        <router-view style="flex:1;" :class="{'x-filter':confirm.show&&confirm.filter}"></router-view>
    </div>
</template>
<script>
    import confirm from '../../../plugins/confirm/index.vue';
    import toast from '../../../plugins/toast/index.vue'

    import {mapGetters} from 'vuex';
    export default {
        name: 'edit',
        components: {
            confirm,
            toast
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'confirm',
                'toast'
            ])
        }
    }
</script>

<style lang="less">

    //公用修改的宽高默认
    .edit-container {
        width: 100%;
        height: 100%;
    }

    //公用提示语的颜色
    .x-tips-color {
        color: #0076ff;
    }

    //公用下边框
    .x-border-1px-bottom {
        position: relative;
        border-bottom: 1px #c8c8c8 solid;
    }

    //公用边框
    .x-border-1px {
        border: solid 1px #ccc;
    }

    .x-border-1px-df {
        border: solid 1px #dfdfdf;
    }

    //公用页面顶部的距离
    .x-h-common {
        width: 100%;
        height: .3rem;
    }

    /*公用标题 start*/

    //公用标题盒模型
    .x-title-box {
        box-sizing: border-box;
        padding-left: .2rem;
        max-width: 100%;
        padding-right: .4rem;
    }

    //公用提示标题
    .x-title-box .title {
        font-size: .34rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #4a4a4a;
        font-weight: 300;
    }

    //公用提示语样式
    .x-title-box .title-tips {
        font-size: .24rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #9b9b9b;

    }

    /*公用标题 enf*/

    //星任务 右箭头ICOn
    .x-r-icon {
        width: .16rem;
        height: .26rem;
    }

    //星ICON
    .x-icon-star {
        width: .4rem;
        height: .4rem;
        margin-right: .32rem;
        background: #ccc;
    }

    //文字溢出
    .x-text-overflow {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    //flex-center 居中
    .x-flex-center {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    //高斯模糊效果
    .x-filter {
        filter: blur(10px);
        -ms-filter: blur(10px);
        -moz-filter: blur(10px);
        -webkit-filter: blur(10px);
    }

    ._v-content {
        min-height: 100%;
    }

    .h-60 {
        height: .6rem;
    }

    .h-30 {
        height: .3rem;
    }

    .h-20 {
        height: .2rem;
    }

    /*....bar c start*/
    .bar-container-wrapper {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        padding-left: .3rem;
    }

    .bar-container-wrapper .x-border-1px-bottom:last-child {
        /*border-bottom: 0;*/
    }

    .edit-item-wrapper .x-swipeout-item:last-child .x-border-1px-bottom {
        /*border-bottom: 0;*/
    }

    .bar-container-item-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-flow: row;
    }

    .bar-container-item-box .input-label {
        height: .88rem;
        font-size: .34rem;
        color: #4a4a4a;
        line-height: .88rem;
    }

    .bar-container-item-box .bar-container-item-l {
        width: 2.1rem;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        justify-content: center;


    }

    .bar-container-item-box .bar-container-item-r {
        flex: 1;
        box-sizing: border-box;
        padding-right: .3rem;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .bar-container-item-box .bar-container-item-r .input {
        flex: 1;
        width: 100%;
        font-size: .34rem;
        color: #030303;
    }

    .bar-container-img {
        height: 1.8rem;
        box-sizing: border-box;
        display: flex;
        flex-flow: row;
        padding-right: .3rem;
    }

    .bar-container-img .bar-container-item-l {
        flex: 1;
        box-sizing: border-box;
        padding-right: .3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .bar-container-img .bar-container-item-r {
        width: 1.2rem;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;

    }

    .bar-container-img .bar-container-img-input {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 6px;
    }


    .bar-container-img .bar-container-img-title {
        font-size: .34rem;
        color: #030303;
        width: 100%;
    }

    .bar-container-img .bar-container-img-tips {
        font-size: .24rem;
        color: #8f8f8f;
        width: 100%;
    }

    .x-switch-item-box {
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .x-switch-item-l {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding-top: .24rem;
        padding-bottom: .24rem;
    }

    .x-switch-label {
        font-size: .34rem;
        color: #030303;
    }

    .x-switch-label-tips {
        font-size: .3rem;
        color: #8f8e94;
    }

    .x-switch {
        position: relative;
        width: 1.02rem;
        height: .62rem;

        outline: 0;
        border-radius: .31rem;
        box-sizing: border-box;
        background-color: #DFDFDF;
        -webkit-transition: background-color 0.1s, border 0.1s;
        -moz-transition: background-color 0.1s, border 0.1s;
        transition: background-color 0.1s, border 0.1s;
        appearance: none;
        -moz-appearance: none; /* Firefox */
        -webkit-appearance: none; /* Safari 和 Chrome */
    }

    .x-switch-item-r {
        font-size: 0;
        position: relative;
        padding-right: .3rem;
    }

    .x-switch:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: .62rem;
        border-radius: .31rem;
        border: 1px solid #DFDFDF;
        box-sizing: border-box;
        background-color: #FDFDFD;
        -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
        transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    }

    .x-switch:after {
        content: " ";
        position: absolute;
        top: 1px;
        left: 1px;
        width: .56rem;
        height: .56rem;
        border-radius: .28rem;
        background-color: #FFFFFF;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
        -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
        transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
    }

    .x-switch:checked:before {
        border-color: #45DB5E;
        background-color: #45DB5E;
    }

    .swipeout-item-box {
        padding-right: .3rem;
    }

    .x-switch:checked:after {
        -webkit-transform: translateX(.39rem);
        transform: translateX(.39rem);
    }

    .bar-title-wrapper {
        padding-bottom: .2rem;
        font-size: .28rem;
        color: #666;
        padding-left: .3rem;
        box-sizing: border-box;
    }
    /*... bar end*/


    /*.x-icon start  */
    .x-icon-back {
        background: url("../../../images/common/icon_common_arrowRight_gray.png") center no-repeat;
        background-size: 100% 100%;
    }

    .x-icon-yes {
        background: url("../../../images/common/icon_common_showing.png") center no-repeat;
        background-size: 100% 100%;
    }

    /*.x-icon end  */

   /* !*img lazy start*!
    img[ lazy = loading ] {
        background: #eee url("../../../images/svg/loading-spin.svg") center no-repeat;
        background-size: auto 33%;
    }

    img[ lazy = error ] {
        background: #eee url("../../../images/common/404.png") center no-repeat;
        background-size: 100%;
    }

    img[ lazy = loaded ] {
    }

    !*img lazy end*!*/

    /*common style start*/

    .wrapper {
        width: 100%;
        height: 100%;
    }

    //star-flex
    .star-flex {
        display: -webkit-flex;
        display: flex;
    }

    //页面背景定义
    .app-wrapper {
        width: 100%;
        height: 100%;
        max-width: 750px;
        margin: 0 auto;
    }

    //定义内容高度
    .app-container {
        width: 100%;
        height: 100%;
    }

    /*common style end*/

    /*color start*/
    //页面背景定义
    .app-wrapper {
        background-color: #f8f8f8;
    }

    /*color end*/
</style>
