<style scoped>
    /*tabList-wrapper start*/
    .tabList-wrapper {
        width: 100%;
        padding: 20px 0;
        height: 88px;
        background: #fff;
    }

    .tabList-box {
        width: 690px;
        margin: 0 auto;
        box-sizing: border-box;
        border: solid 2px #0076ff;
        border-radius: 6px;
        display: flex;
        height: 48px;

    }

    .tab-item {
        flex: 1;
        height: 46px;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 26px;
    }

    .tab-item.current {
        background: #0076ff;
        color: #fff;
    }

    .tab-item:last-child {
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }

    .tab-item:first-child {
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
    }

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
        display: flex;
    }

    .templet-box {
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
        width: 100%;
    }

    /**/
</style>

<template>

    <div class="wrapper">
        <scroller>
            <section class="tabList-wrapper x-border-1px-bottom">
                <div class="tabList-box">
                    <hover-style class="tab-item" v-for="item,index in tabList" :key="item"
                                 :class="{current:item.current}"
                                 @starClick="tabTtemEvent(index)">{{item.name}}
                    </hover-style>
                </div>
            </section>


            <section class="templet-wrapper" v-if="tabList[0].current">
                <div class="templet-box">

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
                </div>
            </section>

            <section class="history-wrapper" v-if="tabList[1].current">
                <history-box :propData="snapshotData" @starClick="historyItemCLick"></history-box>


                <history-box :propData="currentData" @starClick="historyItemCLick"></history-box>

                <history-box :propData="historyData" @starClick="historyItemCLick"></history-box>
            </section>

            <section class="templet-tips-wrapper" style="display: none">
                <div class="templet-tips-top">
                    <div class="templet-tips-text">
                        <p>你还未使用过任何模板，</p>
                        <p>请到“<span class="x-tips-color">模板</span>”选择您喜欢的模板！</p>
                    </div>
                    <div class="templet-tips-bg">
                        <content-empty></content-empty>
                    </div>
                </div>
                <div class="templet-tips-bottom" style="display: none" v-if="tabList[1].current">
                    <p>若有任何疑问，可<span class="x-tips-color">联系我们</span></p>
                </div>
            </section>
        </scroller>
    </div>
</template>

<script>
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../plugins/swipeout/';
    import HistoryBox from './modules/history-box.vue'
    import {ContentEmpty}from '../../../plugins/content-empty/';
    export default {
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            HistoryBox,
            ContentEmpty
        },
        name: 'myTemplet',
        data () {
            return {
                tabList: [
                    {name: '模板', id: '1', current: true},
                    {name: '最近', id: '2'}
                ],
                historyData: {
                    barData: {
                        title_l: '',
                        title: '历史模板',
                        total_l: '  (',
                        total: '6',
                        total_r: ')',
                        more: 'editmytpl_myhistory'
                    },
                    list: [
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1',},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                    ]
                },
                currentData: {
                    barData: {
                        title_l: '',
                        title: '当前使用',
                        total_l: '',
                        total: ' ',
                        total_r: '',
                        more: false
                    },
                    list: [
                        {title: '测试模板01', tips: '2017.7.7 14:03创建'},
                    ]
                },
                snapshotData: {
                    barData: {
                        title_l: '',
                        title: '快照',
                        total_l: '  (',
                        total: '6',
                        total_r: ')',
                        more: 'editmytpl_mysnapshot'
                    },
                    list: [
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1', bgcolor: '#fffcd3'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1', bgcolor: '#fffcd3'},
                        {title: '测试模板01', tips: '2017.7.7 14:03创建', star: '1', bgcolor: '#fffcd3'},
                    ]
                }
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
        },
        methods: {
            tabTtemEvent(index){
                this.tabListr = this.tabList.filter(function (item, idx) {
                    item.current = (idx === index);
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
                console.log(data.data, data.type, data.callback);
                if (data.type && data.type == 'more') {
                    console.log(1111)
                    this.$router.push(data.data)
                }
                data.callback && data.callback()
            }
        }
    }
</script>

