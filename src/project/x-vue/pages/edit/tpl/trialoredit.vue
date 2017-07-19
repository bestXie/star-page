<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .trialoredit-wrapper {
        flex: 1;
        width: 100%;
        height: 100%;
        padding-bottom: .98rem;
        box-sizing: border-box;
    }

    .scroller-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .modify-item-wrapper {
        position: relative;
    }

</style>

<template>
    <div class="wrapper">
        <toast :propData="toastData" @starClick="toastCLick"></toast>
        <div class="trialoredit-wrapper">
            <div class="scroller-wrapper" ref="tpl_scroller_box">
                <scroller ref="tpl_scroller">
                    <div v-for="(item,index) in moduleList" :key="index" class="modify-item-wrapper"
                         @click.stop="modifyBarEvent(index,'show')" :ref="'tpl_scroller_'+index">
                        <component v-bind:is="item.name" :propData="item"></component>
                        <modify-bar :propData="item" v-if="item.modifyShow" :index="index"
                                    @starClick="modifyBarEvent"></modify-bar>
                    </div>
                </scroller>
            </div>
        </div>
        <edit-module-bar :propData="editFotterList" @starClick="fotterItemEvent"></edit-module-bar>
    </div>
</template>

<script>
    import editModuleBar from './modules/edit-module-bar.vue'
    import toast from '../../../plugins/toast/index.vue'
    import modifyBar from '../../../components/modifyBar/index.vue'
    import {sortableMixin} from '../../../mixins/eid_sortableMixin'
    export default {
        components: {editModuleBar, toast, modifyBar},
        mixins: [sortableMixin],
        name: 'trialoredit',
        data () {
            return {
                tplScroller: {
                    left: 0,
                    top: 0
                },
                moveModifyIndex: '',
                editFotterList: [],
                toastData: {
                    show: true,
                    content: '点击查看快照预览',
                    type: 'snapshot'
                },
                moduleList: []
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
            this.editFotterList = this.editFotterList.concat([
                {name: 'previous', text: '上一步'},
                {name: 'next', text: '下一步'},
                {name: 'addModularFotter', text: '底部添加模块'},
                {name: 'global', text: '全局设置'}
            ]);

            this.editFotterList = this.editFotterList.filter(function (item, idx) {
                item.hover = (idx === 0) ? !item.hover : false;
                return item;
            });

            this.moduleList = [
                {
                    name: 'module_banner_w375h90_v100',
                    title: 'banner',
                    style: '',
                    pd: '',
                    current: false,
                    hover: '',
                    spec: '375*90'
                },
                {
                    name: 'module_banner_w375h90_v100',
                    title: 'banner',
                    style: '',
                    pd: true,
                    current: false,
                    hover: '',
                    spec: '375*90'
                },
                {
                    name: 'module_banner_w375h120_v100',
                    title: 'banner',
                    style: '',
                    pd: '',
                    current: false,
                    hover: '',
                    spec: '375*120'
                },
                {name: 'module_banner_w375h120_v100', title: 'banner', style: '', pd: true, spec: '375*120'},
                {
                    name: 'module_banner_w375h150_v100',
                    title: 'banner',
                    style: '',
                    pd: '',
                    current: true,
                    hover: '',
                    spec: '375*150'
                },
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
                {name: 'module_banner_w375h150_v100', title: 'banner', style: '', pd: true, spec: '375*150'},
            ]
        },
        computed: {},
        methods: {
            toastCLick(){
                console.log(123)
            },
            fotterItemEvent(data){
                if (data === 'addModular' || data === 'addModularFotter') {
                    this.$router.push('editModule_aaddModule')
                } else if (data === 'global') {
                    this.confirmSave()
                }
            },
            confirmSave(){
                let _this = this;
                this.$store.commit('confirm', {

                    data: {
                        title: '是否保存修改？',
                        boxType: 'confirm-black',
                        list: [{id: 1, text: '不保存'}, {id: 2, text: '保存为快照草稿'}]
                    },
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            console.log(data.id)

                        } else if (data.id === 2) {
                            console.log(data.id)
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
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
            modifyBarEvent(index, type){
                if (type && this.moduleList.length > 0) {
                    /* {name: 'editContent', title: '编辑内容'},
                     {name: 'editStyle', title: '编辑样式'},
                     {name: 'sorting', title: '排序'},
                     {name: 'change', title: '更换模板'},
                     {name: 'delete', title: '删除'},*/
                    this[type + 'ModifyBar'] && this[type + 'ModifyBar'](index);
                }
            },
            showModifyBar(index) {
                let _this = this;
                let ifModifyShowFlag = false;

                this.moduleList = this.moduleList.filter(function (item, idx) {
                    item.modifyShow = (idx === index) ? !item.modifyShow : false;
                    if (idx === index && item.modifyShow) {
                        ifModifyShowFlag = true;
                    }
                    return item;
                });
                this.$set(this.editFotterList, 2, ifModifyShowFlag ? {
                    name: 'addModular',
                    text: '下方添加模块'
                } : {name: 'addModularFotter', text: '底部添加模块'});
            },

            moveUpModifyBar(index){



                index = this.moveModifyIndex;
                let _this=this;

                this.moveUpSortable(this.moduleList,index,function () {
                    _this.moveModifyIndex--;
                    _this.tplGoScroller('up');
                });

            },
            moveDownModifyBar(index){
                index = this.moveModifyIndex;
                let _this=this;

                this.moveDownSortable(this.moduleList,index,function () {
                    _this.moveModifyIndex++;
                    _this.tplGoScroller('down');
                });

/*

                if (index === this.moduleList.length - 1) {
                    alert("已经是最后一项啦！");
                    return false;
                }
                this.moduleList.splice(index + 2, 0, (this.moduleList[index]));
                this.moduleList.splice(index, 1);
                this.moveModifyIndex++;
                this.tplGoScroller('down');*/
            },
            tplGoScroller(type){
                let $index = this.moveModifyIndex;
                let tpl_scroller_EL = this.$refs.tpl_scroller;
                let tpl_scroller_box_EL = this.$refs['tpl_scroller_box'];
                let tpl_scroller_item_EL = this.$refs['tpl_scroller_' + $index];
                let {left, top} = tpl_scroller_EL.getPosition();
                let move_h = tpl_scroller_item_EL[0].offsetHeight;
                let moveTop_h = tpl_scroller_item_EL[0].offsetTop;
                let moveTop_t = tpl_scroller_box_EL.offsetHeight;
//                let moveTop_h2 = ((top - move_h) > 0 ? 0 : (top - move_h));
                console.log('move_h:');
                console.log(top, move_h, moveTop_h, moveTop_t);
                console.log(top - move_h);
                let moveto = type === 'down' ? top + move_h : top - move_h;
                tpl_scroller_EL.scrollTo(0, moveto, true);
            },

            sortingModifyBar(index) {
                let _this = this;
                this.moveModifyIndex = index;
                this.$store.commit('confirm', {
                    data: {
                        title: '',
                        maskStylebg: 'background:none',
                        boxType: 'confirm-flex',
                        list: [{id: 1, text: '上移'},
                            {id: 2, text: '下移'}],
                        cancel: '完成'
                    },
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            console.log('上移');
                            _this.moveUpModifyBar()
//                            _this.moduleList.splice(index, 1);
//                            _this.$store.commit('toast', {content: '已成功还原钉钉工作默认布局'});
//                            _this.$router.go(-1);
                        } else if (data.id === 2) {
                            _this.moveDownModifyBar()
                        }
                        console.log(111)
//                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });
            },

            deleteModifyBar(index){
                let _this = this;
                let data = this.moduleList[index];

                this.$store.commit('confirm', {
                    data: {
                        title: '确定删除“' + data.title + '”模块吗？',
                        list: [{id: 1, text: '确定删除'}]
                    },
                    onConfirm(data, cancel){
                        if (data.id === 1) {
                            _this.moduleList.splice(index, 1);
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });
            },
            scrollerRefresh(data){
                console.log(data)

            }
        }
    }
</script>

