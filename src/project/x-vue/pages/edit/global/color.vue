<style scoped>
    .wrapper {
        display: flex;
    }

    .global-color-wrapper {
        flex: 1;
        width: 100%;
        height: 100%;
        padding-bottom: .98rem;
        box-sizing: border-box;
    }

    .global-color-title-wrapper {
        height: 1.6rem;
        padding: 0 .3rem .2rem;
        box-sizing: border-box;
        color: #6d6d72;
        font-size: .26rem;
        display: flex;
        flex-direction: column-reverse;
    }

    .global-color-title-wrapper:first-child {
        height: 1.1rem;
    }

    .global-color-box {
        padding-right: .3rem;
        box-sizing: border-box;
    }

    .swipeout-item-content-box {
        margin-bottom: .2rem;
        overflow: hidden;
        padding-left: .3rem;
        box-sizing: border-box;
    }

    .swipeout-item-content {
        height: 1rem;
        display: flex;
        box-sizing: border-box;
        padding-left: .3rem;
        padding-right: .2rem;
        justify-content: space-between;
        align-items: center;
    }

    .swipeout-item-content.current {
        border: 3px #0076FE solid;
    }

    .custom-color-box {
        justify-content: center;
        align-items: center;
        border: 2px #979797 solid;
    }

    .custom-color-box {
        color: #030303;
        font-size: .34rem;
    }

    .swipeout-item-content-left {
        font-size: .34rem;
        color: #fff;
        text-shadow: #505050 0 0 3rem;
    }

    .custom-color-box .swipeout-item-content-left {
        color: #030303;
    }

    .swipeout-item-content-c {
        width: 100%;
        height: 100%;
        line-height: .96rem;
        text-align: center;
        position: relative;
    }

    .swipeout-item-content-icon {
        position: absolute;
        left: 0;
        right: 0;
        width: .2rem;
        height: 100%;
        background: url("../../../images/common/icon_common_addNew_gray16px.png") center no-repeat;
        background-size: 100%;
    }

    .swipeout-item-content-right {
        font-size: .2rem;
        color: #fff;
        text-shadow: #505050 0 0 3px;
    }

    .swipeout-item-button-box .swipeout-item-button {
        color: #fff;
        font-size: .26rem;
    }
</style>

<template>
    <div class="wrapper">
        <div class="global-color-wrapper">
            <scroller>
                <div class="global-color-title-wrapper">
                    <div class="global-color-title">自定义颜色</div>
                </div>
                <div class="global-color-box">
                    <div class="swipeout-item-content-box " @click="addClick">
                        <div class="swipeout-item-content custom-color-box">
                            <div class="swipeout-item-content-c">
                                <div class="swipeout-item-content-icon"></div>
                                添加自定义颜色
                            </div>
                        </div>
                    </div>
                    <swipeout>
                        <swipeout-item transition-mode="follow" class="swipeout-item-content-box"
                                       v-for="item,index in colorList" :key="index" :withData="item"
                                       :propData="index"

                                       @starClick="colorListClick">
                            <div slot="content" class="swipeout-item-content"
                                 :class="{current:item.current}"
                                 :style="{'backgroundColor':item.backgroundColor}">
                                <div class="swipeout-item-content-left">{{item.backgroundColor || '无色'}}</div>
                                <div class="swipeout-item-content-right" v-if="item.backgroundColor">100%</div>
                            </div>
                            <div slot="right-menu" class="swipeout-item-button-box">
                                <swipeout-button class="swipeout-item-button" :width="width" text="删除"
                                                 type="delete"></swipeout-button>
                            </div>
                        </swipeout-item>
                    </swipeout>
                </div>
                <div class="global-color-title-wrapper">
                    <div class="global-color-title">颜色库</div>
                </div>
                <div class="global-color-box">
                    <div class="swipeout-item-content-box"
                         v-for="item,index in customList" :key="index"
                         :propData="index"
                         @click="customListClick( {data: index})">
                        <div class="swipeout-item-content"
                             :style="{'backgroundColor':item.backgroundColor}"
                             :class="{'custom-color-box':!item.backgroundColor,current:item.current}">
                            <div class="swipeout-item-content-left">{{item.backgroundColor || '无色'}}</div>
                            <div class="swipeout-item-content-right" v-if="item.backgroundColor">100%</div>
                        </div>
                    </div>
                </div>
            </scroller>
        </div>
    </div>
</template>

<script>
    import toast from '../../../plugins/toast/index.vue'
    import {Swipeout, SwipeoutItem, SwipeoutButton} from '../../../plugins/swipeout/';

    import {getBodyFontSize, setTitle} from '../../../util/index.js'

    import {go} from '../../../util/router.js'
    export default {
        components: {toast, Swipeout, SwipeoutItem, SwipeoutButton},
        name: 'trialoredit',
        data () {
            return {
                customList: [],
                colorList: [],
                width: 0
            }
        },
        mounted () {
            this.init();
        },
        computed: {},
        methods: {
            init(){
                setTitle('选择颜色');
                this.reder();
            },
            reder(){
                this.width = getBodyFontSize() * 1.48;
                this.customList = [
                    {id: '', backgroundColor: ''},
                    {id: '', backgroundColor: '#ccc', current: true},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'}
                ];
                this.colorList = [
                    {id: '', backgroundColor: '#ccc', current: true},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'},
                    {id: '', backgroundColor: '#ccc'}];
            },
            colorListClick(data){
                if (data.type === 'more') {
                    data.list = 'colorList';
                    this.colorMore(data);
                }
                if (data.type === 'delete') {
                    console.log('colorListClick', data)
                }
            },
            colorMore(data){
                let colorData = data.list === 'customList' ? this.customList[data.data] : this.colorList[data.data];
                this.colorList = this.colorList.filter(function (item, idx) {
                    item.current = (idx === data.data && data.list === 'colorList');
                    return item;
                });
                this.customList = this.customList.filter(function (item, idx) {
                    item.current = (idx === data.data && data.list === 'customList');
                    return item;
                });
                console.log(colorData)
            },
            customListClick(data){
                data.type = 'more';
                data.list = 'customList';
                this.colorMore(data);
            },
            addClick(el){
                go('INPUT', this.$router);
                console.log('addColor')
            }
        }
    }
</script>

