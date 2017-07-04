<style scoped>
    .modules-banner-wrapper {
        width: 750px;
        height: 300px;
        background-color: #ccc;
    }
</style>

<template>
    <div class="modules-banner-wrapper" @click="starClick">
        <text>banner</text>
        <slot ></slot>
    </div>
</template>

<script>
    export default {
        name: 'componentsBanner',
        data: function () {
            return {
                link: ', author: icepy'
            }
        },
        props: {
            propData:{default: []},
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(){
                this.$emit('starClick','2222')
            }
        },
        components: {}
    }
</script>

