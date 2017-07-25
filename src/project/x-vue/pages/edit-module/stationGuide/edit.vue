<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        padding-top: .7rem;
        height: 100%;
        box-sizing: border-box;
    }

    .doMyself-edit-wrapper {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        position: relative;
    }

    .doMyself-edit-box {
        padding-top: .2rem;
    }

    .append-edit-wrapper {
        width: 100%;
        background: #fff;
    }

    .append-edit-item {
        position: relative;
        display: -ms-flexbox;
        display: flex;
    }

    .contentleft {
        width: 1.04rem;
        padding-left: .3rem;
        padding-right: .3rem;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        background: #fff;
    }

    .contentleft-c {
        width: 100%;
        height: .44rem;
        border-radius: 50%;
    }

    .append {
        background: url("../../../images/common/icon_common_select_add.png") center no-repeat;
        background-size: 100%;
    }

    .append-edit-content {
        width: 100%;
        height: 1.3rem;
        -ms-flex: 1;
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
        overflow: hidden;
        background: #fff;
    }

    .append-edit-content-l {
        width: .8rem;
        height: .8rem;
        background: #FE4275;
        border-radius: 10px;
    }

    .append-edit-content-c {
        flex: 1;
        overflow: hidden;
    }

    .x-border-1px-bottom {
        position: relative;
        border-bottom: 1px #c8c8c8 solid;
    }

    .append-edit-tips {
        background: #fff;
        padding-left: .3rem;

    }

    .append-edit-tips .append-edit-content-l {
        background: #f2f2f2 url("../../../images/common/icon_common_isv_noImage.png") center no-repeat;
        background-size: 60%;
        border: 1px #ccc solid;
    }
    .addormodify .x-title-box .title{
        color: #030303;
    }
    .addormodify .append-edit-content-l {
        background: #f2f2f2 url("../../../images/common/icon_common_addNew_gray20px.png") center no-repeat;
        background-size: .24rem;
        border: 1px #ccc solid;
    }
    .x-title-box .title{
        font-size: .28rem;
        color: #9b9b9b;
    }

</style>

<template>
    <div class="wrapper">
        <toast :propData="toastData" @starClick="toastCLick"></toast>
        <section class="doMyself-edit-wrapper">
            <scroller>
                <section class="doMyself-edit-box">
                    <div class="bar-container-wrapper">
                        <div class="bar-container-item-box x-border-1px-bottom">
                            <div class="bar-container-item-l">
                                <div class="input-label">模块名称</div>
                            </div>
                            <div class="bar-container-item-r">
                                <input class="input" autocomplete="off" autocapitalize="off" autocorrect="off"
                                       spellcheck="false"
                                       type="text" placeholder="请填写（5个字以内）" maxlength="10">
                            </div>
                        </div>
                    </div>
                    <div class="h-30"></div>

                    <div class="append-edit-item append-edit-tips addormodify" >
                        <div class="append-edit-content ">
                            <div class="append-edit-content-l "></div>
                            <div class="append-edit-content-c">
                                <div class="x-title-box">
                                    <h3 class="title">添加自定义</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>已选({{moduleData.length || 0}}) 根据你选择的模块，默认展示前4个</p>
                    </div>

                    <div class="edit-item-box">
                        <edit-box :propData="moduleData" :subtractType="subtractType"
                                  @starClick="editItemCLick"></edit-box>

                        <div class="append-edit-item append-edit-tips" v-if="moduleData.length<=0">
                            <div class="append-edit-content ">
                                <div class="append-edit-content-l"></div>
                                <div class="append-edit-content-c">
                                    <div class="x-title-box">
                                        <h3 class="title">暂无应用</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="h-60"></div>
                    <div class="bar-title-wrapper x-border-1px-bottom">
                        <p>未选({{moduleDataList.length || 0}})</p>
                    </div>

                    <div class="edit-item-box">

                        <edit-box :propData="moduleDataList" :subtractType="{  type: 'append'}"
                                  @starClick="editItemCLick"></edit-box>

                        <div class="append-edit-item append-edit-tips" v-if="moduleDataList.length<=0">
                            <div class="append-edit-content x-border-1px-bottom">
                                <div class="append-edit-content-l"></div>
                                <div class="append-edit-content-c">
                                    <div class="x-title-box">
                                        <h3 class="title">暂无应用</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="h-60"></div>
                    <div class="h-60"></div>
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
                toastData: {
                    show: true,
                    content: '点击查看快照预览',
                    type: 'snapshot'
                },
                subtractType: {
                    type: 'subtract',
                    maxyesleng: 4
                },
                appendType: {
                    type: 'append'
                },
                moduleTipsType: {},
                moduleData: [],
                moduleDataList: [],
                moduleTipsData: [{
                    title: '暂无应用',
                    type: 'tips'
                }]
            }
        },
        mounted () {
            this.moduleData = [];
            this.moduleDataList = [
                {imgSrc: '', type: '', title: 'angela1', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela2', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela3', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela4', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela5', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela6', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela7', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela8', tips: '375*90px'},
                {imgSrc: '', type: '', title: 'angela9', tips: '375*90px'},
            ]
        },
        computed: {},
        methods: {
            toastCLick(){

            },
            tplItemCLick(type, data){
                if (type === 'item' && data.type) {
                    if (data.type === 'more') {
                        return false;
                    }
                    if (data.type === 'moveDown') {
                        this.moveDownSortable(this.moduleData, data.data)
                    }
                    if (data.type === 'moveUp') {
                        this.moveUpSortable(this.moduleData, data.data);
                    }

                    if (data.type === 'subtract') {
                        this.subtractModuleData(this.moduleData, this.moduleDataList, data.data);
                    }

                    if (data.type === 'append') {
                        this.appendModuleData(this.moduleData, this.moduleDataList, data.data);
                    }

                    if (data.type === 'default') {
                    }
                    if (data.type === 'primary') {
                        this.moveTopSortable(this.moduleData, data.data);
                    }
                }
                data.callback && data.callback()
            },
            subtractModuleData(moduleData, moduleDataList, index){
                let item = moduleData.splice(index, 1)[0];
                item.defaultOpenRight = false;
                moduleDataList.unshift(item);
            },
            appendModuleData(moduleData, moduleDataList, index){
                let item = moduleDataList.splice(index, 1)[0];
                item.defaultOpenRight = false;
                moduleData.push(item);
            },
            editItemCLick(data){
                this.tplItemCLick('item', data)
            },

        }
    }
</script>

