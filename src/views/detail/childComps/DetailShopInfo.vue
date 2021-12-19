<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="title">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells| sellCountFilter}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    sellCountFilter:function (value){
      if(value<10000) return value;
      return (value/10000).toFixed(1)+'万'
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.shop-info{
  padding:25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shop-top{
  height: 45px;
  line-height: 45px;
  display: flex;
}
.shop-top img{
    border-radius: 50%;
    height: 45px;
    line-height: 45px;
    border: 1px solid rgba(0,0,0,.1);
    vertical-align: center;
}
.shop-top span{
  margin-left: 10px;
}
.shop-middle{
  display: flex;
  margin-top: 15px;
  align-items: center;
}
.shop-middle-item{
  flex: 1;
}
.shop-middle-left{
  display: flex;
  justify-content: space-around;
  border-right: 1px rgba(0,0,0,.1) solid;
}
.shop-middle-left .info-sells{

}
.info-sells .sells-count{
  font-size: 18px;
}
.info-goods .goods-count{
  text-align: center;
  font-size: 18px;
}
.sells-text,.goods-text{
  margin-top: 10px;
  font-size: 13px;
}
.shop-middle-right{
    font-size: 13px;
    color: #333333;
}
.shop-middle-right table{
  margin-left: 30px;
  width: 120px;
}
table td{
  padding: 5px 0;
}

.shop-bottom{
  margin-top: 15px;
  text-align: center;
  border-radius: 10px;
}
.shop-bottom .enter-shop{
    margin:auto;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    line-height: 30px;
    border-radius: 10px;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right .score-better {
  color: #f13e3a;
}
.shop-middle-right .better span {
  background-color: #5ea732;
  color: #fff;
}
.shop-middle-right .better-more span {
  background-color: #f13e3a;
}



</style>
