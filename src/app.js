/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-11-08 21:25:31
 * @Function: 该文件用途描述
 */

import Vue from 'vue'
import App from './App.vue'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  const app = new Vue({
    // 根实例简单的渲染应用程序组件。
    render: h => h(App)
  })
  return { app }
}