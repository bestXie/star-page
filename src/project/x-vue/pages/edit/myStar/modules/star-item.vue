<style scoped>
    .starList-item {
        width: 100%;
        height: 2.4rem;
        padding: .2rem .3rem;
        overflow: hidden;
        display: -webkit-flex;
        display: flex;
        box-sizing: border-box;
    }

    .starList {
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
        align-items: center;
    }

    .starList-l {
        width: 2rem;
        height: 100%;
        border-radius: .1rem;
    }

    .mystar_editMyTpl_myTemplet {
        background: url("../../../../images/mystar/mystar_my_template.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .mystar_dd_market {
        background: url("../../../../images/mystar/mystar_dd_market.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        border: 1px #ccc solid;
    }

    .mystar_editApp_myCmpanyApp {
        background: url("../../../../images/mystar/mystar_my_market.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
    }

    .mystar_contact_us {
        background: url("../../../../images/mystar/mystar_contact_us.png") center no-repeat;
        -webkit-background-size: 100%;
        background-size: 100%;
        border: 1px #ccc solid;
    }

    .starList-c {
        flex: 1;
        align-items: center;
        display: flex;
        overflow: hidden;
        box-sizing: border-box;
    }

    .starList-r {
        width: .16rem;
        height: .26rem;
    }

    .x-title-box .title {
        margin-bottom: .3rem;
    }
</style>

<template>
    <div class="starList-item x-border-1px-bottom" @click="starClick(propData.name)">
        <div class="starList star-flex">
            <div class="starList-l " :class="'mystar_'+propData.name"></div>
            <div class="starList-c">
                <div class="x-title-box">
                    <h3 class="title">{{propData.title}}</h3>
                    <p class="title-tips">{{propData.titleTips}}</p>
                </div>
            </div>
            <div class="starList-r">
                <div class="x-r-icon x-icon-back"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'x-star-item',
        data: function () {
            return {}
        },
        props: ['propData'],
        methods: {
            starClick(data){
                this.$emit('starClick', data);
            }
        },
    }
</script>

