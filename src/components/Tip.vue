<template>
  <div class="m-tip">
    <span>{{content}}</span>
  </div>
</template>

<script>
export default {
  name: 'Tip',
  props: {
    content: {
      type: String,
      default: '提示内容'
    }
  }
}
</script>

<style lang="scss">
.m-tip {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  line-height: 40px;
  text-align: center;
  background-color: rgba($color_f1, 0.7);
  @include font($font_small, #fff);
}
</style>
