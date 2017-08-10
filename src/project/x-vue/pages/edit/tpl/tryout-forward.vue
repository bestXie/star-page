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
    .btn-box{
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: -ms-flexbox;
        display: flex;
    }
</style>

<template>
    <div class="wrapper">
        <div class="trialoredit-wrapper">
            <div class="scroller-wrapper" ref="tpl_scroller_box">
                <scroller ref="tpl_scroller">
                    <div v-for="(item,index) in moduleList" :key="index" class="modify-item-wrapper"
                         @click.stop="modifyBarEvent(index,'show')" :ref="'tpl_scroller_'+index">
                        <component v-bind:is="item.name" :propData="item"></component>
                    </div>
                </scroller>
            </div>
        </div>
        <div class="btn-box">
            <x-button-tab propData="" type="forward" :nopadding="true" :noradius="true" @starClick="tryoutForwardEvent">
                试用编辑模版
            </x-button-tab>
        </div>
    </div>
</template>

<script>
    import toast from '../../../plugins/toast/index.vue'
    import modifyBar from '../../../components/modifyBar/index.vue'
    import {sortableMixin} from '../../../mixins/eid_sortableMixin'
    import html2canvas from '../../../plugins/html2canvas/html2canvas.js'
    import {XButtonTab} from '../../../plugins/button-tab/index.js'
    export default {
        components: { toast, modifyBar,XButtonTab},
        mixins: [sortableMixin],
        name: 'trialoredit',
        data () {
            return {
                editFotterList: [],
                moduleList: [],
            }
        },
        mounted () {
            this.editFotterList = this.editFotterList.concat([
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
                    spec: '375*90',
                    imgSrc: 'http://hilongjw.github.io/vue-lazyload/dist/test11.jpg'
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

            fotterItemEvent(data){
                let _this = this;
                if (data === 'addModular' || data === 'addModularFotter') {
                    this.$router.push('editModule_aaddModule')
                } else if (data === 'global') {
                    this.confirmSave()
                } else if (data === 'next') {
                    console.log(this.$refs.tpl_scroller.$el);

                    html2canvas(this.$refs.tpl_scroller.$el, {useCORS: true}).then(function (canvas) {
                        document.body.appendChild(canvas);
                        let dataUrl = canvas.toDataURL();
                        console.log(dataUrl);
                    });
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
            modifyBarEvent(index, type){
                if (type && this.moduleList.length > 0) {
                    console.log(index, type)
                }
            },
            tryoutForwardEvent(){
                console.log('tryoutForwardEvent');
                this.$router.push('edittpl_trialoredit');
            }
        }
    }
</script>

