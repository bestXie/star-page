<style lang="less" scoped>
    @import './index.less';
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello icepy</p>
        <p class="subtitle" v-on:click="getClick">{{ link }}</p>
        <p class="subtitle" v-on:click="getClick2">{{ login }}</p>
        <p class="subtitle" v-on:click="getClick3">{{ register }}</p>
    </div>
</template>

<script>
    import axios from 'axios'
    import {getCasCheck} from '../../api/index.js'
    export default {
        name: 'home',
        data () {
            return {
                link: 'DingTalk',
                login: 'login',
                register: 'register'
            }
        },

        mounted () {
            axios.get('http://ouat.fosun.com/new_portal/api/cas/check?email=ceshi@.ddd.com').then((res) => {
                console.log(res);
                console.log(111)
            }).catch(function (err) {
                console.log(err);
            });
            getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
                console.log(res)
            });
        },
        methods: {
            getClick () {
                this.$router.push('dingtalk');
            },
            getClick2 () {
                this.$router.push('login');
            },
            getClick3 () {
                this.$router.push('register');
            }
        }
    }
</script>

