<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link :to="'/home/'+userId">home</router-link>
    <router-link to="/hello">hello</router-link>
    <!-- <router-link to="/profile">profile</router-link> -->
    <!-- 传递参数，url内 -->
    <router-link :to="{path:'/profile',query:{name:'why',age:18,height:1.88}}">profile</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    // 导航后面的东西，拼接
    return{
      userId:'list'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
