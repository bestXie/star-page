<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
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
        margin-top: 140px;

        color: #4a4a4a;
        font-size: 24px;
    }

    .templet-tips-bottom {
        width: 100%;
        height: 100px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 26px;
        color: #9b9b9b;
    }

    .templet-tips-bg {
        margin: 50px auto;
        width: 300px;
        height: 300px;
        background: #ccc;
    }

    /**/
</style>

<template>
    <div class="wrapper">

        <section class="history-wrapper" style="display: block">
            <history-box :propData="historyData" @starClick="historyItemCLick"></history-box>
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
                tabList: [],
                historyData: {
                    barData: {
                        title_l: '所有',
                        title: '历史模板',
                        total_l: '  共',
                        total: '1',
                        total_r: '个',
                        more: false
                    },
                    list: [
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1',bgcolor:'#fffcd3'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                    ]
                }
            }
        },
        mounted () {
            this.setPageTitle('我的模板');

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

