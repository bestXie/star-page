<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .tabList-wrapper {
        width: 100%;
        padding: 20px 30px;
        box-sizing: border-box;
        border-bottom: 1px #c8c8c8 solid;
    }

    .tabList-box {
        width: 100%;
        box-sizing: border-box;
        border: solid 2px #0076ff;
        border-radius: 6px;
        display: flex;
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
        border-bottom-right-radius: 6px;
        border-top-right-radius: 6px;
    }

    .tab-item:first-child {
        border-bottom-left-radius: 6px;
        border-top-left-radius: 6px;
    }

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
    .templet-item-box{
        width: 100%;
        height: 532px;
        background: #ccc;

    }
    .templet-item-title{
        width: 100%;
        font-size: 26px;
        color: #4a4a4a;
        padding-top: 24px;
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
</style>

<template>

    <div class="wrapper">
        <section class="tabList-wrapper">
            <div class="tabList-box">
                <div class="tab-item" v-for="item,index in tabList" :key="item" :class="{current:item.current}"
                     @click="tabTtemEvent(index)">{{item.name}}
                </div>
            </div>
        </section>
        <section class="templet-wrapper">
            <div class="templet-item-weapper">
                <div class="templet-item-box">                1
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box">               2
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box">               3
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box">                4
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
            <div class="templet-item-weapper">
                <div class="templet-item-box">               5
                </div>
                <div class="templet-item-title">1111111</div>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        components: {},
        name: 'myTemplet',
        data () {
            return {
                tabList: []
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
            this.tabList = [
                {name: '模板', id: '1', current: true},
                {name: '最近', id: '2'}
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

            }
        }
    }
</script>

