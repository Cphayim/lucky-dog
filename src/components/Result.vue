<template>
  <div class="m-result">
    <!-- 签组件 -->
    <lot v-show="isShowLot"
      :index="activeLotIndex"
      @showDetail="showDetail">
    </lot>
    <!-- /签组件 -->

    <!-- 结果详情 -->
    <Dialog v-show="isShowDetailDialog">
      <div class="detail" :class="className"></div>
      <div class="btn-group">
        <!-- 再来一次 -->
        <div class="btn btn-again"
          @click="again"></div>
        <!-- /再来一次 -->
        
        <!-- 分享 -->
        <div class="btn btn-share"
          @click="$emit('openShare')">
        </div>
        <!-- /分享 -->
      </div>
    </Dialog>
    <!-- /结果详情 -->
  </div>
</template>

<script>
import Lot from '@/components/Lot'
import Dialog from '@/components/Dialog'
export default {
  name: 'Result',
  components: { Lot, Dialog },
  data() {
    return {
      /**
       * 当前总签数
       * @property {number} lotCount
       */
      lotCount: 8,

      /**
       * 是否显示签
       * @property {boolean} isShowLot
       */
      isShowLot: false,

      /**
       * 是否显示结果详情
       * @property {boolean} isShowDetailDialog
       */
      isShowDetailDialog: false

    }
  },
  computed: {
    /**
     * 当前抽中签的索引
     * @property {number} activeLotIndex
     */
    activeLotIndex() {
      return ~~(Math.random() * this.lotCount) + 1
    },
    /**
     * dialog 插槽中卡片的样式名
     * @property {string} className
     */
    className() {
      return `detail-${this.activeLotIndex}`
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShowLot = true
      this.$store.commit('playAudio', 'victory')
    }, 500)
    this.editWXShare()
  },
  methods: {
    /**
     * 显示详情
     * @method showDetail
     */
    showDetail() {
      this.isShowLot = false
      this.isShowDetailDialog = true
    },

    /**
     * 再来一次
     * @method again
     */
    again() {
      this.isShowDetailDialog = false
      setTimeout(() => {
        this.$store.commit('openLoading')
        setTimeout(() => this.$router.replace({ name: 'home' }), 500)
      }, 1000)
    },

    /**
     * 修改微信分享配置
     * @method editWXShare
     */
    editWXShare() {
      // 如果存在配置则修改
      if (typeof window.shareData === 'object' && typeof window.initShare === 'function') {
        const lotStrArr = ['无', '有钱多金', '身体健康', '极速脱单', '桃花朵朵', '心宽体胖', '戏精附身', '光吃不胖', '少玩手机']
        const shareData = window.shareData
        shareData.title = `2018，我会#${lotStrArr[this.activeLotIndex]}#`
        shareData.content = this.$store.state.minigameTitle
        shareData.imgUrl = this.$store.state.minigameImg
        window.initShare(shareData.title, shareData.content, shareData.imgUrl, shareData.detailUrl, shareData.appId, shareData.report)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.m-result {
  .detail {
    width: r(240);
    height: r(205);
    margin: r(20) auto 0;
  }
  .btn-group {
    margin: r(20) 0;
    font-size: 0;
    text-align: center;
  }
  .btn {
    display: inline-block;
    width: r(120);
    height: r(42);
    margin: 0 r(12);
    &:active {
      transform: scale(0.9);
    }
  }
}

@for $i from 1 through 8 {
  .detail-#{$i} {
    @include image("../assets/img/result-#{$i}.png");
  }
}

.btn-again {
  @include image("../assets/img/again-btn.png");
}
.btn-share {
  @include image("../assets/img/share-btn.png");
}
</style>
