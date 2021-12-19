<template>
  <div class="Base">
  <div class="baseInfo">
    <div class="item">
      <div class="img-wrapper">
        <img src="~assets/img/profile/message.svg" alt="">
      </div>
      <div class="message">
        <span>我的消息</span>
      </div>
    </div>
    <div class="item">
      <div class="img-wrapper">
        <img src="~assets/img/profile/pointer.svg" alt="">
      </div>
      <div class="message">
        <span>积分商城</span>
      </div>
    </div>
    <div class="item">
      <div class="img-wrapper">
        <img src="~assets/img/profile/vip.svg" alt="">
      </div>
      <div >
        <span>会员卡</span>
      </div>
    </div>
  </div>
  <div class="cart">
    <div class="item">
      <div class="img-wrapper">
        <img src="~assets/img/profile/cart.svg" alt="">
      </div>
      <div class="message">
        <span>我的购物车</span>
      </div>
    </div>
    <div class="item">
      <div class="img-wrapper">
        <img src="~assets/img/profile/shopping.svg" alt="">
      </div>
      <div>
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "BaseInfo"
}
</script>

<style scoped>
  .baseInfo{
    display: flex;
    flex-direction: column;
    border-bottom: 10px solid #f2f5f8;
  }
  .item{
    display: flex;
    height: 44px;
    position: relative;
  }
  .item .img-wrapper{
    position: relative;
  }
  .item img{
    height: 22px;
    width: 22px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
  }
  .item>div.img-wrapper{
    width: 40px;
  }
  .item span{
    font-size: 16px;
    font-weight: 550;
    display: inline-block;
    margin-top: 15px;
  }
  .message{
    flex: 1;
    border-bottom: 4px solid #f2f5f8;
  }
</style>