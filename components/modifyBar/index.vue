<style scoped>
    .modify-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: .9;
        border: 3px solid #0076ff;
        box-sizing: border-box;
    }

    .modify-box {
        width: 100%;
        background: #0076ff;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;opacity: .8;
    }

    .modify-box .modify-item {
        flex: 1;
        height: 160px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        border: 1px #ccc solid;
    }

    .modify-box .modify-item:last-child {
        border: none
    }

    .modify-box .modify-item .modify-item-text {
        text-align: center;
        font-size: 26px;
        color: #fff;
    }
</style>

<template>
    <div class="modify-wrapper" @click.stop="starClick(index,'show')" >
        <div class="modify-box">
            <div class="modify-item" @click.stop="starClick(index,'show')"><p class="modify-item-text">编辑内容</p></div>
            <div class="modify-item" @click.stop="starClick(index,'modify')"><p class="modify-item-text">编辑样式</p></div>
            <div class="modify-item" @click.stop="starClick(index,'sort')"><p class="modify-item-text">排序</p></div>
            <div class="modify-item" @click.stop="starClick(index,'show')"><p class="modify-item-text">更换模板</p></div>
            <div class="modify-item" @click.stop="starClick(index,'deleteList')"><p class="modify-item-text">删除</p></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'modifyBar',
        data: function () {
            return {

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
                this.$emit('modifyBarEvent', index, type)
            }
        },
        components: {}
    }
</script>


