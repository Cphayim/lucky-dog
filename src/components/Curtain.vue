<!-- 
  窗帘组件 
-->
<template>
  <transition name="curtain-slide" :duration="400">
    <div class="m-curtain">
      <!-- 左侧窗帘 -->
      <div class="curtain-l"></div>
      <!-- /左侧窗帘 -->

      <!-- 右侧窗帘 -->
      <div class="curtain-r"></div>
      <!-- /右侧窗帘 -->
    </div> 
  </transition> 
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:23:05 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-28 15:08:38
 */

export default {
  name: 'Curtain'
}
</script>

<style lang="scss" scoped>
.m-curtain {
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 10;
  bottom: 20%;
  width: 100%;
  .curtain-l,
  .curtain-r {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
  }
  .curtain-l {
    left: 0;
    @include image("../assets/img/home-curtain-l.png");
  }
  .curtain-r {
    right: 0;
    @include image("../assets/img/home-curtain-r.png");
  }
}

.curtain-slide-enter-active,
.curtain-slide-leave-active {
  .curtain-l,
  .curtain-r {
    transition: all 0.4s;
  }
}
.curtain-slide-enter,
.curtain-slide-leave-to {
  .curtain-l {
    transform: translateX(-100%);
  }
  .curtain-r {
    transform: translateX(100%);
  }
}
</style>
