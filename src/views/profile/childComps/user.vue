<template>
  <nav-bar class="user">
    <template v-slot:left>
      <img src="~assets/img/profile/avatar.svg" alt="" class="user-photo">
    </template>
    <template v-slot:right>
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </template>
    <template v-slot:center>
        <div class="enter">
          <span class="register">登录/注册</span>
          <div class="handphone">
            <img src="~assets/img/profile/phone.svg" alt="">
            <span>暂无绑定手机号</span>
          </div>
        </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "user",
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .user{
    background-color: var(--color-tint);
    text-align: center;
    font-size: var(--font-size);
    color:#fff
  }
   .user-photo{
     display: block;
     position: absolute;
     left: 0;
     right: -30px;
     top: 0;
     bottom: 0;
     margin:auto;
    width: 70px;
    height: 70px;
  }

  .right img{
    opacity: 0.5;
    display: block;
    position: absolute;
    left: 0;
    right: -20px;
    top: 0;
    bottom: 0;
    margin:auto;
    height: 25px;
    width: 25px;
  }
  .enter{
    position: relative;
  }
  .enter .register{
    top:15px;
    position: absolute;
    left: 32px;
    font-size: 20px;
  }
  .handphone{
    position: absolute;
    top: 41px;
    left:29px;
  }
  .handphone img{
    position: absolute;
    top: 12px;
    height: 18px;
    width: 18px;
  }
  .handphone span{
    margin-left: 20px;
  }
</style>