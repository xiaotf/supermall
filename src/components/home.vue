<template>
  <div>
    <h2>home</h2>
    <h2>{{userId}}</h2>
    <router-link to="/home/HomeNews">新闻</router-link>
    <router-link to="/home/HomeMessage">行行行</router-link>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
// 封装之后调用
import { request } from "@/network/request.js";
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log(res);
// },err=>{
//   console.log(err);
// })
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res)
})

axios({
  url:'http://123.207.32.32:8000/home/multidata',
  // 请求方式get post 默认是get
  method:'get'
}).then(res => {
  // console.log(res)
})

axios({
  // url:'http://123.207.32.32:8000/home/data?type=pop&page=3',
  url:'http://123.207.32.32:8000/home/data',
  // params拼接
  params:{
    type:'pop',
    page:1
  },
  // 请求方式get post 默认是get
  method:'get'
}).then(res => {
  // console.log(res)
})
//并发请求
// 全局设置
axios.defaults.baseURL='http://123.207.32.32:8000'
// 延时
axios.defaults.timeout=5000

axios.all([axios(
  {url:'/home/multidata'}
),axios(
  {
    url:'/home/data',
     params:{
    type:'pop',
    page:1
  }
  }
)])
//第一种
// .then(results =>{
// console.log(results)
// })
// 第二中
 .then(axios.spread((res1,res2) =>{
// console.log(res1);
// console.log(res2)
}))


// 创建对应的实例
const instancel = axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
instancel({
  url:'/home/multidata'
}).then(res=>{
  // console.log(res)
})

export default {
  name:'home',
  // 拿到导航栏内容。路由
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}


</script>

<style>

</style>