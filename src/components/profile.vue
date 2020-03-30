<template>
  <div>
    <h1>我是profile</h1>
    <!-- 获取URL中的信息 -->
    <h2>{{$route.query}}</h2>
  </div>
</template>

<script>
export default {
  name:'profile',
  created(){
    document.title="yonghu"
  }
}
</script>

<style>

</style>