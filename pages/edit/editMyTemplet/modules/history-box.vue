<style scoped>
    .history-bar-wrapper {
        height: 110px;
        padding: 60px 30px 0;
        width: 100%;
        box-sizing: border-box;
        font-size: 28px;
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
        width: 148px;
        color: #fff;
        font-size: 30px;
    }

    .swipeout-item-content {
        height: 240px;
        padding: 20px 30px;
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
        <div class="history-bar-wrapper x-border-1px-bottom">
            <div class="history-bar-left">历史模板（25）</div>
            <div class="history-bar-right">查看更多</div>
        </div>
        <div class="history-item-wrapper">
            <swipeout>
                <swipeout-item transition-mode="follow" v-for="item,index in 3" :key="item" :propData="index"
                               @starClick="starClick">
                    <div slot="content" class="swipeout-item-content swipeout-item-history x-border-1px-bottom">
                        <history-item :propData="item"></history-item>
                    </div>
                    <div slot="right-menu">
                        <swipeout-button class="swipeout-item-button" text="重命名"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" text="收藏"
                                         type="primary"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" text="删除" type="delete"></swipeout-button>
                    </div>
                </swipeout-item>
            </swipeout>
        </div>
    </div>
</template>

<script>
    import HistoryItem from './history-item.vue'
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../../plugins/swipeout/';
    export default {
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            HistoryItem
        },
        name: 'history-box',
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