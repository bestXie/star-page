<style scoped>
    @import './styles/myCmpanyApp-item-box.css';
    .myCmpanyApp-wrapper {
        width: 100%;
        background: #fff;
    }
    /**/
    .templet-tips-wrapper {
        width: 100%;
        text-align: center;
    }
    .templet-tips-top {
        width: 100%;
        margin-top: 72px;
        color: #9b9b9b;
        font-size: 24px;
    }
    .templet-tips-bottom {
        padding-top: 70px;
        text-align: center;;
        width: 100%;
        font-size: 26px;
        color: #030303;
    }
    .templet-tips-bg {
        margin: 50px auto 0;
        width: 300px;
        height: 300px;
        background: #ccc;
    }
    /**/

</style>

<template>
    <div class="wrapper">
        <div class="x-h-common"></div>
        <div class="myCmpanyApp-wrapper">


            <div class="myCmpanyApp-item-box"  v-for="item,index in 3" :key="item">
                <div class="myCmpanyApp-item-l x-border-1px">
                    <div class="x-add-icon">+</div>
                </div>
                <div class="myCmpanyApp-item-c x-border-1px-bottom">
                    <div class="myCmpanyApp-item-c-box">
                        <div class="x-title-box">
                            <h3 class="title">重命名</h3>
                            <p class="title-tips">收藏</p>
                        </div>
                    </div>
                    <div class="swipeout-item-content-r">
                        <div class="x-r-icon x-icon-back"></div>
                    </div>
                </div>
            </div>

        </div>
        <section class="templet-tips-wrapper">
            <div class="templet-tips-top">
                <div class="templet-tips-text">
                    <p>暂无我的企业应用，</p>
                    <p>点击按钮添加“我的企业应用”</p>
                </div>
                <div class="templet-tips-bg">

                </div>
            </div>
        </section>

        <div class="templet-tips-bottom">
            <p>若有任何疑问，可<span class="x-tips-color">联系我们</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
        },
        name: 'myCmpanyApp',
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
                console.log(data[0], data[1], data[2])
                data[2]()
            }
        }
    }
</script>

