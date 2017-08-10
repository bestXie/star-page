<style scoped>
    .hover-style-box {
        width: 100%;
        position: relative;
    }

    .hover-style-box.onhover .hover-style {
        display: block;
    }

    .hover-style {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        display: none;
    }
</style>

<template>
    <div class="hover-style-box" :class="{'onhover':onHoverFlag}" v-on:touchstart="omTouchstartEvent"
         v-on:touchend="omTuchendEvent" @click="starClick">
        <slot></slot>
        <div class="hover-style"></div>
    </div>
</template>

<script>
    export default {
        name: 'history-item',
        data: function () {
            return {
                onHoverFlag: false
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
                this.onHoverFlag = true;
            },
            omTuchendEvent(){
                this.onHoverFlag = false;
            },

        },
    }
</script>

