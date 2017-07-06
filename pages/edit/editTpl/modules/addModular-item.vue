<style scoped>
    .addModular-item-box {
        width: 100%;
        margin-bottom: 20px;
        background: #4e82e5;
        border-radius: 10px;
        position: relative;
    }
    .addModular-item{
        padding: 30px 40px;
        display: flex;
        overflow: hidden;
        box-sizing: border-box;

    }
    .addModular-item-box.onhover .hover-style{
        display: block;
    }

    .hover-style{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: rgba(0,0,0,0.3);
        display: none;
    }

    .addModular-item-l {
        width: 70px;
        height: 70px;
        background: #ccc;
        border-radius: 6px;
    }

    .addModular-item-r {
        flex: 1;
        overflow: hidden;
        padding-left: 30px;
    }

    .addModular-item-r p {
        color: #fff;
    }
    .icon_addModule_banner{
        background: url("../../../../images/editTpl/icon_addModule_banner.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .icon_addModule_dingtalkISV{
        background: url("../../../../images/editTpl/icon_addModule_dingtalkISV.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .icon_addModule_doMyself{
        background: url("../../../../images/editTpl/icon_addModule_doMyself.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .icon_addModule_stationGuide{
        background: url("../../../../images/editTpl/icon_addModule_stationGuide.png") 0 0 no-repeat;
        background-size: 100%;
    }
</style>

<template>
    <div class="addModular-item-box " :class="{'onhover':onHoverFlag}" :style="{backgroundColor:propData.bgColor}"  v-on:touchstart="omTouchstartEvent" v-on:touchend="omTuchendEvent" @click="starClick(propData)">
        <div class="addModular-item x-flex-center">
            <div class="addModular-item-l "  :class="'icon_addModule_'+propData.name"> </div>
            <div class="addModular-item-r x-title-box">
                <p class="title">{{propData.title}}</p>
            </div>
        </div>
        <div class="hover-style"></div>
    </div>
</template>

<script>
    export default {
        name: 'history-item',
        data: function () {
            return {
                onHoverFlag:false
            }
        },
        props: ['propData'],
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(data){
                this.$emit('starClick', data);
            },
            omTouchstartEvent(){
                this.onHoverFlag=true;
                console.log(11111)
            },
            omTuchendEvent(){
                this.onHoverFlag=false;
                console.log(222)
            },

        },
    }
</script>

