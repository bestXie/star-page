<template>
    <div class="modify-wrapper" @click.stop="starClick(index,'show')" >
        {{propData}}
        <div class="modify-box">
            <div class="modify-item" @click.stop="starClick(index,'show')"><p class="modify-item-text">编辑内容</p></div>
            <div class="modify-item" @click.stop="starClick(index,'moveUp')"><p class="modify-item-text">上移</p></div>
            <div class="modify-item" @click.stop="starClick(index,'moveDown')"><p class="modify-item-text">下移</p></div>
            <div class="modify-item" @click.stop="starClick(index,'show')"><p class="modify-item-text">更改模板</p></div>
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


<style scoped>
    .modify-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #ccc;
        top: 0;
        left: 0;
        opacity: .9;
    }

    .modify-box {
        width: 100%;
        height: 100px;
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;

    }

    .modify-box .modify-item {
        flex: 1;
    }

    .modify-box .modify-item {
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
        font-size: 24px;
    }
</style>