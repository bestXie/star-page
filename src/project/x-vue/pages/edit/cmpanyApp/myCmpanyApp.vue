<style scoped>
    .myCmpanyApp-wrapper {
        width: 100%;
        background: #fff;
    }

    .myCmpanyApp-item-box {
        width: 100%;
        padding-left: .2rem;
        height: 1.3rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
    }

    /**/
    .templet-tips-wrapper {
        width: 100%;
        text-align: center;
    }

    .templet-tips-top {
        width: 100%;
        margin-top: .72rem;
        color: #9b9b9b;
        font-size: .24rem;
    }

    .templet-tips-bottom {
        padding-top: .7rem;
        text-align: center;;
        width: 100%;
        font-size: .26rem;
        color: #030303;
    }

    .templet-tips-bg {
        margin: .5rem auto 0;
        width: 100%;
    }

    /**/

</style>

<template>
    <div class="wrapper">
        <div class="x-h-common"></div>
        <div class="myCmpanyApp-wrapper">

            <my-cmpany-app-item class="myCmpanyApp-item-box" v-for="item,index in cmpanyAppList" :key="index"
                                :propData="item" @starClick="cmpanyAppItemEvent"></my-cmpany-app-item>
            <my-cmpany-app-item class="myCmpanyApp-item-box" :propData="defaultData"
                                @starClick="cmpanyAppItemEvent"></my-cmpany-app-item>

        </div>
        <section class="templet-tips-wrapper">
            <div class="templet-tips-top">
                <div class="templet-tips-text">
                    <p>暂无我的企业应用，</p>
                    <p>点击按钮添加“我的企业应用”</p>
                </div>
                <div class="templet-tips-bg">
                    <content-empty></content-empty>
                </div>
            </div>
        </section>

        <div class="templet-tips-bottom">
            <p>若有任何疑问，可<span class="x-tips-color">联系我们</span></p>
        </div>
    </div>
</template>

<script>
    import {IconAdd}from '../../../plugins/icon-add';
    import {ContentEmpty}from '../../../plugins/content-empty/';
    import myCmpanyAppItem from './modules/my-cmpany-app-item.vue';
    export default {
        components: {
            IconAdd,
            ContentEmpty,
            myCmpanyAppItem
        },
        name: 'myCmpanyApp',
        data () {
            return {
                cmpanyAppList: [],
                defaultData: {}

            }
        },
        mounted () {
            this.setPageTitle('我的模板');
            this.defaultData = {imgSrc: 'defaultData', title: '添加企业应用', tips: '添加企业自主研发的任何应用'};
            this.cmpanyAppList = [{imgSrc: '', title: '1', tips: '1'}, {imgSrc: '', title: '2', tips: '2'}, {
                imgSrc: '3',
                title: '3',
                tips: '3'
            }]
        },
        methods: {
            cmpanyAppItemEvent(data){
                data = data || {};
                if (data.imgSrc === 'defaultData') {
                    this.$router.push('/editapp_addcmpanyapp');
                } else {
                    this.$router.push('/editapp_addcmpanyapp');
                }
            },
            setPageTitle(data){
                dd.ready(function () {
                    dd.ui.webViewBounce.disable();
                    dd.ui.pullToRefresh.disable();
                    dd.biz.navigation.setTitle({
                        title: '我的星主页',//控制标题文本，空字符串表示显示默认文本
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
        }
    }
</script>

