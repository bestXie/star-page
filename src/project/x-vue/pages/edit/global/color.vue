<style scoped>
    .wrapper {
        display: flex;
    }

    .global-color-wrapper {
        flex: 1;
        width: 100%;
        height: 100%;
        padding-bottom: .98rem;
        box-sizing: border-box;
    }

    .global-color-title-wrapper {
        height: 1.6rem;
        padding: 0 .3rem .2rem;
        box-sizing: border-box;
        color: #6d6d72;
        font-size: .26rem;
        display: flex;
        flex-direction: column-reverse;
    }

    .global-color-title-wrapper:first-child {
        height: 1.1rem;
    }

    .global-color-box {
        padding-right: .3rem;
        box-sizing: border-box;
    }

    .swipeout-item-content-box {
        margin-bottom: .2rem;
        overflow: hidden;
        padding-left: .3rem;
        box-sizing: border-box;
    }

    .swipeout-item-content {
        height: 1rem;
        display: flex;
        box-sizing: border-box;
        padding-left: .3rem;
        padding-right: .2rem;
        justify-content: space-between;
        align-items: center;
    }

    .custom-color-box {
        justify-content: center;
        align-items: center;
        border: 2px #979797 solid;
    }

    .custom-color-box {
        color: #030303;
        font-size: .34rem;
    }

    .swipeout-item-content-left {
        font-size: .34rem;
        color: #fff;
        text-shadow: #505050 0 0 3rem;
    }

    .swipeout-item-content-c {
        width: 100%;
        height: 100%;
        line-height: .96rem;
        text-align: center;
        position: relative;
    }

    .swipeout-item-content-icon {
        position: absolute;
        left: 0;
        right: 0;
        width: .2rem;
        height: 100%;
        background: url("../../../images/common/icon_common_addNew_gray16px.png") center no-repeat;
        background-size: 100%;
    }

    .swipeout-item-content-right {
        font-size: .2rem;
        color: #fff;
        text-shadow: #505050 0 0 3px;
    }

    .swipeout-item-button-box .swipeout-item-button {
        color: #fff;
        font-size: .26rem;
    }
</style>

<template>
    <div class="wrapper">
        <div class="global-color-wrapper">
            <scroller>
                <div class="global-color-title-wrapper">
                    <div class="global-color-title">自定义颜色</div>
                </div>
                <div class="global-color-box">
                    <div class="swipeout-item-content-box " @starClick="starClick">
                        <div class="swipeout-item-content custom-color-box">
                            <div class="swipeout-item-content-c">
                                <div class="swipeout-item-content-icon"></div>
                                添加自定义颜色
                            </div>
                        </div>
                    </div>
                    <swipeout>
                        <swipeout-item transition-mode="follow" class="swipeout-item-content-box"
                                       v-for="item,index in customList" :key="index"
                                       :propData="index"
                                       @starClick="starClick">
                            <div slot="content" class="swipeout-item-content"
                                 :style="{'backgroundColor':item.backgroundColor}">
                                <div class="swipeout-item-content-left">{{item.backgroundColor}}</div>
                                <div class="swipeout-item-content-right">100%</div>
                            </div>
                            <div slot="right-menu" class="swipeout-item-button-box">
                                <swipeout-button class="swipeout-item-button" text="删除" type="delete"></swipeout-button>
                            </div>
                        </swipeout-item>
                    </swipeout>
                </div>
                <div class="global-color-title-wrapper">
                    <div class="global-color-title">颜色库</div>
                </div>
                <div class="global-color-box">
                    <div class="swipeout-item-content-box " @starClick="starClick">
                        <div class="swipeout-item-content custom-color-box">
                            <div class="swipeout-item-content-c">无色</div>
                        </div>
                    </div>
                    <div class="swipeout-item-content-box"
                         v-for="item,index in customList" :key="index"
                         :propData="index"
                         @starClick="starClick">
                        <div class="swipeout-item-content"
                             :style="{'backgroundColor':item.backgroundColor}">
                            <div class="swipeout-item-content-left">{{item.backgroundColor}}</div>
                            <div class="swipeout-item-content-right">100%</div>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
    </div>
</template>

<script>
    import toast from '../../../plugins/toast/index.vue'
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../plugins/swipeout/';
    export default {
        components: {toast, Swipeout, SwipeoutItem, SwipeoutButton},
        name: 'trialoredit',
        data () {
            return {
                customList: [
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'}
                ]
            }
        },
        mounted () {
            this.setPageTitle('我的模板');
        },
        computed: {},
        methods: {
            starClick(data){
                console.log(data)
            },
            toastCLick(){
                console.log(123)
            },
            fotterItemEvent(data){
                if (data === 'addModular' || data === 'addModularFotter') {
                    this.$router.push('edittpl_addmodular')
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
                if (this.moveModifyIndex === 0) {
                    alert("到顶啦！");
                    return false
                }
                this.moduleList.splice(index - 1, 0, (this.moduleList[index]));
                this.moduleList.splice(index + 1, 1);
                this.moveModifyIndex--;
                this.tplGoScroller('up');

            },
            moveDownModifyBar(index){
                index = this.moveModifyIndex;
                if (index === this.moduleList.length - 1) {
                    alert("已经是最后一项啦！");
                    return false;
                }
                this.moduleList.splice(index + 2, 0, (this.moduleList[index]));
                this.moduleList.splice(index, 1);
                this.moveModifyIndex++;
                this.tplGoScroller('down');


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
                console.log('move_h:')
                console.log(top, move_h, moveTop_h, moveTop_t)
                console.log(top - move_h)
                let moveto = type == 'down' ? top + move_h : top - move_h;
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

