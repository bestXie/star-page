/**
* Created by bestXie on 2017/6/16.
*/
<template>
    <transition name="modal" v-if="confirm.show">
        <vMask :show="confirm.show" :stylebg="'rgba(0,0,0,0.2)'">
            <div class="modal-wrapper" @click="onMaskClick">
                <div class="modal-container" @click.stop="modalContainer">
                    <div class="modal-header" v-if="confirm.data&&confirm.data.title" >
                        <slot name="header">
                            <div class="modal-default-title">
                                <h3>{{confirm.data.title}}</h3>
                            </div>
                        </slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body" :confirm="confirm">
                            <div class="confirm-item" v-for="item in confirm.data.list" :key="item"
                                 v-on:click="onConfirm(item)" :style="item.style">
                                <p class="confirm-item-text">{{item.text}}</p>
                            </div>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button" @click.stop="onCancel">
                                {{confirm.data.cancel}}
                            </button>
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
                this.confirm.onConfirm && this.confirm.onConfirm(data, function () {
                    _this.confirm.show = false;
                    console.log(_this.confirm.show, 1111)
                }) || (this.confirm.show = false);
            }
        },
    };
</script>

<style lang="less">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: bottom;
    }

    .modal-default-title {
        width: 100%;
        height: 120px;
        background: #f2f2f2;
        text-align: center;
        display: table;
    }

    .modal-default-title h3 {
        font-size: 26px;
        color: #8f8e94;
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        min-width: 5rem;
        min-height: .1rem;
        /*background-color: #fff;*/
        border-radius: 2px;
        /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-body {
        /*margin: 20px 0;*/
        background: #fff;
        text-align: center;
        width: 100%;
    }

    .confirm-item {
        display: table;
        font-size: 26px;
        height: 90px;
        color: #fe3824;
        width: 100%;
        background: #fff;
        border-bottom: 1px #c8c8c8 solid;
    }

    .confirm-item:last-child {
        border-bottom: 0;
    }

    .confirm-item-text {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-default-button {
        margin-top: 20px;
        height: 90px;
        width: 100%;
        background: #fff;
        border: 0;
        font-size: 28px;
        color: #4a4a4a;
        text-align: center;
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