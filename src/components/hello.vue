<template>
  <div>
    <h1>{{msg}}</h1>
    <div>{{txt}}</div>
    
  </div>
</template>

<script>
import axios from 'axios'
import { request } from "@/network/request";


export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to hello',
      txt:''
    }
  },
  created(){
    request({
      url:'/home/multidata'
    }).then(res=>{
      // console.log(res);
      this.txt = res;
      console.log(this.txt)
    })
  }

}

</script>

<style>

</style>