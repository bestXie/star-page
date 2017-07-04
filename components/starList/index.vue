<template>
    <div class="components-wrapper">
        <div v-for="item in propData" :key="item" class="starList-wrapper">
            <component v-bind:is="item.type" :propData="item" @starClick="starClick"></component>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        name: 'starList',
        data: function () {
            return {}
        },
        props: {
            propData: Array,
        },
        computed: {},
        mounted: function () {
            console.log(111);
        },
        methods: {
            starClick(data){
                this.$emit('starClick', data)
            }
        }
    }
</script>

<style scoped>
    .starList-wrapper {
        position: relative;
    }
</style>