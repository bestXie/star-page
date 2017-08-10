<style scoped>
    .history-bar-wrapper {
        height: 1.1rem;
        padding: .6rem .3rem 0;
        width: 100%;
        box-sizing: border-box;
        font-size: .28rem;
        color: #666;
    }

    .history-bar-left {
        float: left;
    }

    .history-bar-right {
        float: right;
        color: #9b9b9b;
    }

    .swipeout-item-button {
        width: 1.48rem;
        color: #fff;
        font-size: .3rem;
    }

    .swipeout-item-content {
        height: 2.4rem;
        padding: .2rem .3rem;
        padding-right: 0;
        overflow: hidden;
        background: #fff;
        box-sizing: border-box;
    }

    .swipeout-item-content.swipeout-item-history {
        background: #fffcd3;
    }

</style>

<template>
    <div class="history-box">
        <div class="history-bar-wrapper x-border-1px-bottom" v-if="propData.barData&&propData.barData.total">
            <div class="history-bar-left">
                {{(propData.barData.title_l + propData.barData.title + propData.barData.total_l + propData.barData.total + propData.barData.total_r)}}
            </div>
            <div class="history-bar-right" v-if="propData.barData.more" @click="barClick(propData.barData.more)">查看更多
            </div>

        </div>
        <div class="history-item-wrapper">
            <swipeout>
                <swipeout-item transition-mode="follow" v-for="item,index in propData.list" :key="index"
                               :propData="index" withData="'{}'"
                               @starClick="starClick">
                    <div slot="content" class="swipeout-item-content x-border-1px-bottom"
                         :style="{'backgroundColor':bgcolor}">
                        <history-item :propData="item"></history-item>
                    </div>
                    <div slot="right-menu" v-if="item.current!='1'">
                        <swipeout-button class="swipeout-item-button" :width="width" text="重命名"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" :width="width" text="删除"
                                         type="delete"></swipeout-button>
                    </div>
                </swipeout-item>
            </swipeout>
        </div>
    </div>
</template>

<script>
    import HistoryItem from './history-item.vue'
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../../plugins/swipeout/';
    import {getBodyFontSize} from '../../../../util/index.js'
    export default {
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            HistoryItem
        },
        name: 'history-box',
        data: function () {
            return {
                width: 0
            }
        },
        props: {
            propData: {
                default: {barData: {}}
            },
            bgcolor: {
                default: ''
            },
        },
        computed: {},
        mounted: function () {
            this.width = getBodyFontSize() * 1.48;
        },
        methods: {
            barClick(data){
                this.$emit('starClick', {
                    data: data,
                    type: 'link'
                });
            },
            starClick(data){
                this.$emit('starClick', data);
            },
        }
    }
</script>