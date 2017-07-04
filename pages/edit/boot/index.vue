<style lang="less" scoped>
    @import './index.less';
    .vux-1px-t {
        position: relative;
    }

    .vux-1px-t:before {
        content: " ";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        color: #c7c7c7;
    }

    .vux-1px-t:before {
        top: 0;
        border-top: 1px solid #c7c7c7;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
    }

    .vux-swipeout {
        width: 100%;
        overflow: hidden;
    }

    .vux-swipeout-item {
        position: relative;
    }

    .vux-swipeout-button-box {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        font-size: 0;
        text-align: right;
    }

    .vux-swipeout-button-box-left {
        text-align: left;
    }

    .vux-swipeout-content {
        position: relative;
        background: #FFF;
    }

    .demo-content {
        padding: 10px 10px;
    }

    .vux-swipeout-button-box > div {
        height: 100%;
    }

    .vux-swipeout-button {
        height: 100%;
        text-align: center;
        font-size: 14px;
        color: #FFF;
        border: none;
    }
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

