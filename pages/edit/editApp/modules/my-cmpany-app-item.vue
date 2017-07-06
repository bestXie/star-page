<style scoped>
    .myCmpanyApp-item-l {
        width: 80px;
        height: 80px;
        background: #f2f2f2;
        border-radius: 8px;
    }

    .x-add-icon {
        font-size: 50px;
        color: #ccc;
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .myCmpanyApp-item-c {
        flex: 1;
        height: 100%;
        display: flex;
        margin-left: 20px;
        align-items: center;
        padding-right: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .myCmpanyApp-item-c-box {
        flex: 1;
        overflow: hidden;
    }

    .x-title-box {
        padding-left: 0;
    }

    .x-title-box .title {
        margin-bottom: 10px;
    }

</style>

<template>
    <div @click="starClick">
        <div class="myCmpanyApp-item-l x-border-1px">
            <div class="x-add-icon">
                <img src="" alt="" v-if="propData.imgSrc!=='defaultData'">
                <icon-add v-if="propData.imgSrc=='defaultData'"></icon-add>
            </div>
        </div>
        <div class="myCmpanyApp-item-c" :class="{'x-border-1px-bottom':propData.imgSrc!='defaultData'}">
            <div class="myCmpanyApp-item-c-box">
                <div class="x-title-box">
                    <h3 class="title">{{propData.title}}</h3>
                    <p class="title-tips">{{propData.tips}}</p>
                </div>
            </div>
            <div class="swipeout-item-content-r">
                <div class="x-r-icon x-icon-back"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {IconAdd} from '../../../../plugins/icon-add/'
    export default {
        components: {IconAdd},
        name: 'my-cmpany-app-item',
        data: function () {
            return {}
        },
        props: {
            propData: {default: {}},
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(data){
                data = this.propData;
                this.$emit('starClick', data);
            }
        },
    }
</script>

