<style scoped>
    .swipeout-item-box {
        width: 100%;
        height: 100%;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        -ms-flex-align: center;
        align-items: center;
    }

    .swipeout-item-content-l {
        width: 1.6rem;
        height: 2rem;
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
    }
    .swipeout-item-content-l img{
        width: 100%;
    }

    .swipeout-item-content-c {
        flex: 1;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        overflow: hidden;
    }

    .swipeout-item-content-star {

    }
    .swipeout-item-content-r {
        width: .16rem;
        height: .26rem;
    }

    img[lazy=error]{
        vertical-align: middle;
        height: 100%;
        background-size: 100% auto;

    }

</style>

<template>
    <div class="swipeout-item-box">
        <div class="swipeout-item-content-l">
            <img v-lazy="propData.imgSrc" alt="" >
        </div>
        <div class="swipeout-item-content-c">
            <div class="x-title-box">
                <h3 class="title">{{propData.templateTitle}}</h3>
                <p class="title-tips">{{propData.creationTime}}</p>
            </div>
        </div>
        <!-- <div class="swipeout-item-content-star" >
             <div class="x-icon-star" v-if="propData.star=='1'">
                 <icon-star></icon-star>
             </div>
         </div>-->
        <div class="swipeout-item-content-r">
            <div class="x-r-icon x-icon-back"></div>
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
        props: ['propData'],
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick () {
                if (this.$parent.$options._componentTag === 'swipeout-item') {
                    this.$parent.onItemClick(this.type || 'default', this.text)
                }
            }
        },
    }
</script>

