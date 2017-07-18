<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        padding-bottom: .88rem;
        box-sizing: border-box;
    }

    .show-how-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
        flex: 1;
    }

    .edit-module-fotter-wrapper {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: .26rem;
    }

    .edit-module-fotter-c {
        flex: 1;
        box-sizing: border-box;
        border-top: 1px #ccc solid;
        color: #4a4a4a;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .edit-module-fotter-l, .edit-module-fotter-r {
        /*width: 180px;*/
        height: .88rem;
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0076ff;
    }

    .edit-module-fotter-l {
        border-right: 1px #ccc solid;
    }

    .show-how-box {
        width: 100%;
        min-height: calc(100vh - .88rem);
        display: table;
    }

    .show-how-content {

        display: table-cell;
        width: 100%;
        vertical-align: middle;
    }

    .show-how {
        width: 100%;
        height: auto;
    }
</style>

<template>
    <div class="wrapper">
        <section class="show-how-wrapper">
            <scroller>
                <div class="show-how-box">
                    <div class="show-how-content">
                        <div class="show-how">
                            <component v-bind:is="showHowData.name" :propData="showHowData"
                                       @click.stop="starClick(item)"></component>
                        </div>
                    </div>
                </div>
            </scroller>
        </section>
        <div class="edit-module-fotter-wrapper">
            <div class="edit-module-fotter-l">上一个</div>
            <!--<div class="edit-module-fotter-c">查看模块</div>-->
            <div class="edit-module-fotter-r">下一个</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'page_banner_index',
        components: {},
        data () {
            return {
                showHowData: {},
            }
        },
        mounted () {
            this.setModuleList();
            this.setPageTitle('我的星主页');
            this.showHowData = {
                name: 'module_banner_w375h150_v100',
                style: {background: ''},
                pd: true,
                current: false,
                hover: false,
                spec: '375*150'
            }
        },
        computed: {},
        methods: {
            setModuleList(){

            },
            starClick(index){
                console.log(1)
            },
            setPageTitle(data){
                let _this = this;
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
                        show: true,
                        control: true,
                        text: '还原布局',
                        textColor: 'red',
                        onSuccess: function (result) {
                            _this.starItemEvent('starItemEvent');
                        },
                        onFail: function (err) {
                        }
                    });
                });

                dd.error(function (error) {
                    alert('dd error: ' + JSON.stringify(err));
                });
            }
        }
    }
</script>

