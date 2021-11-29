/*
 * @Title: 状态存储器store
 * @Author: huangjitao
 * @Date: 2021-11-29 15:37:36
 * @Description: description of this file
 */

import Vue from "vue";
import Vuex from "vuex"
import { getData } from "../api/data";

Vue.use(Vuex)

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
export function createStore () {
  return new Vuex.Store({
    state: {
      lists: []
    },
    actions: {
      getDataAction ({ commit }) {
        console.log('TCL: getDataAction -> commit', commit)
        return getData().then((res) => {
          console.log('TCL: getDataAction -> res', res)
          commit('setData', res)
        })
      }
    },
    mutations: {
      setData (state, data) {
        state.lists = data
      }
    }
  })
}