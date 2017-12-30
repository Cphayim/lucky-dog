/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 10:39:19 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-30 23:42:32
 */
import Vue from 'vue'
import Vuex from 'vuex'
import '@/scripts/md5'

Vue.use(Vuex)


const gameConfig = window.gameConfig

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
    canPlay: gameConfig.canPlay
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
    }
  },
  actions: {},
  getters: {}
})