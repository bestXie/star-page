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
        height: 180px;
    }

    .p10 {
        padding: 10px;
    }
</style>

<template>
    <div class="banner-item-box" :class="{'p10':propData.pd}" :style="propData.style">
        <div class="banner-item">
            <img src="../../images/banner/image_Module_Banner_750x180px.jpg" alt="">
        </div>
    </div>
</template>

<script>
    import { stationGuideMixin } from '../../mixins/modules_stationGuideMixin'
    export default {
        mixins: [stationGuideMixin]
    }
</script>
