/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 10:39:19 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2018-01-02 22:47:23
 */
import Vue from 'vue'
import Vuex from 'vuex'
import '@/scripts/md5'

Vue.use(Vuex)


const gameConfig = window.gameConfig || {}

/**
 * 全局状态管理
 */
export default new Vuex.Store({
  state: {
    /**
     * 本次页面的唯一hash（md5值）
     * 防止直接通过 #/play 访问
     * @property {string} hash
     */
    hash: Math.random().toString().md5(),
    /**
     * 是否显示 loading
     * @property {boolean} isShowLoading
     */
    isShowLoading: true,

    /**
     * 是否登记过
     * @property {boolean} isRegistered
     */
    isRegistered: gameConfig.isRegistered,

    /**
     * 是否能开始游戏
     * @property {boolean} canPlay
     */
    canPlay: gameConfig.canPlay,

    /**
     * 游戏 id
     * @property {number} minigameId
     */
    minigameId: gameConfig.minigameId,

    /**
     * 游戏标题
     * @property {string} minigameTitle
     */
    minigameTitle: gameConfig.minigameTitle,

    /**
     * 分享图片
     * @property {string} minigameImg
     */
    minigameImg: gameConfig.minigameImg,

    /**
     * 背景音乐
     * @property {DOMElement}
     */
    bgmAudio: (() => {
      const audio = new Audio('http://p1xb162jl.bkt.clouddn.com/game/lucky-dog/bgm.mp3')
      audio.loop = true
      audio.addEventListener('canplaythrough', function (e) { this.play() })
      audio.addEventListener('error', err => console.log(err))
      return audio
    })(),
    shakeAudio: (() => {
      const audio = new Audio('http://p1xb162jl.bkt.clouddn.com/game/lucky-dog/shake.mp3')
      audio.loop = true
      audio.addEventListener('error', e => console.log(e))
      return audio
    })(),
    victoryAudio: (() => {
      const audio = new Audio('http://p1xb162jl.bkt.clouddn.com/game/lucky-dog/victory.mp3')
      audio.addEventListener('error', e => console.log(e))
      return audio
    })()
  },
  mutations: {
    /**
     * 打开 Loading 层
     * @param {object} state 
     */
    openLoading(state) {
      state.isShowLoading = true
    },

    /**
     * 关闭 Loading 层
     * @param {object} state 
     */
    closeLoading(state) {
      state.isShowLoading = false
    },

    /**
     * 修改状态为已登记
     * @param {object} state 
     */
    registered(state) {
      state.isRegistered = true
    },

    /**
     * 播放背景音乐
     * @param {string} name
     */
    playAudio(state, name) {
      const audio = state[`${name}Audio`]
      if (audio) {
        audio.play()
      }
    },

    /**
     * 停止背景音乐
     * @param {string} name
     */
    stopAudio(state, name) {
      const audio = state[`${name}Audio`]
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  },
  actions: {},
  getters: {}
})