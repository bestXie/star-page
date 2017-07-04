<template>
    <div class="x-button-group">
        <div class="x-button-item" @click="starClick">
            <p class="x-button-text">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        name: 'x-button-tab',
        props: {
            propData: {default: {}},
        },
        methods: {
            starClick(){
                console.log(1)
                this.$emit('starClick')
            }
        }
    }
</script>

<style lang="less">
    .x-button-group {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        box-sizing: border-box;
    }

    .x-button-item {
        width: 100%;
        height: 100px;
        border: solid 1px #c8c8c8;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
    }

    .x-button-text {
        font-size: 34px;
        color: #0076ff;
        text-align: center;
    }
</style>
