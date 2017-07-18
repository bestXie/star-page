<style scoped>
    .modify-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: .9;
        border: 3px solid rgba(0, 118, 255, .8);
        box-sizing: border-box;
    }

    .modify-box {
        width: 100%;
        background: rgba(0, 118, 255, .8);
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
    }

    .modify-box .modify-item {
        flex: 1;
        height: 1.6rem;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        flex-direction: column;
    }

    .modify-box .modify-item:last-child {
        border: none
    }

    .modify-box .modify-item .modify-item-text {
        text-align: center;
        font-size: .26rem;
        color: #fff;
    }
    .modify-item-icon{
        width:.6rem;
        height:.6rem;
        margin-bottom: .2rem;
    }
    .editContent{
        background: url("../../images/tpl/icon_editTemplet_selectModule_editContent.png");
        background-size: 100%;
    }
    .editStyle{
        background: url("../../images/tpl/icon_editTemplet_selectModule_editStyle.png");
        background-size: 100%;
    }
    .sorting{
        background: url("../../images/tpl/icon_editTemplet_selectModule_sorting.png");
        background-size: 100%;
    }
    .change{
        background: url("../../images/tpl/icon_editTemplet_selectModule_change.png");
        background-size: 100%;
    }
    .delete{
        background: url("../../images/tpl/icon_editTemplet_selectModule_delete.png");
        background-size: 100%;
    }
</style>

<template>
    <div class="modify-wrapper" @click.stop="starClick(index,'show')">
        <div class="modify-box">
            <div class="modify-item" v-for="item,idex in modifyList" :key="idex" @click.stop="starClick(index,item.name)">
                <div class="modify-item-icon-box"><div class="modify-item-icon" :class="item.name"></div></div>
                <p class="modify-item-text">{{item.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modifyBar',
        data: function () {
            return {
                modifyList: [
                    {name: 'editContent', title: '编辑内容'},
                    {name: 'editStyle', title: '编辑样式'},
                    {name: 'sorting', title: '排序'},
                    {name: 'change', title: '更换模板'},
                    {name: 'delete', title: '删除'},
                ]
            }
        },
        props: {
            propData: {default: ''},
            index: {default: ''},
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(index, type){
                this.$emit('starClick', index, type)
            }
        },
        components: {}
    }
</script>


