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
        height: 1.8rem;
        display: block;
    }
    .p10 {
        padding: .1rem;
    }
</style>

<template>
    <div class="banner-item-box" @click="starClick(propData)" :class="{'p10':propData.pd}" :style="propData.style">
        <div class="banner-item">
            <!--<img src="../../images/banner/image_Module_Banner_750x180px.jpg" alt="">-->
            <img v-lazy="propData.imgSrc" alt="" >

            <!--<img class="banner-img" src="http://hilongjw.github.io/vue-lazyload/dist/test12.jpg" alt="">-->
        </div>
    </div>
</template>

<script>
    import {bannerMixin} from '../../mixins/modules_bannerMixin'
    import imgSrc from '../../images/common/transparent.png'
    export default {
        data: function () {
            return {
                imgSrc: imgSrc

            }
        },
        mixins: [bannerMixin],
    }
</script>
