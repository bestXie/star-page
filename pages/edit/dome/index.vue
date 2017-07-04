<style lang="less" scoped>
    @import './index.less';

    .demo-content {
        font-size: .36rem;

    }
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello icepy</p>

        <swipeout>
            <swipeout-item @on-close="handleEvents('on-close'+i)" @on-open="handleEvents('on-open'+i)"
                           transition-mode="follow" v-for="i in 3" :key="i" propData="1">
                <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick(i+'-1')" type="primary">Yes</swipeout-button>
                    <swipeout-button @click.native="onButtonClick(i+'-2')" type="warn">Right</swipeout-button>
                    <swipeout-button @click.native="onButtonClick(i+'-3')" type="warn">Right</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">测试滑动</div>
            </swipeout-item>
        </swipeout>

    </div>
</template>

<script>
    import {getCasCheck} from '../../../api/index.js';
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../plugins/swipeout/';

    export default {
        components: {
            Swipeout,
            SwipeoutItem,
            SwipeoutButton,
        },
        name: 'dome',
        data () {
            return {
                link: 'DingTalk',
                login: 'login',
                register: 'register',
                color1: '#FFEF7D',
                colors1: ['#FF3B3B', '#FFEF7D', '#8AEEB1', '#8B8AEE', '#CC68F8', '#fff'],
                people: [
                    {name: "Abby"},
                    {name: "Brooke"},
                    {name: "Courtenay"},
                    {name: "David"}
                ],
            }
        },

        mounted () {
            getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
                console.log(res)
            });
        },
        methods: {
            onButtonClick (type) {
                console.log(type)
            },
            handleEvents (type) {

            }
        }
    }
</script>

