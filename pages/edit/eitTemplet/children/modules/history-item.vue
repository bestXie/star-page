<style scoped>
    .swipeout-item-box{
        width: 100%;
        height: 100%;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
    }
    .swipeout-item-content-l{
        width: 160px;
        height: 200px;
        background: #ccc;
    }
    .swipeout-item-content-c{
        flex: 1;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        width: calc(100% - 250px);
    }
    .swipeout-item-content-star{

    }
    .swipeout-item-content-r{
        width: 16px;
        height: 26px;
    }
    .x-title-box {
        box-sizing: border-box;
        padding-left: 20px;
        max-width: 100%;
        padding-right: 40px;
    }
    .x-title-box .title {
        font-size: 34px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 30px;
        color: #4a4a4a;
    }
    .x-title-box .title-tips {
        font-size: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #9b9b9b;
    }
    .x-r-icon {
        width: 16px;
        height: 26px;
    }
    .x-icon-star{
        width: 40px;
        height: 40px;
        margin-right: 32px;
        background: #ccc;
    }
</style>

<template>
    <div class="swipeout-item-box">
        <div class="swipeout-item-content-l"></div>
        <div class="swipeout-item-content-c">
            <div class="x-title-box">
                <h3 class="title">重命名</h3>
                <p class="title-tips">收藏</p>
            </div>
        </div>
        <div class="swipeout-item-content-star" >
            <div class="x-icon-star"></div>
        </div>
        <div class="swipeout-item-content-r">
            <div class="x-r-icon x-icon-back"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'history-item',
        data: function () {
            return {}
        },
        props: ['propData'],
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(data){
                this.$emit('starClick', data);
            }
        },
    }
</script>

