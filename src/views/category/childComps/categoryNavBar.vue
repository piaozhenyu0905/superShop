<template>
    <nav-bar class="topNavBar">
      <template v-slot:center>
        <div>商品分类</div>
      </template>
    </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "categoryNavBar",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .topNavBar{
    background-color:var(--color-tint);
    color: #fff;
  }
</style>