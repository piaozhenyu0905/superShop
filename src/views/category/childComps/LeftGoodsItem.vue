<template>
  <div class="left-goods-item" :class="{active:isSelected}" >
      <span class="item">{{categoryItem}}</span>
  </div>
</template>

<script>
export default {
  name: "LeftGoodsItem",
  data(){
    return {

    }
  },
  props:{
    categoryItem:{
      type:String,
      default(){
        return ''
      }
    },
    isSelected:{
      type:Boolean,
      default() {
        return false
      }
    }
  },
  methods:{

  }
}
</script>

<style scoped>
  .left-goods-item{
    font-size: 15px;
    height: 44px;
    width: 88px;
    text-align: center;
    background-color: #f2f5f8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #f2f5f8;
  }
  .active{
    color:var(--color-tint);
    background-color: #fff;
    border-left: 2px solid var(--color-high-text);
  }

</style>