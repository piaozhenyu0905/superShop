<template>  <!-- -->
  <div id="tab-bar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
}
</script>

<style scoped>
#tab-bar{
  display: flex;
  text-align: center;
  height: 49px; /*移动端的tab-bar常用的高度为49px*/
  background-color: #f6f6f6;
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  box-shadow: 0px -1px 2px rgba(0,0,0,.1);
}

</style>
