<!-- 
  Loading 组件
 -->
<template>
  <transition name="fade">
    <div v-show="isShowLoading" class="m-loading"></div>
  </transition>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    isShowLoading() {
      return this.$store.state.isShowLoading
    }
  },
  created() { },
  mounted() {
    /** 
     * 待组件 DOM 挂载后
     * 使用组件替换临时等待层
     */
    const tempLoading = document.querySelector('.m-loading[data-role="temp"]')
    if (tempLoading) {
      setTimeout(() => tempLoading.parentNode.removeChild(tempLoading))
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
