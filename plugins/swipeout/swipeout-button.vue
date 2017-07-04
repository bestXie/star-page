<template>
  <button class="vux-swipeout-button"
  :class="{'x-primary': type === 'primary', 'x-delete': type === 'delete', 'x-default': type === 'default'}" :style="{width: `${width}px`, backgroundColor: backgroundColor}" @click="onButtonClick" type="button">
    <slot>{{text}}</slot>
  </button>
</template>
<style scoped="">
  .x-default{
    background: #c7c7cd;
  }
  .x-delete{
    background:#fe3824;
  }
  .x-primary{
    background:#f6a623;
  }

</style>
<script>
export default {
  props: {
    text: String,
    backgroundColor: String,
    type: String,
    width: {
      type: Number,
      default: 148
    }
  },
  methods: {
    onButtonClick () {
      if (this.$parent.$options._componentTag === 'swipeout-item') {
        this.$parent.onItemClick(this.type||'default',this.text)
      }
    }
  }
}
</script>