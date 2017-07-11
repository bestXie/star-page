<style scoped>
    .banner-item-box {
        width: 100%;
        box-sizing: border-box;
    }

    .banner-item {
        width: 100%;
    }

    .banner-item img {
        width: 100%;
        height: 300px;
        display: block;
    }

    .p10 {
        padding: 10px;
    }
</style>

<template>
    <div class="banner-item-box" :class="{'p10':propData.pd}" :style="propData.style">
        <div class="banner-item">
            <img src="../../images/banner/image_Module_Banner_750x300px.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                link: ', author: icepy'
            }
        },
        props: {
            propData: {default: {}},
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(){
                this.$emit('starClick', '2222')
            }
        },
        components: {}
    }
</script>