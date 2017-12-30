<!-- 
  游戏首页
-->
<template>
  <div class="p-home">
    <!-- 提示组件 -->
    <tip v-if="!!tipContent" :content="tipContent"></tip>
    <!-- /提示组件 -->
    
    <!-- 窗帘组件 -->
    <curtain v-show="isLoaded && isShowDog" ></curtain>
    <!-- /窗帘组件 -->
    
    <!-- 横幅组件 -->
    <banner v-show="isLoaded" :egg="triggered" ></banner>
    <!-- /横幅组件 -->

    <!-- 狗组件 -->
    <dog v-show="isShowDog" 
      :isLoaded="isLoaded" 
      :delay="800" 
      :isShake="isShake" 
      @easter-egg="triggerEasterEgg">
    </dog>
    <!-- /狗组件 -->

    <!-- 开始按钮组件 -->
    <start-btn v-show="!tipContent" 
      :isLoaded="isLoaded"
      @open-register="openRegister"
      @start-game="startGame">
    </start-btn>
    <!-- /开始按钮组件 -->

    <!-- 登记框组件 -->
    <register
      :isShowDialog="isShowRegister"
      @start-game="startGame">
    </register>
    <!-- /登记框组件 -->
  </div>
</template>

<script>
/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 11:25:10 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-30 23:43:14
 */

import Tip from '@/components/Tip'
import Curtain from '@/components/Curtain'
import Banner from '@/components/Banner'
import Dog from '@/components/Dog'
import StartBtn from '@/components/StartBtn'
import Register from '@/components/Register'

export default {
  name: 'HomePage',
  components: {
    Tip,
    Curtain,
    Banner,
    Dog,
    StartBtn,
    Register
  },
  data() {
    return {
      /**
       * 组件是否载入完毕
       * @property {boolean} isLoaded 
       */
      isLoaded: false,

      /** 
       * 提示文字
       * @property {string} tipContent 
       */
      tipContent: this.$store.state.canPlay ? '' : '游戏未发布或已结束',

      /**
       * 登记框是否显示
       * @property {boolean} isShowRegister
       */
      isShowRegister: false,

      /**
       * 狗狗是否显示
       * @property {boolean} isShowDog
       */
      isShowDog: true,

      /**
       * 狗狗是否摇摆
       * @property {boolean} isShake 
       */
      isShake: false,

      /**
       * @property triggered 是否触发了彩蛋
       */
      triggered: false
    }
  },
  mounted() {
    setTimeout(() => {
      // 关闭 loading
      this.$store.commit('closeLoading')

      setTimeout(() => this.isLoaded = true, 600)
    }, 1000)
  },
  methods: {
    /**
     * 触发彩蛋
     * @method triggerEasterEgg
     */
    triggerEasterEgg() {
      this.isShake = true
      this.triggered = true
    },

    /**
     * 打开登记窗口
     * @method openRegister
     */
    openRegister() {
      // 隐藏狗
      this.isShowDog = false
      this.isShowRegister = true
    },

    /**
     * 关闭登记窗口
     * @method openRegister
     */
    closeRegister() {
      this.isShowRegister = false
      this.isShowDog = true
    },

    /**
     * 开始游戏
     * @method startGame
     */
    startGame() {
      setTimeout(() => {
        this.$store.commit('openLoading')
        setTimeout(() => this.$router.replace({
          name: 'play',
          params: {
            hash: this.$store.state.hash
          }
        }), 500)
      }, this.isShowRegister ? 1500 : 0)

      this.isShowRegister = false
      console.log('开始游戏')
    }

  }
}
</script>

<style lang="scss" scoped>
.p-home {
  position: relative;
  height: 100%;
  @include image("../assets/img/home-bg.png");
}
</style>
