<!-- 
  狗组件 
  参数说明：
  isLoaded  {boolean} [false] 当为 true 时执行进入动画
  delay     {number}  [0]     延迟动画延迟/毫秒
  shake     {boolean} [false] 是否显示 摇晃
-->
<template>
  <div class="m-dog" :class="{loaded: isLoaded}" :style="opt">
    <div class="dog" :class="{shake:isShake}"
      @click="feel">
    </div>
  </div>  
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:23:05 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-28 15:40:41
 */

export default {
  name: 'Dog',
  props: {
    isLoaded: {
      type: Boolean,
      default: false
    },
    isShake: {
      type: Boolean,
      default: false
    },
    delay: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    opt() {
      return {
        'transitionDelay': ~~this.delay / 1000 + 's'
      }
    }
  },
  data() {
    return{
      count: 0
    }
  },
  methods: {
    feel() {
      if(++this.count === 10){
        this.$emit('easter-egg')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.m-dog {
  position: absolute;
  top: r(130);
  z-index: 5;
  width: 100%;
  opacity: 0;
  will-change: auto;
  transform: scale(0.5) translateY(r(80));
  .dog {
    width: r(340);
    height: r(395);
    margin: 0 auto;
    @include image("../assets/img/dog-normal.gif");
    animation: dog-float 1s linear alternate infinite both;
    &.shake {
      @include image("../assets/img/dog-shake.gif");
    }
  }
  &.loaded {
    transition: all 0.4s;
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes dog-float {
  from {
    transform: translateY(5);
  }
  to {
    transform: translateY(r(-5));
  }
}
</style>
