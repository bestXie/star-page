<style scoped>
    /*tabList-wrapper start*/
    @import "./styles/abList-wrapper.css";
    /*tabList-wrapper end*/
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    /**/
    .templet-wrapper {
        width: 100%;
        padding: 0 54px;
        padding-top: 54px;
        background: #f8f8f8;
        box-sizing: border-box;
    }

    .templet-item-weapper {
        width: 300px;
        float: left;
        margin-bottom: 50px;
    }

    .templet-item-weapper:nth-child(even) {
        float: right;
    }

    .templet-item-box {
        width: 100%;
        height: 532px;
        border: 1px #c8c8c8 solid;
        box-shadow: 0px 0px 3px #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blank-templet {
        font-size: 100px;
        text-align: center;
        color: #ccc;
    }

    .templet-item-title {
        width: 100%;
        font-size: 26px;
        color: #4a4a4a;
        padding-top: 24px;
        text-align: center;
        height: 30px;
        line-height: 30px;
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
        overflow: hidden;
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
        <section class="tabList-wrapper x-border-1px-bottom">
            <div class="tabList-box">
                <div class="tab-item" v-for="item,index in tabList" :key="item" :class="{current:item.current}"
                     @click="tabTtemEvent(index)">{{item.name}}
                </div>
            </div>
        </section>

        <section class="templet-wrapper" style="display: none">
            <div class="templet-item-weapper">
                <div class="templet-item-box">
                    <div class="blank-templet"><p>空白</p>
                        <p>模板</p></div>
                </div>
                <div class="templet-item-title">空白模板</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box"> 2
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box"> 3
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box"> 4
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box"> 5
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box"> 6
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
        </section>

        <section class="history-wrapper" style="display: none">
            <history-box @starClick="historyItemCLick"></history-box>
        </section>

        <section class="templet-tips-wrapper" style="display: block">
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
                templet: {
                    list: []
                },
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
            this.tabList = [
                {name: '模板', id: '1', current: true},
                {name: '最近', id: '2'}
            ];
            this.templet.list = [
                {}
            ]
        },
        computed: {},
        methods: {
            tabTtemEvent(index){
                this.tabListr = this.tabList.filter(function (item, idx) {
                    item.current = (idx === index) ? true : false;
                    return item;
                });
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

