<template>
    <transition :name="'vux-slide-from-top'">
        <div class="weui-toast" v-show="propData.show" :class="{ snapshotStyle: propData.type}" @click="starClick">
            <p class="weui-toast-content"  >{{propData.content || ''}}</p>
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
            }
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
            starClick(){
                this.$emit('starClick')
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
                console.log(val.type)

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
        display: flex;
        min-height: .7rem;
        justify-content: center;
        align-items: center;
    }

    .weui-toast-content {
        padding: 0 .15rem;
        box-sizing: border-box;
    }
    .snapshotStyle{
        color: #fff;
        background: rgba(151,22,155,.7);
        font-size: .22rem;
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
        font-size: .22rem;
    }

</style>
