/*
 * @Descripttion: 应用入口
 * @Author: huangjitao
 * @Date: 2021-11-08 21:25:31
 * @Function: 生成vue实例（app）
 */

import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp () {
  // 创建 router 实例
  const router = createRouter()

  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    render: h => h(App)
  })

  // 暴露 app 和 router
  return { app, router }
}