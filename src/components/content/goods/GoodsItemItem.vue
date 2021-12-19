<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoad">
    <div class="text-item">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItemItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('ItemImageLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
.goods-item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}

.text-item{
  position: absolute;
  font-size: 12px;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;

}

.text-item p{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.text-item .price{
  color:var(--color-high-text)
}
.text-item .collect{
  position: relative;
  margin-left: 20px;
}
.text-item .collect::before{
  content: '';
  position: absolute;
  /*display: block;*/
  width: 14px;
  height: 14px;
  top:-1px;
  left:-14px;
  right:0;
  /*背景图片被缩短比例为14px:14px*/
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>