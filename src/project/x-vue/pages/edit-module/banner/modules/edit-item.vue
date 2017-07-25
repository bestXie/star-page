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
        width: 2rem;
        height: .8rem;
        background: #ccc;
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
    .swipeout-item-add{
        background:#F2F2F2 url("../../../../images/common/icon_common_addNew_gray40px.png") center no-repeat;
        background-size: .44rem;
        border: 1px #ccc solid;
    }

</style>

<template>
    <div class="swipeout-item-box x-border-1px-bottom">
        <div class="swipeout-item-content-l" :class="{'swipeout-item-add':propData.type=='add'}"></div>
        <div class="swipeout-item-content-c">
            <div class="x-title-box">
                <h3 class="title">{{propData.title}}</h3>
                <p class="title-tips" v-if="propData.type!='add'">{{propData.tips}}</p>
            </div>
        </div>
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

