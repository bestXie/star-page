<template>
    <div class="vux-swipeout">
        <slot></slot>
    </div>
</template>

<style lang="less">

    .vux-swipeout {
        width: 100%;
        overflow: hidden;
    }

    .vux-swipeout-item {
        position: relative;
    }

    .vux-swipeout-button-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 0;
        text-align: right;
    }

    .vux-swipeout-button-box-left {
        text-align: left;
    }

    .vux-swipeout-button-box > div {
        height: 100%;
    }

    .vux-swipeout-button {
        height: 100%;
        text-align: center;
        font-size: 14px;
        color: #ccc;
        border: none;
    }

    .vux-swipeout-content {
        position: relative;
        /*background: #ccc;*/
    }

    .vux-swipeout-content.vux-swipeout-content-animated {
        transition: transform 0.2s;
    }

    .vux-swipeout-button-primary {
        /*background-color:#ccc;*/
    }

    .vux-swipeout-button-warn {
        /*background-color:#ccc;*/
    }

    .vux-swipeout-button-default {
        /*background-color: #ccc;*/
    }
</style>