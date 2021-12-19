<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
 .nav-bar{
  display: flex;
   height: 44px;
   line-height: 44px;
   /*background-color: #ff5777; 这种的最好不要在这里写死,应该在外部设置非公共的style属性值*/
   box-shadow: 0 1px 1px rgba(0,0,0,.1);
 }
  .nav-bar .left,.nav-bar .right{
    position: relative;
    width: 60px;
  }
  .nav-bar .center{
    flex:1;
    text-align: center;
  }
</style>