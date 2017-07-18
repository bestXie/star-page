<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        background: #fff;
    }

    .top-wrapper {
        width: 100%;
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .top-wrapper img {
        width: 100%;
    }

    .bottom-wrapper {
        width: 100%;
        height: 2.5rem;
        display: flex;
        flex-direction: column;
    }

    .btn-tips-box {
        width: 100%;
        height: .3rem;
    }

    .btn-box {
        width: 100%;
        height: 2.2rem;
        display: flex;
        flex-direction: column;
    }

    .btn-tips {
        text-align: center;
        font-size: .26rem;
        color: #8e8e8e;
    }
</style>

<template>

    <div class="wrapper">
        <section class="top-wrapper">
            <img src="./../../../images/restore/icon_RestoreLayout_Dingtalk.png" alt="">
        </section>
        <section class="bottom-wrapper">
            <div class="btn-tips-box">
                <p class="btn-tips">点击以下按钮，还原钉钉默认布局</p>
            </div>
            <div class="btn-box">
                <x-button-tab propData="" @starClick="btnEvent">
                    使用钉钉默认布局
                </x-button-tab>
            </div>
        </section>

    </div>
</template>

<script>
    import {XButtonTab} from '../../../plugins/button-tab/index.js'
    export default {
        components: {
            XButtonTab,
        },
        name: 'dd_default',
        mounted () {
            this.setPageTitle('还原钉钉默认布局');
        },
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
                let _this = this;

                this.$store.commit('confirm', {
                    data: {
                        title: '确认还原钉钉默认首页？',
                    },
                    filter: true,
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            console.log(data.id);
                            _this.$store.commit('toast', {content: '已成功还原钉钉工作默认布局'});
                            _this.$router.go(-1);
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

