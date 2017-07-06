<template>
    <div class="contentEmpty-box">
        <img src="../../images/common/icon_common_contentEmpty.png" alt="">
    </div>
</template>

<script>
    export default {
        components: {},
        name: 'Content-empty',
        props: {
        },
        methods: {
            starClick(){
                this.$emit('starClick')
            }
        }
    }
</script>

<style lang="less">
    .x-button-group {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        box-sizing: border-box;
    }

    .x-button-item {
        width: 100%;
        height: 100px;
        border: solid 1px #c8c8c8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .x-button-item.x-disabled{
        background: #dfdfdf;
    }

    .x-button-item.x-disabled .x-button-text{
        color: #fff;
    }
    .x-button-item.x-submit{
        background: #0076ff;
    }
    .x-button-item.x-submit .x-button-text{
        color: #fff;
    }

    .x-button-text {
        font-size: 34px;
        color: #0076ff;
        text-align: center;
    }
</style>
