<style scoped>
    .swipeout-item-box {
        width: 100%;
        padding-right: 0;
        height: 100%;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
    }

    .swipeout-item-box-r {
        padding-right: .3rem;
        width: 100%;
        height: 100%;
        flex: 1;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
    }

    .swipeout-item-content-l {
        width: .8rem;
        height: .8rem;
        background: #FE4275;
        border-radius: 10px;
    }

    .swipeout-item-content-c {
        flex: 1;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
    }

    .swipeout-item-content-r {
        width: .26rem;
        height: .26rem;
    }
    .x-r-icon{
        width: 100%;
        height: 100%;
    }
    .x-title-box .title{
        font-size: .28rem;
        color: #9b9b9b;
    }
</style>

<template>
    <div class="swipeout-item-box">
        <div class="swipeout-item-box-r x-border-1px-bottom">
            <div class="swipeout-item-content-l" ></div>
            <div class="swipeout-item-content-c">
                <div class="x-title-box">
                    <h3 class="title">{{propData.title}}</h3>
                </div>
            </div>
            <div class="swipeout-item-content-r" v-if="maxyesleng">
                <div class="x-r-icon x-icon-yes"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {IconStar}from '../../../../plugins/icon-star/';
    export default {
        components: {
            IconStar
        },
        name: 'history-item',
        data: function () {
            return {}
        },
        props: ['propData','maxyesleng'],
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick () {
                if (this.$parent.$options._componentTag === 'swipeout-item') {
                    this.$parent.onItemClick('add')
                }
            }
        },
    }
</script>

