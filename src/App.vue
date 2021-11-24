<!--
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-11-08 21:25:43
 * @Function: 该文件用途描述
-->

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  components: { Hello },
}
</script>

<style>
</style>