<style scoped>
    .show-how-wrapper {
        width: 100%;
    }

    .edit-module-fotter-wrapper {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: 26px;
    }
    .edit-module-fotter-c{
        flex: 1;
        box-sizing: border-box;
        border-top:1px #ccc solid;
        color: #4a4a4a;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .edit-module-fotter-l,.edit-module-fotter-r{
        /*width: 180px;*/
        height: 88px;
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0076ff;
    }
    .edit-module-fotter-l{
        border-right: 1px #ccc solid;
    }

</style>

<template>
    <div class="wrapper">
        <section class="show-how-wrapper">

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
                moduleList: [],
            }
        },
        mounted () {
            this.setModuleList();
            this.setPageTitle('我的星主页');
        },
        computed: {},
        methods: {
            setModuleList(){
                this.moduleList = [
                    {name: 'banner_01', style: '', pd: '', current: false, hover: '',spec:'375*60'},
                    {name: 'banner_01', style: '', pd: true, current: false, hover: '',spec:'375*60'},
                    {name: 'banner_01', style: '', pd: '', current: true, hover: '',spec:'375*90'},
                    {name: 'banner_01', style: '', pd: true, current: false, hover:false,spec:'375*90'},
                ]
            },
            starClick(index){
                this.moduleList = this.moduleList.filter(function (item, idx) {
                    item.hover = (idx === index) ? !item.hover : false;
                    return item;
                });
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

