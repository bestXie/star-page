<style scoped>
    .banner-wrapper {
        width: 100%;
        padding-bottom: 130px;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .banner-item-wrapper {
        width: 100%;
        position: relative;
    }

    .banner-box {
        width: 100%;
        height: 100%;
    }

    .select-warpper {
        width: 100%;
    }

    .title-box {
        padding-top: 60px;
        text-align: center;
        font-size: 28px;
        color: #666;
        padding-bottom: 20px;
    }

    .bg-3BD4B6 {
        background: #3BD4B6;
    }

    .select-warpper {
        position: relative;
    }

    .select-item-current {
        width: 100%;
        height: 100%;
        position: absolute;
        border: 4px solid #fe3824;
        top: 0;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
        right: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
    }

    .select-item-current-tips {
        width: 196px;
        height: 46px;
        background: #fe3824;
        font-size: 24px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .select-item-hover {
        width: 100%;
        height: 100%;
        position: absolute;
        border: 4px solid #0076FF;
        top: 0;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
    }

    .edit-module-fotter-wrapper {
        width: 100%;
        height: 100px;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: 34px;
    }

    .edit-module-fotter-l {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        color: #4a4a4a;
    }

    .edit-module-fotter-r {
        width: 450px;
        height: 100px;
        background: #0076ff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

</style>

<template>
    <div class="wrapper">
        <section class="banner-wrapper">
            <scroller style="height:calc(100% - 120px)">
                <div class="banner-item-wrapper" v-for="item,index in moduleList" :key="item"
                     @click="starClick(index)">
                    <div class="title-box">
                        <p>【模块】 banner {{item.spec}} {{item.pd ? '内边距5px' : ''}}</p>
                    </div>
                    <div class="select-warpper">
                        <component v-bind:is="item.name" :propData="item" @click.stop="starClick(item)"></component>
                        <!--<div class="banner-item-box" :class="{'p106':item.pd}" :style="item.style">-->
                        <!--<div class="banner-item">-->
                        <!--<img src="../../../../images/banner/image_Module_Banner_750x120px.png" alt="">-->
                        <!--</div>-->
                        <!--</div>-->
                        <div class="select-item-current" v-if="item.current">
                            <div class="select-item-current-tips">当前使用</div>
                        </div>
                        <div class="select-item-hover" v-if="item.hover"></div>
                    </div>
                </div>
            </scroller>
        </section>
        <div class="edit-module-fotter-wrapper">
            <div class="edit-module-fotter-l">演示效果</div>
            <div class="edit-module-fotter-r" @click="confirm">确定使用</div>
        </div>
    </div>
</template>

<script>

    import {getStore, setStore} from '../../../../util/index'
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
                    {name: 'module_banner_w375h90_v100', style: '', pd: '', current: false, hover: '', spec: '375*90'},
                    {
                        name: 'module_banner_w375h90_v100',
                        style: {background: '#3BD4B6'},
                        pd: true,
                        current: false,
                        hover: '',
                        spec: '375*90'
                    },
                    {
                        name: 'module_banner_w375h120_v100',
                        style: '',
                        pd: '',
                        current: false,
                        hover: '',
                        spec: '375*120'
                    },
                    {
                        name: 'module_banner_w375h120_v100',
                        style: {background: '#3BD4B6'},
                        pd: true,
                        current: false,
                        hover: false,
                        spec: '375*120'
                    },
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150'},
                    {
                        name: 'module_banner_w375h150_v100',
                        style: {background: '#3BD4B6'},
                        pd: true,
                        current: false,
                        hover: false,
                        spec: '375*150'
                    }
                ]
            },
            starClick(index){
                this.moduleList = this.moduleList.filter(function (item, idx) {
                    item.hover = (idx === index && !item.current) ? !item.hover : false;
                    return item;
                });
            },
            confirm(){
                let currentModule = this.moduleList.filter(function (item, idx) {
                    if (item.hover) {
                        return item;
                    }
                });
                if (currentModule.length > 0) {
                    this.$router.push('edittpl_trialoredit')
                }
                console.log(currentModule);
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

