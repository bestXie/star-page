<template>
    <div class="contentEmpty-box">
        <img src="../../images/common/icon_common_contentEmpty.png" alt="">
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
                this.$emit('starClick')
            }
        }
    }
</script>

<style scoped>
    .contentEmpty-box {
      width: 3rem;
        height: 3rem;
        margin: 0 auto;
    }
    .contentEmpty-box img{
        width: 100%;
        height: 100%;
    }

</style>
