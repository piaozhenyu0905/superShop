<template>
  <div class="cartListItem">
    <div class="item-selector" >
      <check-button :is-checked="ItemInfo.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="ItemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{ItemInfo.title}}</div>
      <div class="item-desc">{{ItemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{ItemInfo.price}}</div>
        <div class="item-count">x{{ItemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components:{
    CheckButton
  },
  props:{
    ItemInfo: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  methods:{
    checkClick(){
        this.ItemInfo.checked=!this.ItemInfo.checked
    }
  }
}
</script>

<style scoped>
  .cartListItem{
    width: 100%;
    display: flex;
    /*font-size: 0;*/
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector{
    width: 20px;
    display: flex;
    align-items: center;
  }
  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info{
    flex:1;
    padding: 5px 10px;
    overflow: hidden;
  }
  .item-title{
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc{
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 15px;
    color: #f13e3a;
  }
  .info-bottom{
    font-size: 20px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }
  .item-price{
    color: #ffb805;
  }
</style>