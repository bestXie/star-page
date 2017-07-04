<style scoped>
    .starList-item {
        width: 100%;
        height: 2.4rem;
        padding: 20px 30px;
        border-bottom: 1px #c8c8c8 solid;
        overflow: hidden;
        display: -webkit-flex; /* Safari */
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
        width: 200px;
        height: 100%;
        border-radius: 10px;
    }

    .mystar_eitTemplet_myTemplet {
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

    .mystar_my_market {
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
        width: calc(100% - 250px);
        align-items: center;
        display: flex;

        box-sizing: border-box;
    }

    .starList-r {
        width: 16px;
        height: 26px;
    }

    .starList-r-icon {
        width: 16px;
        height: 26px;
    }

    .starList-title {
        box-sizing: border-box;
        padding-left: 20px;
        max-width: 100%;
        padding-right: 40px;
    }

    .starList-title .title {
        font-size: 34px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 30px;
        color: #4a4a4a;
    }

    .starList-title .title-tips {
        font-size: 24px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #9b9b9b;
    }
</style>

<template>
    <div class="starList-item" @click="starClick(propData.name)">
        <div class="starList star-flex">
            <div class="starList-l " :class="'mystar_'+propData.name"></div>
            <div class="starList-c">
                <div class="starList-title">
                    <h3 class="title">{{propData.title}}</h3>
                    <p class="title-tips">{{propData.titleTips}}</p>
                </div>
            </div>
            <div class="starList-r">
                <div class="starList-r-icon icon-back"></div>
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

