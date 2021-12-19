<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
  import MainTabBar from "@/components/content/MainTabBar/MainTabBar";
  import NavBar from "@/components/common/navbar/NavBar";
  export default {
    name:'App',
    components:{
      MainTabBar,
      NavBar
    }
  }
</script>
<style>
 @import '~assets/css/base.css';

 .main-tab-bar{
   background-color: #fff;
   z-index: 999;
 }
</style>
