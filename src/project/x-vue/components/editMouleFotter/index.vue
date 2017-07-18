<style scoped>
    .edit-module-fotter-wrapper {
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        font-size: .34rem;
    }

    .edit-module-fotter-l {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        color: #4a4a4a;
    }

    .edit-module-fotter-r {
        width: 4.5rem;
        height: 1rem;
        background: #0076ff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }
</style>

<template>
    <div class="edit-module-fotter-wrapper">
        <div class="edit-module-fotter-l" @click.stop="starClick('1')">演示效果</div>
        <div class="edit-module-fotter-r" @click.stop="starClick('confirm')">确定使用</div>
    </div>
</template>

<script>
    export default {
        name: 'editMouleFotter',
        data: function () {
            return {

            }
        },
        props: {
            propData: {default: ''},
            index: {default: ''},
        },
        computed: {},
        mounted: function () {
        },
        methods: {
            starClick(index, type){
                this.$emit('starClick', index, type)
            }
        },
        components: {}
    }
</script>


