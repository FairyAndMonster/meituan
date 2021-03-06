import Router from 'koa-router'
import axios from './utils/axios'

let router = new Router({ prefix: '/geo' })

router.get('/getPosition',async(ctx)=>{
  let {
    status,
    data:{
      province,
      city
    }
  } = await axios.get(`http://cp-tools.cn/get/getPosition`)
  if(status === 200){
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province:'',
      city:''
    }
  }
})
export default router