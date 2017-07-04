<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .top-wrapper {
        width: 100%;
        height: calc(100% - 250px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top-wrapper img {
        width: 200px;
        height: 200px;
    }

    .bottom-wrapper {
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
    }

    .btn-tips-box {
        width: 100%;
        height: 30px;
    }

    .btn-box {
        width: 100%;
        height: 220px;
        display: flex;
        flex-direction: column;
    }

    .btn-tips {
        text-align: center;
        font-size: 26px;
        color: #8e8e8e;
    }
</style>

<template>

    <div class="wrapper">
        <section class="top-wrapper">
            <img src="./../../../../images/acatar.png" alt="">
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
    import {XButtonTab} from '../../../../plugins/button-tab/index.js'
    export default {
        components: {
            XButtonTab,
        },
        name: 'dd_default',
        data () {
            return {}
        },
        mounted () {
            this.setPageTitle('还原钉钉默认布局');
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
                let _this = this;
                this.$store.commit('confirm', {
                    data: {
                        title: '确认还原钉钉默认首页？',
                    },
                    onConfirm(data, cancel){
                        if (data.id == 1) {
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

