<!-- 
  横幅组件 
  参数说明：
-->
<template>
  <transition name="banner-slide">
    <div class="m-banner" >
      <!-- 默认 -->
      <div v-if="!egg" class="item">
        <!-- 主标题 -->
        <div class="main-title"></div>
        <!-- /主标题 -->
        <!-- 副标题盒子 -->
        <div class="sub-title-box">
          <div class="sub-title"></div>
        </div>
        <!-- /副标题盒子 -->
      </div>
      <!-- /默认 -->

      <!-- 彩蛋 -->
      <div v-else class="item">
        <!-- 主标题 -->
        <div class="main-title main-title-2"></div>
        <!-- /主标题 -->
        <!-- 副标题盒子 -->
        <div class="sub-title-box">
          <div class="sub-title sub-title-2"></div>
        </div>
        <!-- /副标题盒子 -->
      </div>
      <!-- /彩蛋 -->
    </div>  
  </transition>
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:23:05 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-28 15:19:19
 */

export default {
  name: 'Banner',
  props: {
    egg: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.m-banner {
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 15;
  width: 100%;
  padding-top: r(10);

  .item {
    position: absolute;
    top: r(15);
    width: 100%;
    animation: banner-float 1s linear alternate infinite both;
  }

  .main-title,
  .sub-title-box {
    position: relative;
    margin: 0 auto;
    width: r(350);
  }
  .main-title {
    z-index: 2;
    height: r(105.5);
    @include image("../assets/img/home-main-title.png");
  }
  .main-title-2 {
    background-image: url("../assets/img/home-main-title-2.png");
  }
  .sub-title-box {
    transform: translateY(r(-40));
  }
  .sub-title {
    height: r(92.5);
    @include image("../assets/img/home-sub-title.png");
  }
  .sub-title-2 {
    background-image: url("../assets/img/home-sub-title-2.png");
  }
}

.banner-slide-enter-active,
.banner-slide-leave-active {
  transition: all 0.4s 0.4s;
}

.banner-slide-enter,
.banner-slide-leave-to {
  transform: translateY(r(-100));
  opacity: 0;
}

@keyframes banner-float {
  from {
    transform: translateY(10);
  }
  to {
    transform: translateY(r(-10));
  }
}
</style>
