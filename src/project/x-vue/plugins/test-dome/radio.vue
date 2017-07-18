<template>
<span class="radio-wrap" :class="{on:isCheckedInner}" @click="changRadioStatus">
    <span class="radio-dot"></span>
</span>
</template>
<style>

</style>
<script>
export default {
    props: ['isChecked'],
    data() {
        return {
            isCheckedInner: this.isChecked
        }
    },
    watch: {
        isChecked() {}
    },
    methods: {
        changRadioStatus(){
            this.isCheckedInner = !this.isCheckedInner;
            this.$emit('radioStatusChange',this.isCheckedInner);
        }
    }
}
</script>
<style lang="less">
.radio-wrap {
    display: inline-block;
    vertical-align: middle;
    width: 44px;
    height: 24px;
    border: 2px solid #ddd;
    border-radius: 12px;
    position: relative;
    transition: .4s;
    .radio-dot {
        position: absolute;
        top: -2px;
        left: -1px;
        display: inline-block;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        box-shadow: 0 1px 2px rgba(0,0,0,.5);
        transition: 0.4s;
        border: 1px solid #aaa;
        background-color: #fff;
    }
    &.on {
        background-color: #66C2FF;
        .radio-dot {
            left: calc(100% - 23px);
        }
    }
}
</style>
