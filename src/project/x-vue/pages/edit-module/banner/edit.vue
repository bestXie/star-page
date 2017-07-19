<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        padding-top: .7rem;
        height: 100%;
        box-sizing: border-box;
    }

    .banner-edit-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .banner-edit-box {
        padding-top: .2rem;
    }

</style>

<template>
    <div class="wrapper">
        <toast :propData="toastData" @starClick="toastCLick"></toast>
        <section class="banner-edit-wrapper">
            <scroller>
                <section class="banner-edit-box">

                    <div class="bar-container-wrapper">
                        <div class="bar-container-item-box x-border-1px-bottom">
                            <div class="bar-container-item-l">
                                <div class="input-label">模块名称</div>
                            </div>
                            <div class="bar-container-item-r">
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
                                       type="text" placeholder="广告图片" maxlength="10">
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>banner广告(109)</p>
                    </div>
                    <div class="edit-item-box">
                        <edit-box :propData="propDataAdd" @starClick="editItemAddCLick"></edit-box>
                        <edit-box :propData="bannerList" @starClick="editItemCLick"></edit-box>
                    </div>

                </section>
            </scroller>
        </section>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    import toast from '../../../plugins/toast/index.vue'
    import EditBox from './modules/edit-box.vue'
    import {sortableMixin} from '../../../mixins/eid_sortableMixin'
    export default {
        name: 'page_banner_index',
        components: {toast, EditBox},
        mixins: [sortableMixin],
        data () {
            return {
                moduleList: [],
                propDataAdd: [{
                    title: '添加banner图片',
                    type: 'add'
                }],
                toastData: {
                    show: true,
                    content: '点击查看快照预览',
                    type: 'snapshot'
                },
                bannerList: []
            }
        },
        mounted () {
            this.bannerList=[
                {imgSrc:'',type:'',title:'angela1',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela2',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela3',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela4',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela5',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela6',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela7',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela8',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela9',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela10',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela11',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela12',tips:'375*90px'},
                {imgSrc:'',type:'',title:'angela13',tips:'375*90px'}
            ]
        },
        computed: {},
        methods: {
            toastCLick(){

            },
            tplItemCLick(type, data){
                if (type === 'more') {
                    this.$router.push('editmodule_banner_addormodify');
                    return false;
                }
                if (data.type && data.type === 'more') {
//                    this.$router.push(data.data);
                }
                if (data.type && data.type === 'moveDown') {
                    this.moveDownSortable(this.bannerList,data.data)
                }
                if (data.type && data.type === 'moveUp') {
                    this.moveUpSortable(this.bannerList,data.data);
                }
                if (data.type && data.type === 'delete') {
//                    this.$router.push(data.data)
                    this.deleteBanner(data.data)
                    return false;
                }
                if (data.type && data.type === 'default') {
//                    this.$router.push(data.data)
                }
                if (data.type && data.type === 'primary') {
//                    this.$router.push(data.data)
                    this.moveTopSortable(this.bannerList,data.data);
                }
                data.callback && data.callback()
            },
            editItemAddCLick(data){
                this.tplItemCLick('more', data)
            },
            editItemCLick(data){
                this.tplItemCLick('item', data)
            },
            deleteBanner(index){
                let _this = this;
                let data = this.bannerList[index];
                this.$store.commit('confirm', {
                    data: {
                        title: '确定删除“' + data.title + 'banner广告”吗？',
                        list: [{id: 1, text: '确定删除'}]
                    },
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            _this.bannerList.splice(index, 1);
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });
            },
        }
    }
</script>

