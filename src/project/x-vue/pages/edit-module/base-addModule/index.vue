<style scoped>
    .addModular-wrapper {
        padding: .3rem;
        display: flex;
        flex-direction: column;
    }
</style>

<template>
    <div class="wrapper">
        <div class="addModular-wrapper">
            <addModular-item v-for="item,index in addModularList" :key="index" :propData="item"
                             @starClick="addModularEvent"></addModular-item>
        </div>
    </div>
</template>

<script>
    import AddModularItem from './modules/addModular-item.vue'
    export default {
        components: {
            AddModularItem
        },
        name: 'myCmpanyApp',
        data () {
            return {
                addModularList: []
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
            this.addModularList = [
                {
                    name: 'dingtalkISV',
                    title: '钉钉应用',
                    bgColor: '#4e82e5'
                },
                {
                    name: 'banner',
                    title: 'banner广告',
                    bgColor: '#fe5a6e'
                },
                {
                    name: 'doMyself',
                    title: '自助应用',
                    bgColor: '#8737cc'
                },
                {
                    name: 'stationGuide',
                    title: '网站地图',
                    bgColor: '#cc375c'
                }
            ]
        },
        computed: {},
        methods: {
            addModularEvent(data){
                console.log(data);
                this.$router.push('editModule_' + data.name)
                /*editModule_banner*/
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
            },
            deleteCmpanyApp(){
                console.log(1111);
                let name = '星任务';
                let _this = this;
                this.$store.commit('confirm', {
                    data: {
                        title: '确定删除应用“' + name + '”？',
                        list: [{id: '2', text: '删除'}]
                    },
                    onConfirm(data, cancel){
                        if (data.id == 2) {
                            console.log(data.id, 222);
                            /* _this.$store.commit('toast', {content: '已成功还原钉钉工作默认布局'});
                             _this.$router.go(-1);*/
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

