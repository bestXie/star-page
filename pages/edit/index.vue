<template>
    <div class="wrapper">
        <confirm :confirm="confirm"></confirm>
        <toast :propData="toast"></toast>
        <router-view style="flex:1;"></router-view>
    </div>
</template>
<script>
    import confirm from '../../plugins/confirm/index.vue';
    import toast from '../../plugins/toast/index.vue'

    import {mapGetters} from 'vuex';
    export default {
        name: 'edit',
        components: {
            confirm,
            toast
        },
        mounted () {
        },
        computed: {
            ...mapGetters([
                'confirm',
                'toast'
            ])
        }
    }
</script>

<style lang="less">
    .wrapper {
        width: 100%;
        height: 100%;
    }

    .edit-container {
        width: 100%;
        height: 100%;
    }
</style>
