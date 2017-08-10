<template>
    <transition name="loading">
        <vMask :show="loading.show" @starClick="maskClick" :stylebg="'rgba(0, 0, 0, 0.4)'" >
            <v-loader class="loading-loader" :loading="loading"></v-loader>
        </vMask>
    </transition>
</template>
<script>
    import vMask from '../mask/index.vue';
    import {VLoader} from '../loader/index.js';
    export default {
        components: {
            vMask,
            VLoader
        },
        name: 'v-loading',
        props:['loading'],
        methods: {
            maskClick(data){
                console.log(data)
            }
        },
    };
</script>

<style scoped>
    .loading-loader{
        position: absolute;
        top: calc(50%);
        left: calc(50%);
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
    }
    .loading-enter-active {
        transition: all .3s ease;
    }
    .loadinge-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .loading-enter, .loading-leave-to {
        opacity: 0;
    }
</style>
