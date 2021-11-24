/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-11-08 21:26:00
 * @Function: 该文件用途描述
 */

import { createApp } from './app'

// 客户端特定引导逻辑……

const { app } = createApp()

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#app')