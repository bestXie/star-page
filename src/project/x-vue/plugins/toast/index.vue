<template>
    <transition :name="'x-slide-from-top'">
        <div class="x-toast" v-show="propData.show"
             :style="{zIndex:zindex||11}"
             :class="{ snapshotStyle: propData.type=='snapshot',errorStyle: propData.type=='error'}">
            <p class="x-toast-content">{{propData.content || ''}}</p>
            <div class="content-click-warrper" v-if="propData.contentClick||propData.closeClick">
                <div class="contentClick" v-if="propData.contentClick" @click="contentClick"></div>
                <div class="closeClick" v-if="propData.closeClick" @click="closeClick">
                    <div class="close"></div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        name: 'toast',
        props: {
            propData: {
                type: Object,
                default: {}
            },
            type: {
                default: ''
            },
            zindex: Number
        },
        data () {
            return {
                show: false
            }
        },
        mounted () {
        },
        created () {
            if (this.value) {
                this.show = true
            }
        },
        computed: {},
        methods: {
            contentClick(){
                console.log('tost.p.contentClick');
                if (this.propData.contentClick) {
                    this.propData.contentClick();
                }
            },
            closeClick(){
                console.log('tost.p.closeClick');
                if (this.propData.closeClick) {
                    this.propData.closeClick();
                }
            }
        },
        watch: {
            propData (val) {
                let _this = this;
                if (val.show && !val.noTiming) {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        _this.propData.show = false
                    }, this.propData.time || 3000)
                }
            }
        }
    }
</script>

<style lang="less">
    .x-toast {
        position: fixed;
        z-index: 11;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        background: #44db5e;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        min-height: .7rem;
        justify-content: center;
        align-items: center;
    }

    .x-toast-content {
        padding: 0 .15rem;
        box-sizing: border-box;
    }

    .snapshotStyle {
        background: rgba(151, 22, 255, .7);
    }

    .errorStyle {
        background: rgba(254, 56, 36, .95);
    }

    .x-slide-from-top-enter, .x-slide-from-top-leave-active {
        opacity: 0;
        transform: translateY(-100%) !important;
    }

    .x-slide-from-top-enter-active,
    .x-slide-from-top-leave-active {
        transition: all 400ms cubic-bezier(.36, .66, .04, 1);
    }

    .x-toast .x-toast-content {
        min-height: 0;
        margin: 0;
    }

    .x-toast-content {
        font-size: .22rem;
        color: #fff;
    }

    /*.....*/
    .content-click-warrper {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
    }

    .contentClick {
        flex: 1;
    }

    .closeClick {
        width: .62rem;
        height: 100%;
        box-sizing: border-box;
        padding-right: .32rem;
        position: relative;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .close {
        width: .32rem;
        height: .32rem;
        position: relative;
    }

    .close::before, .close::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        top: 50%;
        left: 0;
        margin-top: -1px;
        border-radius: 120% 0;
        background: #fff;
    }

    .close::before {

        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .close::after {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }


</style>
