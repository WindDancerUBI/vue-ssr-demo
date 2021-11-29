/*
 * @Title: api接口
 * @Author: huangjitao
 * @Date: 2021-11-29 15:42:34
 * @Description: 模仿后台请求
 */
const getData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        id: 1,
        item: 'hello'
      },
      {
        id: 2,
        item: 'hello1'
      },
    ])
  }, 2000)
})

export {
  getData
}