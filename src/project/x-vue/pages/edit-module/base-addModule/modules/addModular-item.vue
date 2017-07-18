<style scoped>
    .addModular-item-box {
        width: 100%;
        margin-bottom: .2rem;
        background: #4e82e5;
        border-radius: .1rem;
        position: relative;
    }
    .addModular-item{
        padding: .3rem .4rem;
        display: flex;
        overflow: hidden;
        box-sizing: border-box;

    }
    .addModular-item-l {
        width: .7rem;
        height: .7rem;
        background: #ccc;
        border-radius: 6px;
    }

    .addModular-item-r {
        flex: 1;
        overflow: hidden;
        padding-left: .3rem;
    }

    .addModular-item-r p {
        color: #fff;
    }
    .icon_addModule_banner{
        background: url("../../../../images/tpl/icon_addModule_banner.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .icon_addModule_dingtalkISV{
        background: url("../../../../images/tpl/icon_addModule_dingtalkISV.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .icon_addModule_doMyself{
        background: url("../../../../images/tpl/icon_addModule_doMyself.png") 0 0 no-repeat;
        background-size: 100%;
    }
    .icon_addModule_stationGuide{
        background: url("../../../../images/tpl/icon_addModule_stationGuide.png") 0 0 no-repeat;
        background-size: 100%;
    }
</style>

<template>
    <hover-style class="addModular-item-box " @starClick="starClick(propData)">

        <div class="addModular-item x-flex-center">
            <div class="addModular-item-l "  :class="'icon_addModule_'+propData.name"> </div>
            <div class="addModular-item-r x-title-box">
                <p class="title">{{propData.title}}</p>
            </div>
        </div>
    </hover-style>
</template>

<script>
    export default {
        name: 'history-item',
        data: function () {
            return {
            }
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

