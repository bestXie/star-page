<template>
    <div class="x-button-group" :class="{'padding-3': !nopadding}">
        <hover-style class="x-button-item"
                     :class="{'radius-8':!noradius,'x-disabled': type === 'disabled', 'x-delete': type === 'delete', 'x-default': type === 'default', 'x-forward': type === 'forward', 'x-submit': type === 'submit'}"
                     :style=" {'border':border}" @starClick="starClick">
            <p class="x-button-text">
                <slot></slot>
            </p>
        </hover-style>
    </div>
</template>

<script>
    export default {
        components: {},
        name: 'x-button-tab',
        props: {
            propData: {default: {}},
            type: String,
            border: String,
            nopadding: Boolean,
            noradius:Boolean
        },
        methods: {
            starClick(){
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

        box-sizing: border-box;
    }

    .padding-3 {
        padding: 0 .3rem;
    }
    .radius-8{
        border-radius: .08rem;

    }

    .x-button-item {
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .x-button-item.x-disabled {
        background: #dfdfdf;
    }

    .x-button-item.x-disabled .x-button-text {
        color: #fff;
    }

    .x-button-item.x-submit {
        background: #0076ff;
    }

    .x-button-item.x-submit .x-button-text {
        color: #fff;
    }

    .x-button-item.x-forward{
        background: #F8E71D;
    }
    .x-button-item.x-forward .x-button-text {
        color: #4a4a4a;
    }

    .x-button-text {
        font-size: .34rem;
        color: #0076ff;
        text-align: center;
    }

</style>
