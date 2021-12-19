<template>
  <div class="mid-bar">
    <div class="remain son">
      <div class="mid">
        <span class="remain-money">{{remain}}</span>元
      </div>
      <div class="text">
        <span>我的余额</span>
      </div>
    </div>
    <div class="discount son">
      <div class="mid">
        <span class="discount-money">{{discount}}</span>个
      </div>
      <div class="text">
        <span class="text">我的优惠</span>
      </div>
    </div>
    <div class="point son">
      <div class="mid">
        <span class="point-money">{{point}}</span>分
      </div>
      <div class="text">
        <span >我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "midBar",
  data(){
    return{
      remain:'0.00',
      discount:0,
      point:0
    }
  }
}
</script>

<style scoped>
.mid-bar{
  height: 108px;
  border-bottom: 20px solid #f2f5f8;
  display: flex;
  text-align: center;
  position: relative;
}
.son{
  padding-top: 20px;
}
.mid-bar>div{
  flex: 1;
  font-size: 14px;
}
.remain-money,.point-money,.discount-money{
  color: #f13e3a;
  font-size: 24px;
  font-weight: 555;
}
.remain,.discount{
  border-right: 5px solid #f2f5f8;
}
.text{
margin-top: 5px;
}

</style>