<template>
    <transition name="modal" v-if="confirm.show">
        <vMask :show="confirm.show" :style="confirm.data.maskStylebg">
            <div class="modal-wrapper" @click="onMaskClick">
                <div class="modal-container" @click.stop="modalContainer">
                    <div class="modal-header" v-if="confirm.data&&confirm.data.title">
                        <slot name="header">
                            <div class="modal-default-title">
                                <h3>{{confirm.data.title}}</h3>
                            </div>
                        </slot>
                    </div>

                    <div class="modal-body" :class="confirm.data.boxType">
                        <slot name="body" :confirm="confirm">
                            <hover-style class="confirm-item" v-for="item,index in confirm.data.list" :key="index"
                                         v-on:starClick="onConfirm(item)" :style="item.style">
                                <p class="confirm-item-text">{{item.text}}</p>
                            </hover-style>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <hover-style>
                                <div class="modal-default-button"  :class="confirm.data.boxType"
                                        @click.stop="onCancel">
                                    {{confirm.data.cancel}}
                                </div>
                            </hover-style>
                        </slot>
                    </div>
                </div>
            </div>
        </vMask>
        <!--</div>-->
    </transition>
</template>
<script>
    import vMask from '../mask/index.vue';
    export default {
        components: {
            vMask
        },
        props: ['confirm'],
        data: function () {
            return {}
        },
        mounted: function () {
        },
        methods: {
            modalContainer(){

            },
            onMaskClick: function () {
                if (this.confirm.maskClick) {
                    this.onConfirm();
                }
            },
            confirmData: function () {
                this.confirm.success(this.confirm.data)

            },
            onCancel(){
                let _this = this;
                this.confirm.onCancel && this.confirm.onCancel(function () {
                    _this.confirm.show = false;
                    console.log(_this.confirm.show, 1111)
                }) || (this.confirm.show = false);
            },
            onConfirm(data){
                let _this = this;
                if (this.confirm.onConfirm) {
                    this.confirm.onConfirm(data, function () {
                        _this.confirm.show = false;
                        console.log(_this.confirm.show, 1111)
                    })
                } else {
                    this.confirm.show = false;
                }
            }
        },
    };
</script>

<style lang="less">
    .modal-mask {
        position: absolute;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .modal-default-title {
        width: 100%;
        height: 1.2rem;
        background: #f2f2f2;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-default-title h3 {
        font-size: .26rem;
        color: #8f8e94;
    }

    .modal-container {
        width: 100%;
        min-height: .1rem;
        border-radius: 2px;
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-body {
        background: #fff;
        text-align: center;
        width: 100%;
    }

    .confirm-flex {
        display: flex;
    }

    .confirm-item {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .26rem;
        height: .9rem;
        color: #fe3824;
        width: 100%;
        background: #fff;
        border-bottom: 1px #c8c8c8 solid;
    }

    .confirm-flex .confirm-item, .confirm-black .confirm-item {
        color: #4a4a4a;
    }

    .confirm-flex .confirm-item {
        border-right: 1px #c8c8c8 solid;
    }

    .confirm-flex .confirm-item:last-child {
        border-right: 0;
        border-bottom: 1px #c8c8c8 solid;
    }

    .confirm-flex.modal-default-button {
        margin-top: 0;
    }

    .confirm-item:last-child {
        border-bottom: 0;
    }

    .confirm-item-text {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: flex-end;
    }

    .modal-default-button {
        margin-top: .2rem;
        height: .9rem;
        width: 100%;
        background: #fff;
        border: 0;
        font-size:.28rem;
        color: #4a4a4a;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
</style>