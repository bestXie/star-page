<style scoped>
    /*tabList-wrapper start*/
    .tabList-wrapper {
        width: 100%;
        padding: .2rem 0;
        height: .88rem;
        background: #fff;
        box-shadow: 0px 0px 1px rgba(0,0,0,0.3);
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
        height: 100%;
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
        box-shadow:0px 0px 5px rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;

        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position:top center;
    }

    .blank-templet {
        font-size: .72rem;
        text-align: center;
        color: #f2f2f2;
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
        margin-top: 1.4rem;

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
    .templet-item-box img{
        width: 100%;
    }
    img[lazy=error]{
        vertical-align: middle;
        height: 100%;
        background-size: 100% auto;

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

                    <div class="templet-item-weapper" @click="templetItemEvent('add')">
                        <div class="templet-item-box">
                            <div class="blank-templet"><p>空白</p>
                                <p>模板</p></div>
                        </div>
                        <div class="templet-item-title">空白模板</div>
                    </div>
                    <div class="templet-item-weapper" v-for="item,index in tplList" :key="index"
                         @click="templetItemEvent(item)">
                        <div class="templet-item-box">
                            <img v-lazy="item.imgSrc" alt="" >
                        </div>
                        <div class="templet-item-title" >{{item.title}}</div>
                    </div>
                </div>
            </section>

            <section class="history-wrapper" v-if="tabList[1].current">
                <history-box :propData="snapshotData" :bgcolor="'#fffcd3'" @starClick="snapshotItemCLick"></history-box>
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
    import {getStore, setStore} from '../../../util/index';
    import {go} from '../../../util/router.js'
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
                    {name: '系统模板', id: '1'},
                    {name: '我的模板', id: '2'}
                ],
                tplList: [
                    {title: '111', imgSrc: 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template2.png', id: ''},
                    {title: '222', imgSrc: 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_historyTemplate.png', id: ''},
                    {title: '333', imgSrc: 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png', id: ''},
                    {title: '444', imgSrc: 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_historyTemplate.png', id: ''}
                ],
                historyData: {},
                currentData: {},
                snapshotData: {}
            }
        },
        mounted () {
            this.init();
        },
        methods: {
            init(){
                this.getCompanyTemplate();
                this.getStoreMyTempletTabListId();
            },
            getStoreMyTempletTabListId(){
                let tabList_id = getStore('myTemplet_tabList_id') || '1';
                this.tabList = this.tabList.filter(function (item) {
                    item.current = (item.id === tabList_id);
                    return item;
                });
                console.log(tabList_id)
            },
            async pageinit(){
                this.$store.commit('updateLoadingStatus', {show: true, tips: '图片加载中 请稍后'});
                let res = await getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
                    console.log(res, 111)

                });
                console.log(res, 3)
            },
            async getCompanyTemplate(){
                let _this = this;
                this.$store.commit('updateLoadingStatus', {show: true, tips: '数据加载中 请稍后'});
                let res = await getCompanyTemplate({companyId: 101}).catch(res => {
                    _this.$store.commit('tostError', {content: '数据获取失败!'});
                    console.log('getCompanyTemplate报错了');
                    console.log(res);
                });
                this.$store.commit('updateLoadingStatus');
                if (res) {
                    this.setCompanyTemplateDta(res.data.data);
                } else {
                    let data = {
                        "data": {
                            "historyData": [
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
                                "imgSrc": '',
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
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
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
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
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
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
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
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
                                "star": null
                            }],
                            "currentData": [{
                                "companyId": 101,
                                "templateId": 102,
                                "templateName": "测试模板",
                                "templateTitle": "测试模2",
                                "current": 1,
                                "templateOrder": 1,
                                "templateStyleId": 101,
                                "templateStyle": 1,
                                "version": "100",
                                "history": null,
                                "creationTime": "2017.7.7 14:03",
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
                                "star": 1
                            }],
                            "snapshotData": [{
                                "companyId": 101,
                                "templateId": 103,
                                "templateName": "测试模板",
                                "templateTitle": "昂贵的黄金三",
                                "current": 0,
                                "templateOrder": 2,
                                "templateStyleId": 101,
                                "templateStyle": 0,
                                "version": "100",
                                "history": null,
                                "creationTime": "2017.7.7 14:03",
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template2.png',
                                "star": 1
                            }, {
                                "companyId": 101,
                                "templateId": 104,
                                "templateName": "测试模板",
                                "templateTitle": "测试模4",
                                "current": 0,
                                "templateOrder": 2,
                                "templateStyleId": 101,
                                "templateStyle": 0,
                                "version": "100",
                                "history": null,
                                "creationTime": "2017.7.7 14:03",
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
                                "star": null
                            }, {
                                "companyId": 101,
                                "templateId": 105,
                                "templateName": "测试模板",
                                "templateTitle": "测试模5",
                                "current": 0,
                                "templateOrder": 2,
                                "templateStyleId": 101,
                                "templateStyle": 0,
                                "version": "100",
                                "history": null,
                                "creationTime": "2017.7.7 14:03",
                                "imgSrc": 'http://apptest.fosun.com/m/x-vue/img/icon_myTemplate_Template.png',
                                "star": null
                            }]
                        }
                    };
                    this.setCompanyTemplateDta(data.data);
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
                this.tabList = this.tabList.filter(function (item, idx) {
                    item.current = (idx === index);
                    if (idx === index) {
                        setStore('myTemplet_tabList_id', item.id)
                    }
                    return item;
                });
            },
            templetItemEvent(data){
                if (data&&data==='add') {
                    this.$router.push('edittpl_trialoredit');
                    return false;
                }
                this.$router.push('edittpl_tryout_forward');

            },
            tplItemCLickOnmore(item, type, data){
                console.log('tplItemCLickOnmore', item, type, data);
                this.$router.push('edittpl_tryout_forward');
            },
            tplItemCLickOndelete(item, type, data){
                console.log('tplItemCLickOndelete', item, type, data);
                let _this = this;
                this.$store.commit('confirm', {
                    data: {
                        title: '确定删除“' + item.templateName + 'banner广告”吗？',
                        list: [{id: 1, text: '确定删除'}]
                    },
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            _this.deleteTplItemById()
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });

            },
            async deleteTplItemById(id){
                let _this = this;
                this.$store.commit('updateLoadingStatus', {show: true, tips: '模板删除中 请稍后'});
                let res = await getCompanyTemplate({companyId: 101}).catch(res => {
                    _this.$store.commit('tostError', {content: '模板删除失败!（001）'});
                    console.log('getCompanyTemplate报错了');
                    console.log(res);
                });
                this.$store.commit('updateLoadingStatus');
            },
            tplItemCLickOndefault(item, type, data){
//                console.log('tplItemCLickOndefault', item, type, data);
                dd.device.notification.prompt({
                    title: "请输入模板名称",
                    buttonLabels: ['确认', '取消'],
                    onSuccess : function(result) {
                        //onSuccess将在点击button之后回调
                        /*
                         {
                         buttonIndex: 0, //被点击按钮的索引值，Number类型，从0开始
                         value: '' //输入的值
                         }
                         */
                        alert(JSON.stringify(result))
                    },
                    onFail : function(err) {}
                });
            },
            tplItemCLick(type, data){
                if (!data.type) {
                    this.$store.commit('tostError', {content: '001数据读取失败'});
                    return false;
                }
                if(data.type==='link'){
                    go(data.data, this.$router);
                    return false;
                }
                let item = this[type + 'Data'] && this[type + 'Data'].list && this[type + 'Data'].list[data.data] || '';
                if (!item) {
                    this.$store.commit('tostError', {content: '002数据读取失败'});
                    return false;
                }
                this['tplItemCLickOn' + data.type] && this['tplItemCLickOn' + data.type](item, type, data);
//                more delete  default primary
//                data.callback && data.callback();
            },
            historyItemCLick(data){
                this.tplItemCLick('history', data);
            },
            snapshotItemCLick(data){
                this.tplItemCLick('snapshot', data);
            },
            currentItemCLick(data){
                this.tplItemCLick('current', data);
            }
        }
    }
</script>


