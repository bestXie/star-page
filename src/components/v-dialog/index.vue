/**
* Created by bestXie on 2017/6/16.
*/
<template>
    <div class="modal-mask" v-if="dialog.isShow">
        <div class="modal-mask-bg" @click="hiddenDialog" :style="dialog.maskBg"></div>
        <div class="modal-wrapper">
            <div class="modal-container" v-bind:class="{ slideUp: dialog.isShow }">

                <div class="modal-header">
                    <slot name="header">
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body" :dialog="dialog">
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <!--  <button class="modal-default-button" @click="$emit('close')">
                              OK
                          </button>-->
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            dialog: {
                default: {}
            }
        },
        data: function () {
            return {
            }
        },
        mounted: function () {
//            console.log(this.dialog);
            if (this.dialog.isShow) {
                this.slideUp = 'slideUp'
            }
        },
        methods: {
            hiddenDialog: function () {
                if (this.dialog.bgHide) {
                    this.dialog.isShow = false;
                    this.slideUp = ''
                }
            },
            confirmData: function () {
                this.dialog.success(this.dialog.data)
            }
        },
    };
</script>

<style>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: table;
    }

    .modal-mask-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;

    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: bottom;
        width: 100%;
    }

    .modal-container {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        border-radius: 2px;
        font-family: Helvetica, Arial, sans-serif;
        max-height: 70%;
        overflow: hidden;
        overflow-y: auto;
        -webkit-transition: all 3s linear;
        -moz-transition: all 3s linear;
        -o-transition: all 3s linear;
        transition: all 3s linear;
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);

    }

    .slideUp {
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-name: liInUp;
        animation-name: liInUp;
        animation-duration: .3s;
        -webkit-animation-duration: .3s;
        animation-delay: 0s;
    }

    @-webkit-keyframes liInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, 90%, 0);
            transform: translate3d(0, 90%, 0)
        }
        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    @keyframes liInUp {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, 90%, 0);
            transform: translate3d(0, 90%, 0)
        }
        100% {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        /*margin: 20px 0;*/
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

</style>