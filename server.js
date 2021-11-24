/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-11-09 20:39:57
 * @Function: 该文件用途描述
 */
const app = require('express')()
const { createBundleRenderer } = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENE === "production"

const createRenderer = (bundle, options) => {
  return createBundleRenderer(bundle, Object.assign(options, {
    basedir: resolve('./dist'),
    runInNewContext: false,
  }))
}

let renderer, readyPromise
const templatePath = resolve('./src/index.template.html')
const bundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const template = fs.readFileSync(templatePath, 'utf-8')

renderer = createRenderer(bundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest // （可选）客户端构建 manifest
})

// 在服务器处理函数中……
app.get('*', (req, res) => {
  const context = {
    title: 'hello ssr with webpack',
    meta: `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    `,
    url: req.url
  }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

app.listen(8080)