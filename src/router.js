/*
 * @Title: 路由文件
 * @Author: huangjitao
 * @Date: 2021-11-24 16:14:24
 * @Description: description of this file
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      // ...
      {
        path: '/hello',
        component: () => import(/* webpackChunkName: 'hello' */'./components/Hello.vue')
      },
      {
        path: '/hello1',
        component: () => import(/* webpackChunkName: 'hello1' */'./components/Hello1.vue')
      },
    ]
  })
} 
