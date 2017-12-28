<!-- 
  Dialog 组件 
-->
<template>
  <transition name="dialog-slide" :duration="1400">
    <div class="m-dialog">
      <div class="dialog">
        <div class="dialog-bg-end"></div>
        <div class="dialog-dog-wrap">
          <div class="dialog-dog"></div>
        </div>
        <div class="dialog-body">
          <div class="slot-container">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:23:05 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-28 17:13:25
 */

export default {
  name: 'Dialog'
}
</script>

<style lang="scss" scoped>
.m-dialog{
  @include mask();
}
.dialog {
  overflow: hidden;
  position: relative;
  padding-top: r(70);
}

.dialog-bg-end,
.dialog-body {
  position: relative;
  margin: 0 auto;
  width: r(325);
}

.dialog-bg-end {
  pointer-events: none;
  margin-top: r(70);
  height: r(87.5);
  @include image("../assets/img/dialog-bg-end.png");
  z-index: 1;
}
.dialog-dog-wrap {
  pointer-events: none;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: r(70);
  margin-left: r(-95);
}
.dialog-dog {
  width: r(190);
  height: r(180);
  @include image("../assets/img/dialog-dog.png");
  transform-origin: center bottom;
  /* 狗摇摆动画 */
  animation: dog-rotate 2s linear infinite normal both;
}
.dialog-body {
  z-index: 3;
  overflow: hidden;
  height: r(352.5);
  @include image("../assets/img/dialog-bg-front.png");
  transform: translateY(r(-70));
  .slot-container{
    overflow: hidden;
    width: r(290);
    height: r(300);
    margin: 0 auto;
    margin-top: r(40);
  }
}


.dialog-slide-enter-active {
  transition: opacity 0.4s;
  .dialog {
    transition: transform 0.6s 0.4s;
  }
  .dialog-dog {
    animation: dog-slide 0.4s 1s both;
  }
}

.dialog-slide-leave-active {
  transition: opacity 0.4s 1s;
  .dialog {
    transition: transform 0.6s 0.6s;
  }
  .dialog-dog {
    animation: dog-slide 0.4s reverse both;
  }
}

.dialog-slide-enter,
.dialog-slide-leave-to {
  opacity: 0;

  .dialog {
    transform: translateY(-100%);
  }
}

/* 狗摇摆动画 */
@keyframes dog-rotate {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0);
  }
}

/* 狗进入/退出动画 */
@keyframes dog-slide {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
