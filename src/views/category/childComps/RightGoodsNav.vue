<template>
  <div class="right-goods-nav"></div>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "RightGoodsNav",
  components:{
    GoodsList
  },
  props:{
    goods_all:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>