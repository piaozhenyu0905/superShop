<template>
  <div class="goods">
    <goods-item-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-item-item>
  </div>
</template>

<script>
import GoodsItemItem from "@/components/content/goods/GoodsItemItem";
export default {
  name: "GoodsList",
  components: {GoodsItemItem},
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>