<style lang="less" scoped>
    @import './index.less';

    .modify-item-wrapper {
        position: relative;

    }
</style>

<template>
    <div class="wrapper">
        <p class="title">Hello</p>
        <p class="subtitle" v-on:click="getClick">{{ link }}</p>
        <p class="subtitle" v-on:click="getClick2">{{ login }}</p>

        <!--<modify :propData="banner" ></modify>-->
        <div v-for="item,index in banner" :key="item" class="modify-item-wrapper"
             @click.stop="modifyBarEvent(index,'show')">
            <component v-bind:is="item.type" :propData="item" @click.stop="starClick(item)"></component>
            <modify-bar :propData="item" v-if="item.modifyShow" :index="index"
                        @modifyBarEvent="modifyBarEvent"></modify-bar>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import {getCasCheck} from '../../../api/index.js'
    import modifyBar from '../../../components/modifyBar/index.vue'

    export default {
        name: 'home',
        components: {
            modifyBar
        },
        data () {
            return {
                link: 'DingTalk',
                login: 'login',
                register: 'register',
                dome: 'dome',
                banner: [
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    },
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    },
                    {
                        type: 'modulesBanner',
                        id: 1,
                        name: 111
                    },
                    {
                        id: 2,
                        type: 'modulesApplication',
                        name: 222
                    }
                ]
            }
        },

        mounted () {
            axios.get('http://ouat.fosun.com/new_portal/api/cas/check?email=ceshi@.ddd.com').then((res) => {
//                console.log(res);
//                console.log(111)
            }).catch(function (err) {
//                console.log(err);
            });
            getCasCheck({email: 'ceshi@.ddd2.com'}).then(res => {
//                console.log(res)
            });
        },
        methods: {
            modifyBarEvent(index, type){
                if (type && this.banner.length > 0) {
                    this[type + 'ModifyBar'] && this[type + 'ModifyBar'](index);
                }
            },
            showModifyBar(index) {
                this.banner = this.banner.filter(function (item, idx) {
                    item.modifyShow = (idx === index) ? !item.modifyShow : false;
                    return item;
                });
                /*let obj = this.banner[index];
                 obj.modifyShow = !obj.modifyShow;
                 this.$set(this.banner, index, obj);*/
            },
            moveUpModifyBar(index){
                if (index === 0) {
                    alert("到顶啦！");
                    return false
                }
                this.banner.splice(index - 1, 0, (this.banner[index]));
                this.banner.splice(index + 1, 1);

            },
            moveDownModifyBar(index){
                if (index === this.banner.length - 1) {
                    alert("已经是最后一项啦！");
                    return false;
                }
                this.banner.splice(index + 2, 0, (this.banner[index]));
                this.banner.splice(index, 1);
            },
            deleteListModifyBar(index){
                this.banner.splice(index, 1);
            },
            getClick () {
                this.$router.push('dingtalk');
            },
            getClick2 () {
                this.$router.push('login');
            },
            getClick3 () {
                this.$router.push('register');
            },
            starClick(data){
                console.log(data, 1);
            }
        }
    }
</script>
