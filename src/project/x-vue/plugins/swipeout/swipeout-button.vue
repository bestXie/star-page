<style scoped>
    .x-swipeout-button {
        height: 100%;
        text-align: center;
        font-size: 14px;
        border: none;
    }


</style>
<template>
    <button class="x-swipeout-button"
            :class="{'x-primary': type === 'primary', 'x-delete': type === 'delete', 'x-default': type === 'default'||type === 'moveDown'||type === 'moveUp'}"
            :style="{width: `${width}px`, backgroundColor: backgroundColor}" @click="onButtonClick" type="button">
        <slot>{{text}}</slot>
    </button>
</template>
<style scoped>
    .x-swipeout-button {
        background: #c7c7cd;
    }

    .x-default {
        background: #c7c7cd;
        box-shadow: 1px 0 1px 1px #fff;
    }

    .x-delete {
        background: #fe3824;
    }

    .x-primary {
        background: #f6a623;
    }

</style>
<script>
    export default {
        props: {
            text: String,
            backgroundColor: String,
            type: String,
            width: {
                type: Number,
                default: 148
            }
        },
        mounted: function () {
        },
        methods: {
            starClick () {
                if (this.$parent.$options._componentTag === 'swipeout-item') {
                    this.$parent.onItemClick('hhhhhhhhh', this.text)
                }
            },
            onButtonClick () {
                if (this.$parent.$options._componentTag === 'swipeout-item') {
                    this.$parent.onItemClick(this.type || 'default', this.text)
                }
            }
        }
    }
</script>