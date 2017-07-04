<style scoped>
    .modules-banner-wrapper {
        width: 750px;
        height: 200px;
        background-color: #666;
    }
</style>

<template>
    <div class="modules-banner-wrapper" @click="starClick">
        <text>app</text>
    </div>
</template>

<script>
    export default {
        name: 'componentsApplication',
        data: function () {
            return {
                appData: {},
                link: ', author: icepy'
            }
        },
        props:{
            propData: {default: []},
        },
        computed: {},
        mounted: function () {

        },
        methods: {
            starClick(){
                this.$emit('starClick')
            }
        },
        components: {
        }
    }
</script>

