<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        padding-bottom: 1.3rem;
        height: 100%;
        box-sizing: border-box;
    }

    .banner-wrapper {
        width: 100%;
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
        padding-top: .6rem;
        text-align: center;
        font-size: .28rem;
        color: #666;
        padding-bottom: .2rem;
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
        width: 1.96rem;
        height: .46rem;
        background: #fe3824;
        font-size: .24rem;
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


</style>

<template>
    <div class="wrapper">
        <section class="banner-wrapper">
            <scroller>
                <div class="banner-item-wrapper" v-for="item,index in moduleList" :key="index"
                     @click="starClick(index)">
                    <div class="title-box">
                        <p>【模块】 banner {{item.spec}} {{item.pd ? '内边距5px' : ''}}</p>
                    </div>
                    <div class="select-warpper">

                        <component v-bind:is="item.name" :propData="item"></component>
                        <div class="select-item-current" v-if="item.current">
                            <div class="select-item-current-tips">当前使用</div>
                        </div>
                        <div class="select-item-hover" v-if="item.hover"></div>
                    </div>
                </div>
            </scroller>
        </section>
        <edit-moule-fotter @starClick="editMouleFotterEvent"></edit-moule-fotter>
    </div>
</template>

<script>

    import {getStore, setStore} from '../../../util/index'
    import EditMouleFotter from '../../../components/editMouleFotter/index.vue'
    export default {
        name: 'page_banner_index',
        components: {EditMouleFotter},
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
                    },
                  {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test1.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test2.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test3.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test4.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test5.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test6.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test7.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test8.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test9.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test10.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test11.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://hilongjw.github.io/vue-lazyload/dist/test12.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test14.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test15.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test16.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test17.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test18.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test19.jpg'},
                    {name: 'module_banner_w375h150_v100', style: '', pd: '', current: true, hover: '', spec: '375*150',imgSrc:'http://covteam.u.qiniudn.com/test20.jpg'},
                ]
            },
            starClick(index){
                this.moduleList = this.moduleList.filter(function (item, idx) {
                    item.hover = (idx === index && !item.current) ? !item.hover : false;
                    return item;
                });
            },
            editMouleFotterEvent(data){
                let currentModule = this.moduleList.filter(function (item, idx) {
                    if (item.hover) {
                        return item;
                    }
                });
                if (currentModule.length > 0) {

                    if (data === '1') {
                        this.$router.push('editmodule_showhow')
                    }
                    if (data === 'confirm') {
                        this.$router.push('edittpl_trialoredit')
                    }
                }
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

