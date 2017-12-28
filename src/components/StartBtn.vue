<!-- 
  开始按钮组件 
  isLoaded  {boolean} [false] 当为 true 时执行进入动画
-->
<template>
  <div class="m-start-btn animated bounceInRight" :class="{loaded: isLoaded}" >
    <div class="start-btn" 
      @click="start">
    </div>
  </div>  
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:23:05 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-27 17:38:49
 */

export default {
  name: 'StartBtn',
  props: {
    isLoaded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    start() {
      // 判断是否需要登记
      if (!this.$store.state.isRegistered) {
        // 打开登记框
        this.$emit('open-register')
      } else {
        // 直接开始游戏
        this.$emit('start-game')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.m-start-btn {
  position: absolute;
  z-index: 5;
  bottom: 10%;
  width: 100%;
  animation-delay: 100s;
  .start-btn {
    width: r(245);
    height: r(69);
    margin: 0 auto;
    @include image("../assets/img/home-start-btn.png");
    &:active {
      transform: scale(0.8);
    }
  }
  &.loaded {
    animation-delay: 3s;
  }
}
</style>
