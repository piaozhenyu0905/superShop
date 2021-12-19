<template>
  <div id="profile">
    <nav-bar class="NavBar">
      <template v-slot:center>我的档案</template>
    </nav-bar>
    <user class="user"></user>
    <mid-bar></mid-bar>
    <base-info></base-info>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import user from "@/views/profile/childComps/user";
import midBar from "@/views/profile/childComps/midBar";
import BaseInfo from "@/views/profile/childComps/BaseInfo";
export default {
  name: "profile",
  components:{
    NavBar,
    user,
    midBar,
    BaseInfo
  }
}
</script>

<style scoped>
  .NavBar{
    color:#fff;
    background-color: var(--color-tint);
  }
  .user{
    height: 88px;
  }
</style>
