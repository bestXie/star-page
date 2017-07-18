<style scoped>
    .addCmpanyApp-wrapper {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        padding-left: .2rem;
    }

    .x-border-1px-bottom:last-child {
        border-bottom: 0;
    }

    .addCmpanyApp-item-box {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-flow: row;
    }

    .addCmpanyApp-item-box .input-label {
        height:.88rem;
        font-size: .34rem;
        color: #4a4a4a;
        line-height: .88rem;
    }

    .addCmpanyApp-item-box .addCmpanyApp-item-l {
        width: 2.1rem;
    }

    .addCmpanyApp-item-box .addCmpanyApp-item-r {
        flex: 1;
        box-sizing: border-box;
        padding-right: .3rem;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    .addCmpanyApp-item-box .addCmpanyApp-item-r .input {
        flex: 1;
        width: 100%;
        font-size: .34rem;
        color: #030303;
    }

    .addCmpanyApp-img {
        height: 1.8rem;
        box-sizing: border-box;
        display: flex;
        flex-flow: row;
        padding-right: .3rem;
    }

    .addCmpanyApp-img .addCmpanyApp-item-l {
        flex: 1;
        box-sizing: border-box;
        padding-right: .3rem;
        display: flex;
        flex-direction: column;
    }

    .addCmpanyApp-img .addCmpanyApp-item-r {
        width: 1.2rem;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;

    }

    .addCmpanyApp-img .addCmpanyApp-img-input {
        width: 1.2rem;
        height: 1.2rem;
        background: #ccc;
        border-radius:.2rem;
    }

    .addCmpanyApp-img .addCmpanyApp-img-title {
        padding-top: .5rem;
        font-size: .34rem;
        color: #030303;
        width: 100%;
    }

    .addCmpanyApp-img .addCmpanyApp-img-tips {
        font-size:.24rem;
        color: #8f8f8f;
        width: 100%;
    }

    .btn-box {
        padding-top: .3rem;
    }
</style>

<template>
    <div class="wrapper">
        <div class="x-h-common"></div>
        <div class="addCmpanyApp-wrapper">
            <div class=" addCmpanyApp-img x-border-1px-bottom">
                <div class="addCmpanyApp-item-l ">
                    <div class="addCmpanyApp-img-title">应用图标</div>
                    <div class="addCmpanyApp-img-tips">尺寸500px*500px</div>
                </div>
                <div class="addCmpanyApp-item-r">
                    <div class="addCmpanyApp-img-input"></div>
                </div>
            </div>
            <div class="addCmpanyApp-item-box x-border-1px-bottom">
                <div class="addCmpanyApp-item-l">
                    <div class="input-label">应用名称</div>
                </div>
                <div class="addCmpanyApp-item-r">
                    <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
                           type="text" placeholder="请输入名称（10个字）" maxlength="10">
                </div>
            </div>
            <div class="addCmpanyApp-item-box x-border-1px-bottom">
                <div class="addCmpanyApp-item-l">
                    <div class="input-label">链接地址</div>
                </div>
                <div class="addCmpanyApp-item-r">
                    <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
                           type="text" placeholder="请输入">
                </div>
            </div>

        </div>
        <div class="btn-box">
            <x-button-tab propData="" :type="btnPropData.type">
                {{btnPropData.text}}
            </x-button-tab>
        </div>
        <div class="btn-box">
            <x-button-tab propData="" type="submit" @starClick="deleteCmpanyApp">
                删除测试
            </x-button-tab>
        </div>
    </div>
</template>

<script>
    import {XButtonTab} from '../../../plugins/button-tab/index.js'
    export default {
        components: {
            XButtonTab
        },
        name: 'myCmpanyApp',
        data () {
            return {
                tabList: [],
                templet: {
                    list: []
                },
                btnPropData: {
                    type: 'disabled',
                    text: '添加'
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
            deleteCmpanyApp(){
                console.log(1111);
                let name = '星任务';
                let _this = this;
                this.$store.commit('confirm', {
                    data: {
                        title: '确定删除应用“' + name + '”？',
                        list: [{id: 1, text: '删除'}]
                    },
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            _this.$store.commit('toast', {content: '已成功删除了“' + name + '”'});
                            _this.$router.go(-1)
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });
            }
        }
    }
</script>

