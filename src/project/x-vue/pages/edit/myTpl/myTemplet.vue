<style scoped>
    /*tabList-wrapper start*/
    .tabList-wrapper {
        width: 100%;
        padding: .2rem 0;
        height: .88rem;
        background: #fff;
    }

    .tabList-box {
        width: 6.90rem;
        margin: 0 auto;
        box-sizing: border-box;
        border: solid 2px #0076ff;
        border-radius: 6px;
        display: flex;
        height: .48rem;

    }

    .tab-item {
        flex: 1;
        height:100%;
        box-sizing: border-box;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: .26rem;
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
        padding: 0 .54rem;
        padding-top: .54rem;
        background: #f8f8f8;
        box-sizing: border-box;
        display: flex;
    }

    .templet-box {
    }

    .templet-item-weapper {
        width: 3rem;
        float: left;
        margin-bottom: .5rem;
    }

    .templet-item-weapper:nth-child(even) {
        float: right;
    }

    .templet-item-box {
        width: 100%;
        height: 5.32rem;
        border: 1px #c8c8c8 solid;
        box-shadow: 0px 0px 3px #000;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .blank-templet {
        font-size:1rem;
        text-align: center;
        color: #ccc;
    }

    .templet-item-title {
        width: 100%;
        font-size: .26rem;
        color: #4a4a4a;
        padding-top: .24rem;
        text-align: center;
        height: .3rem;
        line-height: .3rem;
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
        margin-top:1.4rem;

        color: #4a4a4a;
        font-size: .24rem;
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
        width: 100%;
    }

    /**/
</style>

<template>

    <div class="wrapper">
        <scroller>
            <section class="tabList-wrapper x-border-1px-bottom">
                <div class="tabList-box">
                    <hover-style class="tab-item" v-for="item,index in tabList" :key="index"
                                 :class="{current:item.current}"
                                 @starClick="tabTtemEvent(index)">{{item.name}}
                    </hover-style>
                </div>
            </section>


            <section class="templet-wrapper" v-if="tabList[0].current">
                <div class="templet-box">

                    <div class="templet-item-weapper" @click="templetItemEvent">
                        <div class="templet-item-box">
                            <div class="blank-templet"><p>空白</p>
                                <p>模板</p></div>
                        </div>
                        <div class="templet-item-title">空白模板</div>
                    </div>
                    <div class="templet-item-weapper" v-for="item,index in tplList" :key="index"
                         @click="templetItemEvent(item)">
                        <div class="templet-item-box"> {{item.title}}
                        </div>
                        <div class="templet-item-title">{{item.title}}</div>
                    </div>
                </div>
            </section>

            <section class="history-wrapper" v-if="tabList[1].current">
                <history-box :propData="snapshotData" @starClick="snapshotItemCLick"></history-box>


                <history-box :propData="currentData" @starClick="currentItemCLick"></history-box>

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
    import {getCompanyTemplate} from '../../../api/index.js'
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
                tplList: [
                    {title: '111', imgSrc: '', id: ''},
                    {title: '111', imgSrc: '', id: ''},
                    {title: '111', imgSrc: '', id: ''},
                    {title: '111', imgSrc: '', id: ''}
                ],
                historyData: {
                },
                currentData: {
                },
                snapshotData: {
                }
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
            this.init();
        },
        methods: {
            init(){
                this.getCompanyTemplate();
            },
            async pageinit(){
                let res = await getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
                    console.log(res, 111)
                });
                console.log(res, 3)
            },
            async getCompanyTemplate(){
                let res = await getCompanyTemplate({companyId: 101}).catch(res => {
                    console.log('getCompanyTemplate报错了');
                    console.log(res);
                });
                if(res){
                    this.setCompanyTemplateDta(res.data.data);
                }
            },
            setCompanyTemplateDta(data){
                this.historyData = {
                    barData: {
                        title_l: '',
                        title: '历史模板',
                        total_l: '  (',
                        total: '6',
                        total_r: ')',
                        more: 'editmytpl_myhistory'
                    },
                    list: data.historyData
                };

                this.snapshotData = {
                    barData: {
                        title_l: '',
                        title: '快照',
                        total_l: '  (',
                        total: '6',
                        total_r: ')',
                        more: 'editmytpl_mysnapshot'
                    },
                    list: data.snapshotData
                };

                this.currentData = {
                    barData: {
                        title_l: '',
                        title: '当前使用',
                        total_l: '',
                        total: ' ',
                        total_r: '',
                        more: false
                    },
                    list: data.currentData
                }
            },
            tabTtemEvent(index){
                console.log(index)
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
            templetItemEvent(data){
                if (data) {
                    console.log(data)
                }
                this.$router.push('edittpl_trialoredit')
            },
            tplItemCLick(type,data){
                console.log(data);
                console.log(type);
                if (data.type && data.type === 'more') {
                    this.$router.push(data.data);
                }
                if (data.type && data.type === 'delete') {
//                    this.$router.push(data.data)
                }
                if (data.type && data.type === 'default') {
//                    this.$router.push(data.data)
                }
                if (data.type && data.type === 'primary') {
//                    this.$router.push(data.data)
                }
                data.callback && data.callback()
            },
            historyItemCLick(data){
                this.tplItemCLick('history',data)
            },
            snapshotItemCLick(data){
                this.tplItemCLick('snapshot',data)
            },
            currentItemCLick(data){
                this.tplItemCLick('currentI',data)
            }
        }
    }
</script>

