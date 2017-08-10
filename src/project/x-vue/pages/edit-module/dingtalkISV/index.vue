<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        padding-bottom: 1rem;
        height: 100%;
        box-sizing: border-box;
    }

    .doMyself-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .doMyself-item-wrapper {
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
        border: .04rem solid #0076FF;
        top: 0;
        left: 0;
        bottom: 0;
        box-sizing: border-box;
    }


</style>

<template>
    <div class="wrapper">
        <section class="doMyself-wrapper">
            <scroller>
                <div class="doMyself-item-wrapper" v-for="item,index in moduleList" :key="index"
                     @click="starClick(index)">
                    <div class="title-box">
                        <p>【模块】 钉钉应用 {{item.spec}} {{item.bg}}</p>
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
                    {
                        name: 'module_dingtalkISV_h5v1_v100',
                        title: '常用应用3',
                        style: {background: ''},
                        pd: true,
                        bg: '黄色背景',
                        hover: '',
                        spec: '5格',

                    },
                    {
                        name: 'module_dingtalkISV_h3v3_v100',
                        title: '常用应用1',
                        style: '',
                        bg: '9格',
                        current: true,
                        hover: '',
                        spec: '横排'
                    },
                    {
                        name: 'module_dingtalkISV_h4v2_v100',
                        title: '常用应用2',
                        style: {background: ''},
                        pd: true,
                        bg: '黄色背景',
                        current: false,
                        hover: '',
                        spec: '5格'
                    },

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

