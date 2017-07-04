<style scoped>
    .starList-wrapper {

    }
</style>

<template>

    <div class="wrapper">
        <section class="starList-wrapper">
            <x-star-item v-for="item in starList" :key="item" :propData="item" @starClick="starItemEvent"></x-star-item>
        </section>

    </div>
</template>

<script>
    import {getCasCheck} from '../../../api/index.js'
    import XStarItem from './modules/star-item.vue'

    export default {
        name: 'page_mystar',
        components: {
            XStarItem,
        },
        data () {
            return {
                starList: [],
            }
        },
        mounted () {
            this.setStarList();
            this.setPageTitle('我的星主页');
            this.position = 'top'

        },
        computed: {},
        methods: {
            starItemEvent(data){
                console.info(data);

                this.$router.push(data)
            },
            setStarList(){
                this.starList = [
                    {
                        name: 'eitTemplet_myTemplet',
                        title: '我的模板',
                        titleTips: '丰富的模板,可以编辑的模板'
                    },
                    {
                        name: 'dd_market',
                        title: '钉钉应用市场',
                        titleTips: '添加、删除钉钉应用市场的应用'
                    },
                    {
                        name: 'my_market',
                        title: '我的企业应用',
                        titleTips: '添加配置你的企业自主研发的应用'
                    },
                    {
                        name: 'contact_us',
                        title: '使用帮、意见反馈、建议',
                        titleTips: '使用手册、技术支持、星主页客服'
                    },
                    {
                        name: '/restore/restore_dd_default',

                        title: '测试按钮',
                        titleTips: '测试导航右侧点击按钮'
                    }
                ];
            },
            setPageTitle(data){
                var _this = this;
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
                            _this.$router.push('/restore/restore_dd_default');
                            //如果control为true，则onSuccess将在发生按钮点击事件被回调
                            /*
                                     {}
                                     */
//                            alert(result)
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

