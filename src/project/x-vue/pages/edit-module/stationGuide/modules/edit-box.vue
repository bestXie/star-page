<style scoped>

    .swipeout-item-button {
        width: 1.48rem;
        color: #fff;
        font-size: .3rem;
    }

    .swipeout-item-content {
        height: 1.3rem;
        overflow: hidden;
        background: #fff;
        box-sizing: border-box;
    }

    .swipeout-item-content.swipeout-item-edit {
        background: #fffcd3;
    }

    .contentleft {
        width: 1.04rem;
        padding: 0 .3rem;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        background: #fff;
    }

    .contentleft-c {
        width: 100%;
        height: .44rem;
        border-radius: 50%;
    }

    .subtract {
        background: url("../../../../images/common/icon_common_select_remove.png") center no-repeat;
        background-size: 100%;
    }

</style>

<template>
    <div class="edit-box">

        <div class="edit-item-wrapper">
            <swipeout>
                <swipeout-item transition-mode="follow" v-for="item,index in propData" :key="index" :propData="index" :withData="item" :defaultOpenRight="item.defaultOpenRight" @starClick="starClick">
                    <div slot="contentleft" class="contentleft" @click="contentleftClick(index,subtractType.type)">
                        <div class="contentleft-c subtract"></div>
                    </div>
                    <div slot="content" class="swipeout-item-content">
                        <edit-item :propData="item" :maxyesleng="index<subtractType.maxyesleng"></edit-item>
                    </div>
                    <div slot="right-menu">
                        <swipeout-button class="swipeout-item-button" :width="width" text="上移" type="moveUp" v-if="subtractType.type=='subtract'"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" :width="width" text="下移" type="moveDown" v-if="subtractType.type=='subtract'"></swipeout-button>
                        <swipeout-button class="swipeout-item-button" :width="width" text="置顶" type="primary" v-if="subtractType.type=='subtract'"></swipeout-button>
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
                width: 0
            }
        },
        props: {
            propData: {
                default: []
            },
            subtractType: {
                default: {
                    maxyesleng: 0
                }
            },
        },
        computed: {},
        mounted: function () {
            console.log(this.propData);
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
            contentleftClick(index, data){
                let params = {
                    data: index,
                    type: data
                };
                console.log(data);
                this.$emit('starClick', params);
            }
        }
    }
</script>