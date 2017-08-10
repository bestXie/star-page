<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        padding-top: .7rem;
        height: 100%;
        box-sizing: border-box;
    }

    .banner-style-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .banner-style-box {
        padding-top: .2rem;

    }

    .empty-color {
        background: url("../../../images/common/icon_common_noColor.png") center no-repeat;
        background-size: 100%;
    }

    .x-switch-item-select-box {
        position: relative;
    }

    .x-switch-item-select-box .x-switch-item-select {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
    }

    .x-switch-item-select-l {
        flex: 1;
        text-align: right;
        font-size: .3rem;
        color: #8f8e94;
        padding-top: .24rem;
    }

    .x-switch-item-select-l p {
        padding-right: .2rem;
    }

    .x-switch-item-select-r {
        width: .46rem;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
    }
    .bar-container-item-l{
        display: flex;
    }


    .style-fotter-wrapper {
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: .34rem;
        box-sizing: border-box;
        border-top: #d8d8d8 1px solid;
    }

    .edit-module-fotter-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff ;
        color: #0076ff;
    }
    .current{
        background: #d8d8d8;
        color: #4a4a4a;
    }

    .edit-module-fotter-r {
        width: 4.5rem;
        height: 1rem;
        background: #0076ff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

</style>

<template>
    <div class="wrapper">
        <toast :propData="toastData"></toast>
        <section class="banner-style-wrapper">
            <scroller>
                <section class="banner-style-box">
                    <div class="bar-container-wrapper">
                        <div class=" bar-container-img x-border-1px-bottom"  @click="selectColorEvent">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">模板背景色</div>
                                <div class="bar-container-img-tips ">#f2f2f2</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df"
                                     :style="{'backgroundColor':'#f2f2f2'}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>背景图片</p>
                    </div>
                    <div class="bar-container-wrapper">

                        <div class=" bar-container-img x-border-1px-bottom">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">背景图片</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df empty-color"></div>
                            </div>
                        </div>

                        <div class="x-switch-item-box x-border-1px-bottom x-switch-item-select-box">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">布局方式</div>
                            </div>
                            <div class=" x-switch-item-select" @click="selectLayoutnEvent">
                                <div class="x-switch-item-select-l"><p>一般/重复</p></div>
                                <div class="x-switch-item-select-r">
                                    <div class="x-r-icon x-icon-back"></div>
                                </div>
                            </div>
                        </div>
                        <div class="x-switch-item-box x-border-1px-bottom x-switch-item-select-box ">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">对其方式</div>
                            </div>
                            <div class=" x-switch-item-select" @click="selectAlignEvent">
                                <div class="x-switch-item-select-l"><p>居中/下/左/右/对齐</p></div>
                                <div class="x-switch-item-select-r">
                                    <div class="x-r-icon x-icon-back"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>标题设置</p>
                    </div>
                    <div class="bar-container-wrapper">
                        <div class=" bar-container-img x-border-1px-bottom"  @click="selectColorEvent">
                            <div class="bar-container-item-l">
                                <div class="bar-container-img-title">应用名称文字颜色</div>
                                <div class="bar-container-img-tips">#f2f2f2</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df"
                                     :style="{'backgroundColor':'#f2f2f2'}"></div>
                            </div>
                        </div>
                        <div class="x-switch-item-box x-border-1px-bottom" >
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">覆盖</div>
                                <div class="x-switch-label-tips">覆盖所有自定义模块标题文字颜色</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch" checked="checked">
                            </div>
                        </div>

                        <div class=" bar-container-img x-border-1px-bottom"  @click="selectColorEvent">
                            <div class="bar-container-item-l ">
                                <div class="bar-container-img-title">标题框背景色</div>
                                <div class="bar-container-img-tips">#f2f2f2</div>
                            </div>
                            <div class="bar-container-item-r">
                                <div class="bar-container-img-input x-border-1px-df"
                                     :style="{'backgroundColor':'#f2f2f2'}"></div>
                            </div>
                        </div>

                        <div class="x-switch-item-box x-border-1px-bottom" >
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">覆盖</div>
                                <div class="x-switch-label-tips">覆盖所有自定义模块标题标题框背景色</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch" checked="checked">
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-container-wrapper">
                        <div class="x-switch-item-box x-border-1px-bottom">
                            <div class="x-switch-item-l">
                                <div class="x-switch-label">模块内边距</div>
                                <div class="x-switch-label-tips">5px</div>
                            </div>
                            <div class="x-switch-item-r">
                                <input type="checkbox" class="x-switch">
                            </div>
                        </div>
                    </div>
                    <div class="h-60"></div>
                    <div class="h-60"></div>
                    <div class="h-60"></div>
                </section>
            </scroller>

        </section>
        <div class="style-fotter-wrapper">
            <div class="edit-module-fotter-item current" >内容</div>
            <div class="edit-module-fotter-item" >样式</div>
        </div>
    </div>
</template>

<script>
    import {getStore, setStore} from '../../../util/index';
    import toast from '../../../plugins/toast/index.vue'
    export default {
        name: 'page_banner_index',
        components: {toast},
        data () {
            return {
                moduleList: [],
                toastData: {
                    show: true,
                    content: '点击查看快照预览',
                    type: 'snapshot',
                },
                selectAlignId: ''
            }
        },
        mounted () {
//            this.toastCLick();
            this.toastData = {
                show: true,
                noTiming:true,
                content: '点击查看快照预览',
                type: 'snapshot',
                contentClick:this.toastCLick
            }
            /*this.toastData = {
                show: true,
                noTiming:true,
                content: '点击查看快照预览',
                type: 'error',
                contentClick:this.toastCLick,
                closeClick:function () {
                    console.log('closeClick')
                }
            }*/
        },
        computed: {},

        methods: {
            toastCLick(){
                console.log('style.toastclisk')
            },
            selectCurrent(data, id){
                data = data.filter(function (item, idx) {
                    item.current = (item.id === id) || false;
                    return item;
                });
            },
            selectColorEvent(){
                this.$router.push('editGlobal_color');
            },
            selectLayoutnEvent(){
                let _this = this;
                let list = [
                    {id: 1, text: '不重复'},
                    {id: 2, text: '重复'},
                    {id: 3, text: '填充'},
                    {id: 4, text: '适应'}
                ];
                this.selectCurrent(list, this.selectAlignId);
                this.$store.commit('confirm', {
                    data: {
                        title: '布局方式',
                        boxType: 'confirm-select',
                        list: list
                    },
                    onConfirm(data, cancel){
                        _this.selectAlignId = data.id;
                        if (data.id === 1) {
                            _this.$store.commit('toast', {content: '已成功删除了“' + name + '”'});
                        }
                        cancel();
                    },
                    onCancel(cancel) {
                        cancel();
                    }
                });
            },
            selectAlignEvent(){
                let _this = this;
                let list = [
                    {id: 1, text: '居中'},
                    {id: 2, text: '上对齐'},
                    {id: 3, text: '下对齐'},
                    {id: 4, text: '左对齐'},
                    {id: 5, text: '右对齐'},
                ];
                this.selectCurrent(list, this.selectAlignId);
                this.$store.commit('confirm', {
                    data: {
                        title: '对其方式',
                        boxType: 'confirm-select',
                        list: list
                    },
                    onConfirm(data, cancel){
                        _this.selectAlignId = data.id;
                        if (data.id === 1) {
                            _this.$store.commit('toast', {content: '已成功删除了“' + name + '”'});
                            _this.$router.go(-1)
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

