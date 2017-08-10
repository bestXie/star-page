<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    /**/
    .history-wrapper {
        background: #f8f8f8;
        box-sizing: border-box;
        width: 100%;

    }

    /**/
    .templet-tips-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .templet-tips-top {
        width: 100%;
        margin-top: 1.4rem;

        color: #4a4a4a;
        font-size: .24rem
    }

    .templet-tips-bottom {
        width: 100%;
        height: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: .26rem;
        color: #9b9b9b;
    }

    .templet-tips-bg {
        margin: .5rem auto;
        width: 3rem;
        height: 3rem;
        background: #ccc;
    }

    /**/
</style>

<template>
    <div class="wrapper">
        <scroller>
            <section class="history-wrapper" style="display: block">
                <history-box :propData="snapshotData" @starClick="historyItemCLick"></history-box>
            </section>

            <section class="templet-tips-wrapper" style="display: none">
                <div class="templet-tips-top">
                    <div class="templet-tips-text">
                        <p>你还未使用过任何模板，</p>
                        <p>请到“<span class="x-tips-color">模板</span>”选择您喜欢的模板！</p>
                    </div>
                    <div class="templet-tips-bg">

                    </div>
                </div>
                <div class="templet-tips-bottom">
                    <p>若有任何疑问，可<span class="x-tips-color">联系我们</span></p>
                </div>
            </section>
        </scroller>
    </div>
</template>

<script>
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../plugins/swipeout/';
    import HistoryBox from './modules/history-box.vue'
    export default {
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            HistoryBox
        },
        name: 'myTemplet',
        data () {
            return {
                snapshotData: {
                    barData: {
                        title_l: '',
                        title: '',
                        total_l: '  共',
                        total: '6',
                        total_r: '个',
                        more: false
                    },
                    list: [
                        {
                            "companyId": 101,
                            "templateId": 101,
                            "templateName": "测试模板",
                            "templateTitle": "测试模1",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": 'ssss',
                            "star": 1
                        }, {
                            "companyId": 101,
                            "templateId": 110,
                            "templateName": "测试模板",
                            "templateTitle": "测试模10",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 112,
                            "templateName": "测试模板",
                            "templateTitle": "测试模11",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 113,
                            "templateName": "测试模板",
                            "templateTitle": "测试模12",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 114,
                            "templateName": "测试模板",
                            "templateTitle": "测试模13",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 114,
                            "templateName": "测试模板",
                            "templateTitle": "测试模13",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 114,
                            "templateName": "测试模板",
                            "templateTitle": "测试模13",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 114,
                            "templateName": "测试模板",
                            "templateTitle": "测试模13",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 114,
                            "templateName": "测试模板",
                            "templateTitle": "测试模13",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }, {
                            "companyId": 101,
                            "templateId": 114,
                            "templateName": "测试模板",
                            "templateTitle": "测试模13",
                            "current": 0,
                            "templateOrder": 2,
                            "templateStyleId": 101,
                            "templateStyle": 0,
                            "version": "100",
                            "history": 1,
                            "creationTime": "2017.7.7 14:03",
                            "imgSrc": '',
                            "star": null
                        }
                    ]
                }
            }
        },
        mounted () {

        },
        computed: {},
        methods: {
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
            },
            btnEvent(){

            },
            historyItemCLick(data){
                console.log(data.data, data.type, data.callback)
                data.callback()
            }
        }
    }
</script>

