<style scoped>
    .edit-bar-wrapper {
        height: 1.1rem;
        padding: .6rem .3rem 0;
        width: 100%;
        box-sizing: border-box;
        font-size: .28rem;
        color: #666;
    }

    .edit-bar-left {
        float: left;
    }

    .edit-bar-right {
        float: right;
        color: #9b9b9b;
    }

    .swipeout-item-button {
        width: 1.48rem;
        color: #fff;
        font-size: .3rem;
    }

    .swipeout-item-content {
        height:1.4rem;
        padding: .2rem .3rem;
        overflow: hidden;
        background: #fff;
        box-sizing: border-box;
    }

    .swipeout-item-content.swipeout-item-edit {
        background: #fffcd3;
    }

</style>

<template>
    <div class="edit-box">

        <div class="edit-item-wrapper">
            <swipeout>
                <swipeout-item transition-mode="follow" v-for="item,index in propData" :key="index"
                               :propData="item"
                               @starClick="starClick">
                    <div slot="content" class="swipeout-item-content x-border-1px-bottom">
                        <edit-item :propData="item"></edit-item>
                    </div>
                    <div slot="right-menu" v-if="item.type!='add'">
                        <swipeout-button class="swipeout-item-button" :width="width" text="上移"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" :width="width" text="下移"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" :width="width" text="置顶" type="primary"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" :width="width" text="删除" type="delete"></swipeout-button>
                    </div>
                </swipeout-item>
            </swipeout>
        </div>
    </div>
</template>

<script>
    import EditItem from './edit-item.vue'
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../../plugins/swipeout/';
    export default {
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
            EditItem
        },
        name: 'edit-box',
        data: function () {
            return {
                width:0
            }
        },
        props: {
            propData: {
                default: {barData: {}}
            }
        },
        computed: {},
        mounted: function () {
            this.width = document.documentElement.style.fontSize.match(/(\d+(?:\.\d+)?)/)[0] * 1.48;
            if (this.$refs.swipeoutItemButton) {

                console.log(document.documentElement.style.fontSize.match(/(\d+(?:\.\d+)?)/)[0] * 1.48);
                console.log(document.documentElement.style.fontSize)
//                console.log(this.$refs.swipeoutItemButton)
//                console.log(this.$refs.swipeoutItemButton[0])
//                console.log(this.$refs.swipeoutItemButton[0].clientWidth)
//                console.log(this.$refs.swipeoutItemButton.$el.clientWidth)
            }
        },
        methods: {
            barClick(data){
                this.$emit('starClick', {
                    data: data,
                    type: 'more'
                });
            },
            starClick(data){
                this.$emit('starClick', data);
            },
        }
    }
</script>