<style scoped>
    .banner-item-box {
        width: 100%;
        box-sizing: border-box;
    }

    .banner-item {
        width: 100%;

    }

    .banner-img {
        width: 100%;
        height: 2.4rem;
        display: block;
    }

    .p10 {
        padding: .1rem;
    }
</style>

<template>
    <div class="banner-item-box"  @click="starClick(propData)" :class="{'p10':propData.pd}" :style="propData.style">
        <div class="banner-item">
            <!--<img class="banner-img" src="../../images/banner/image_Module_Banner_750x240px.jpg" alt="">-->
            <img class="banner-img"  v-lazy="propData.imgSrc"  alt="">

            <!--<img class="banner-img" src="http://hilongjw.github.io/vue-lazyload/dist/test12.jpg" alt="">-->
        </div>
    </div>
</template>

<script>
    import { bannerMixin } from '../../mixins/bannerMixin';
    import imgSrc from '../../images/banner/image_Module_Banner_750x240px.jpg'
    export default {
        data: function () {
            return {
                imgSrc:imgSrc
            }
        },
        mixins: [bannerMixin]
    }
</script>