<!--
 * @Descripttion: 路由组件hello1
 * @Author: huangjitao
 * @Date: 2021-11-09 20:28:25
 * @Function: 该文件用途描述
-->

<template>
  <div>hello world1{{item}}</div>
</template>

<script>
export default {
  asyncData: ({ store }) => {
    return store.dispatch('getDataAction')
  },
  computed: {
    item () {
      return this.$store.state.lists
    }
  }
}
</script>

<style lang="scss" scoped>
</style>