<style scoped>


    .edit-module-fotter-wrapper {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: 20px;
        border-top: 1px #ccc solid;
    }

    .edit-module-fotter-item-box {
        /*width: 180px;*/
        height: 98px;
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
    }

    .edit-module-fotter-item {
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        flex-direction: column;
    }

    .edit-module-fotter-item-icon {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        background: #ccc;
        margin-bottom: 5px;

    }
    .edit-module-fotter-item-box.hover  .edit-module-fotter-item-icon{
        background: #26a6ff;
    }
    .edit-module-fotter-item-box.hover .edit-module-fotter-item p{
        color: #26a6ff;
    }
</style>

<template>
    <div class="edit-module-fotter-wrapper" >
        <div class="edit-module-fotter-item-box" v-for="item,index in propData" :key="item"
             @click="starClick(item.name)" :class="{'hover':item.hover}">
            <div class="edit-module-fotter-item">
                <div class="edit-module-fotter-item-icon"></div>
                <p>{{item.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'history-item',
        data: function () {
            return {}
        },
        props: {
            propData: {
                default: []
            }
        },
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

