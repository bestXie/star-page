<template>
    <transition :name="'vux-slide-from-top'">
        <div class="weui-toast" v-show="propData.show">
            <p class="weui-toast-content">{{propData.content || ''}}</p>
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
            }
        },
        data () {
            return {
                show: false
            }
        },
        created () {
            if (this.value) {
                this.show = true
            }
        },
        computed: {},
        watch: {
            propData (val) {
                let _this = this;
                if (val.show) {
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
    .weui-toast {
        position: fixed;
        z-index: 1111;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        background: #44db5e;
        text-align: center;
        color: #FFFFFF;
    }

    .weui-toast-content {
        padding: 15px 0;
    }

    .vux-slide-from-top-enter, .vux-slide-from-top-leave-active {
        opacity: 0;
        transform: translateY(-100%) !important;
    }

    .vux-slide-from-top-enter-active,
    .vux-slide-from-top-leave-active {
        transition: all 400ms cubic-bezier(.36, .66, .04, 1);
    }

    .weui-toast .weui-toast-content {
        min-height: 0;
        margin: 0;
    }

    .weui-toast-content {
        font-size: 22px;
    }

</style>
