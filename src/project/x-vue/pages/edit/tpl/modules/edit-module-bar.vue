<style scoped>
    .edit-module-bar-wrapper {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: .2rem;
        border-top: 1px #ccc solid;
    }

    .edit-module-bar-item-box {
        height: .98rem;
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
    }

    .edit-module-bar-item {
        flex: 1;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        flex-direction: column;
    }

    .edit-module-bar-item-icon {
        width: .5rem;
        height: .5rem;
        border-radius: .08rem;
        background: #ccc;
        margin-bottom: .05rem;

    }

    .edit-module-bar-item-box.hover .edit-module-bar-item-icon {
        background: #26a6ff;
    }

    .edit-module-bar-item-box.hover .edit-module-bar-item p {
        color: #26a6ff;
    }
</style>

<template>
    <div class="edit-module-bar-wrapper">
        <div class="edit-module-bar-item-box" v-for="item,index in propData" :key="index"
             @click="starClick(item.name)" :class="{'hover':item.hover}">
            <div class="edit-module-bar-item">
                <div class="edit-module-bar-item-icon"></div>
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

