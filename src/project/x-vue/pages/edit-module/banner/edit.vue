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
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off"
                                       spellcheck="false"
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
                        <edit-box :propData="3" @starClick="editItemCLick"></edit-box>
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
    export default {
        name: 'page_banner_index',
        components: {toast, EditBox},
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
            }
        },
        mounted () {
        },
        computed: {},
        methods: {
            toastCLick(){

            },
            tplItemCLick(type, data){
                console.log(data);
                console.log(type);
                if (type === 'more') {
                    this.$router.push('editmodule_banner_addormodify');
                    return false;
                }
                if (data.type && data.type === 'more') {
//                    this.$router.push(data.data);
                }
                if (data.type && data.type === 'delete') {
//                    this.$router.push(data.data)
                }
                if (data.type && data.type === 'default') {
//                    this.$router.push(data.data)
                }
                if (data.type && data.type === 'primary') {
//                    this.$router.push(data.data)
                }
                data.callback && data.callback()
            },
            editItemAddCLick(data){
                this.tplItemCLick('more', data)
            },
            editItemCLick(data){
                this.tplItemCLick('item', data)
            }
        }
    }
</script>

