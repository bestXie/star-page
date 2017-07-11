<template>
    <div class="x-swipeout">
        <slot></slot>
    </div>
</template>

<style lang="less">

    .x-swipeout {
        width: 100%;
        overflow: hidden;
    }

    .x-swipeout-item {
        position: relative;
    }

    .x-swipeout-button-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 0;
        text-align: right;
    }

    .x-swipeout-button-box-left {
        text-align: left;
    }

    .x-swipeout-button-box > div {
        height: 100%;
    }

    .x-swipeout-button {
        height: 100%;
        text-align: center;
        font-size: 14px;
        color: #ccc;
        border: none;
    }

    .x-swipeout-content {
        position: relative;
        /*background: #ccc;*/
    }

    .x-swipeout-content.x-swipeout-content-animated {
        transition: transform 0.2s;
    }

    .x-swipeout-button-primary {
        /*background-color:#ccc;*/
    }

    .x-swipeout-button-warn {
        /*background-color:#ccc;*/
    }

    .x-swipeout-button-default {
        /*background-color: #ccc;*/
    }
</style>