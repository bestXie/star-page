<template>
    <div class="iconStar-box">
        <img src="../../images/common/icon_common_isv_noImage.png" alt="">
    </div>
</template>

<script>
    export default {
        components: {},
        name: 'Content-empty',
        props: {
        },
        methods: {
            starClick(){
                this.$emit('starClick');
            }
        }
    }
</script>


<style scoped>
    .iconStar-box{
        width: 100%;
        height: 100%;
    }
    .iconStar-box img{
        width: 100%;
        height: 100%;
    }
</style>
