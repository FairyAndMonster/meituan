// //const Koa = require('koa')
// import Koa from 'koa'
// const consola = require('consola')
// const { Nuxt, Builder } = require('nuxt')
// //引入mongoose
// import mongoose from 'mongoose'
// //处理post请求相关的 
// import bodyParser from 'koa-bodyparser'
// import session from 'koa-generic-session'
// import Redis from 'koa-redis'
// //数据格式美化工具
// import json from 'koa-json'
// import dbConfig from './dbs/config'
// import passport from './interface/utils/passport'
// import users from './interface/user'
// const app = new Koa()

// // Import and Set Nuxt.js options
// const config = require('../nuxt.config.js')
// config.dev = app.env !== 'production'




// async function start () {
//   // Instantiate nuxt.js
//   const nuxt = new Nuxt(config)

//   const {
//     host = process.env.HOST || '127.0.0.1',
//     port = process.env.PORT || 3000
//   } = nuxt.options.server

//   app.keys = ['mt', 'keyskeys'],
//   app.proxy = true,
//   app.use(session({
//     key: 'mt',
//     prefix: 'mt:uid',
//     store: new Redis()
//   }))
//   app.use(bodyParser({
//     extendTypes: ['json', 'form', 'text']
//   }))
//   app.use(json())
//   //连接数据库
//   mongoose.connect(dbConfig.dbs, {
//     useNewUrlParser: true
//   })

//   //处理登录相关
//   app.use(passport.initialize())
//   app.use(passport.session())

//   app.use(users.routes()).use(users.allowedMethods())
//   // Build in development
//   if (config.dev) {
//     const builder = new Builder(nuxt)
//     await builder.build()
//   } else {
//     await nuxt.ready()
//   }

//   app.use((ctx) => {
//     ctx.status = 200
//     ctx.respond = false // Bypass Koa's built-in response handling
//     ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
//     nuxt.render(ctx.req, ctx.res)
//   })

//   app.listen(port, host)
//   consola.ready({
//     message: `Server listening on http://${host}:${port}`,
//     badge: true
//   })
// }

// start()





import Koa from 'koa'
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json'
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users'
import geo from './interface/geo'


const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.keys = ['mt', 'keyskeys']
app.proxy = true
app.use(session({ key: 'mt', prefix: 'mt:uid', store: new Redis() }))
app.use(bodyParser({
  extendTypes: ['json', 'form', 'text']
}))
app.use(json())

mongoose.connect(dbConfig.dbs, {
  useNewUrlParser: true
})
app.use(passport.initialize())
app.use(passport.session())

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(users.routes()).use(users.allowedMethods())
  app.use(geo.routes()).use(geo.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({ message: `Server listening on http://${host}:${port}`, badge: true })
}

start()

