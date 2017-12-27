/*
 * @Author: Cphayim 
 * @Date: 2017-12-27 10:39:19 
 * @Last Modified by: Cphayim
 * @Last Modified time: 2017-12-27 13:40:23
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 全局状态管理
 */

export default new Vuex.Store({
  state: {
    /**
     * @property {boolean} isShowLoading
     */
    isShowLoading: true

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