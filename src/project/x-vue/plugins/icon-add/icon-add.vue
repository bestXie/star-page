<template>
    <div class="x-icon-add-box" :class="{ 'x-default': type === 'default'}">
    </div>
</template>

<script>
    export default {
        components: {},
        name: 'x-button-tab',
        props: {
            type: String
        },
        methods: {
            starClick(){
                this.$emit('starClick')
            }
        }
    }
</script>

<style scoped>
    .x-icon-add-box {
        width: 100%;
        height: 100%;
        background: url("../../images/common/icon_common_addNew_gray20px.png") center no-repeat;
        background-size:.24rem auto;
    }
    .x-default{
        background: url("../../images/common/icon_common_addNew_gray16px.png");
    }
    
</style>
