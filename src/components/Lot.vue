<!-- 
  lot 组件
 -->
<template>
  <transition name="lot" :duration="4000">
    <div class="m-lot">
      <!-- 光 -->
      <div class="light"></div>
      <!-- /光 -->
      <!-- 签 -->
      <div class="lot shake-chunk shake-constant" 
        :class="className"
        @click="$emit('showDetail')">
      </div>
      <!-- /签 -->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Lot',
  props: {
    index: {
      type: Number,
      default: 1
    }
  },
  computed: {
    className() {
      return `lot-${this.index}`
    }
  }
}
</script>

<style lang="scss" scoped>
.m-lot {
  @include mask();
  .light {
    pointer-events: none;
    position: absolute;
    top: 46%;
    left: 50%;
    width: r(350);
    height: r(350);
    margin: r(-175) auto auto r(-175);
    @include image("../assets/img/result-light.png");
  }
  .lot {
    position: absolute;
    top: 46%;
    left: 50%;
    width: r(75);
    height: r(290);
    margin: r(-145) auto auto r(-32.5);
  }
}

@for $i from 1 through 8 {
  .lot-#{$i} {
    @include image("../assets/img/result-tag-#{$i}.png");
  }
}

.lot-enter-active,
.lot-leave-active {
  transition: opacity 0.6s;
  .light {
    animation: light-blank 2s both 0.6s;
  }
  .lot {
    animation: lot-rotate 1s both 2.4s;
  }
}
.lot-enter,
.lot-leave-to {
  opacity: 0;
}

@keyframes light-blank {
  0% {
    transform: scale(.2);
    opacity: 0.7;
  }
  10% {
    transform: scale(.4);
    opacity: 0.5;
  }
  20% {
    transform: scale(.2);
    opacity: 0.7;
  }
  30% {
    transform: scale(.4);
    opacity: 0.5;
  }
  40% {
    transform: scale(.2);
    opacity: 0.7;
  }
  50% {
    transform: scale(.4);
    opacity: 0.5;
  }
  60% {
    transform: scale(.2);
    opacity: 0.7;
  }
  70% {
    transform: scale(.6);
    opacity: 0.8;
  }
  80% {
    transform: scale(.4);
    opacity: 0.5;
  }
  100% {
    transform: scale(1.1);
    opacity: 1;
  }
}

@keyframes lot-rotate {
  from{
    transform: rotate(360deg) scale(0);
    opacity: 0;
  }
  to{
    transform: rotate(0) scale(1);
    opacity: 1;
  }
}
</style>
