<!-- 
  游戏进行页 
-->
<template>
  <div class="p-play">
    <!-- 狗组件 -->
    <dog
      :isLoaded="isLoaded" 
      :isShake="isShake" >
    </dog>
    <!-- /狗组件 -->

    <!-- 结果组件 -->
    <result 
      v-if="isShowResult"
      @openShare="isShowShareLayer = true">
    </result>
    <!-- /结果组件 -->

    <!-- 分享组件 -->
    <share 
      v-show="isShowShareLayer"
      @closeShare="isShowShareLayer = false">
    </share>
    <!-- /分享组件 -->
  </div>
</template>

<script>
import Dog from '@/components/Dog'
import Result from '@/components/Result'
import Share from '@/components/Share'

export default {
  name: 'PlayPage',
  components: { Dog, Result, Share },
  data() {
    return {
      /**
       * 是否通过验证
       * 将在 created 钩子中对比 路由传递的 hash 和 store 中的 hash 是否一致，
       * 若不一致将跳转到首页
       * @property {boolean} valid
       */
      valid: false,

      /**
       * 是否载入完毕
       * @property {boolean} isLoaded
       */
      isLoaded: false,

      /**
       * 狗狗是否摇摆
       * @property {boolean} isShake
       */
      isShake: false,

      /**
       * 是否显示结果
       * @property {boolean} isShowResult
       */
      isShowResult: false,

      /**
       * 是否显示分享层
       * @property {boolean} isShowShareLayer
       */
      isShowShareLayer: false
    }
  },
  created() {
    if (this.$route.params.hash === this.$store.state.hash) {
      this.valid = true
    } else {
      this.$store.commit('openLoading')
      setTimeout(() => this.$router.replace({ name: 'home' }), 500)
    }
  },
  mounted() {
    if (!this.valid) return
    setTimeout(() => this.$store.commit('closeLoading'), 1000)
    setTimeout(() => {
      this.isLoaded = true
      this.beginShake()
    }, 1600)
  },
  methods: {
    /**
     * 开始摇摆
     * @method beginShake
     */
    beginShake() {
      new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isShake = true
          this.$store.commit('playAudio', 'shake')
          resolve()
        }, 600)
      }).then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.isShake = false
            this.$store.commit('stopAudio', 'shake')
            this.isShowResult = true
            resolve()
          }, 3000)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.p-play {
  position: relative;
  height: 100%;
  @include image("../assets/img/play-bg.png");
}
</style>
