<template>
  <div class="leftNav">
    <left-goods-item v-for="(item,index) in categories_all" :key="index" :category-item="item"
                      @click.native="itemClick(index)" :is-selected="currentIndex===index"></left-goods-item>
  </div>
</template>

<script>
import LeftGoodsItem from "@/views/category/childComps/LeftGoodsItem";
export default {
  name: "LeftNavBar",
  components:{
    LeftGoodsItem
  },
  data(){
    return {
      categories_all:['正在流行','上衣','裤子','裙子','内衣','女鞋','男友','包包','运动','配饰','美妆','个护','家居','家电','电视','手机'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index

      this.$bus.$emit('changeCategory',index)  //模拟改变类别的代码
    }
  }
}
</script>

<style scoped>

</style>