<style lang="less" scoped>
    @import './index.less';

    .visualListt-wrapper {
        width: 100%;
        .visualList-item {
            width: 100%;
            height: 66px;
            border-bottom: 1px solid #fff;
            background: #ccc;
            img {
                width: 50px;
                height: 50px;
                line-height: 66px;
                vertical-align: middle;
                margin: 0 10px;
            }
            p {
                line-height: 66px;
                font-size: 36px;
            }
        }
    }
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello</p>
        <p class="subtitle" v-for="item in linkList" :key="item" v-on:click="getClick(item)">{{ item }}</p>
        <!--<star-list :propData="banner" @starClick="starClick"></star-list>-->
        <div v-for="item in visualList" :key="item" class="visualListt-wrapper">
            <div class="visualList-item" @click="visualitemClick(item)">
                <p><img :src="item.icon" alt="">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {getCasCheck} from '../../api/index.js'
    import starList from '../../components/starList/index.vue'

    export default {
        name: 'home',
        components: {
            starList
        },
        data () {
            return {
                visualList: [],
                linkList: [],
                link: 'DingTalk',
                login: 'login',
                register: 'register',
                dome: 'dome',
                banner: [
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    },
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    },
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'componentsApplication',
                        name: 222
                    }
                ]
            }
        },

        mounted () {
            this.linkList = [
                'Home',
                'Modify',
                'Dome',
                'sortable',
                'banner',
                'mystar',
                'restore/restore_dd_default',
               'eitTemplet_myCollection'
            ];
            /*axios.get('http://ouat.fosun.com/new_portal/api/cas/check?email=ceshi@.ddd.com').then((res) => {
             console.log(res);
             console.log(111)
             }).catch(function (err) {
             console.log(err);
             });
             getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
             console.log(res)
             });*/
            this.get_config();
        },
        methods: {
            get_config(){
                let _this = this;
                axios.get('https://taskuat.fosun.com/api/dingtalk/get_config?appid=1071&corpid=ding4199f59808b2b1df35c2f4657eb6378f').then((res) => {
                    console.log(res.data);
                    _this.ddApi_config(res.data)
                }).catch(function (err) {
                    console.log(err);
                });
            },
            ddApi_config(data){
                let _config = data.data;
                let _this = this;
                _config.agentId = _config.agentid;
                _config.jsApiList = ['runtime.permission.requestAuthCode', 'runtime.info', 'biz.contact.choose',
                    'device.notification.confirm', 'device.notification.alert', 'biz.util.previewImage',
                    'device.notification.prompt', 'biz.ding.post', 'biz.util.open', 'biz.util.datepicker',
                    'biz.util.openLink', 'device.notification.actionSheet', 'device.audio',
                    'runtime.permission.requestOperateAuthCode', 'biz.microApp.visualList'];
                dd.config(_config);
                dd.ready(function () {
                    dd.ui.webViewBounce.disable();
                    dd.ui.pullToRefresh.disable();
                    _this.getVisualList(_config.agentId);
                });
            },
            isArray(object){
                return object && typeof object === 'object' &&
                    Array == object.constructor;
            },
            getVisualList(){
                let _this = this;
                dd.biz.microApp.visualList({
                    'corpid': 'ding4199f59808b2b1df35c2f4657eb6378f',
                    onSuccess: function (data) {
                        console.log(JSON.stringify(data));
                        alert(JSON.stringify(data));
                        _this.setVisualList(data || [])
                    },
                    onFail: function (err) {
                        console.log(JSON.stringify(err));
                        alert(JSON.stringify(data));
                    }
                });
            },
            setVisualList(data){
                let visualList = data || [];
                for (let i = 0, iLen = visualList.length; i < iLen; i++) {
                    visualList[i].icon = this.releaseImg(visualList[i].icon);
                }
                this.visualList.push(visualList[i]);
            },
            releaseImg(data){
                if (data.indexOf("@") > -1) {
                    return 'http://static.dingtalk.com/media/' + data.replace('@', '') + '_200_200.png';
                } else {
                    return data;
                }
            },
            getClick (data) {
                this.$router.push(data.toLowerCase());
            },
            starClick(data){
                console.log(data, 1);
            },
            visualitemClick(data){
                console.log(data);
                let url = 'dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=ding4199f59808b2b1df35c2f4657eb6378f&appid=' + data.appId
                dd.biz.util.openLink({
                    url: url,
                    onSuccess: function () {
                    },
                    onFail: function (err) {
                    }
                })
            }
        }
    }
</script>

