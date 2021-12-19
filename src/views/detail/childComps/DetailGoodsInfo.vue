<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key"></div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      // 判断, 所有的图片都加载完了, 那么进行一次回调就可以了.
      if (++this.counter === this.imagesLength) {
        this.$emit('AllimageLoad');
      }
    }
  },
  watch: {
    detailInfo() {
      // 目的获取图片的个数，当真实数据传来时，会调用这个方法
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc {
  padding: 0 15px;
}

.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.info-desc .start{
  float: left;
}
.info-desc .end{
  float: right;
}

.info-desc .start::before{
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    position:absolute;
    top:0;
    background-color: #333;
}
.info-desc .end::after{
  right: 0;
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  position:absolute;
  bottom:0;
  background-color: #333;
}

.info-desc .desc {
  text-indent: 28px;
  padding: 15px 0;
  font-size: 14px;
}

.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  /*font-size: 15px;*/
}

.info-list img {
  width: 100%;
}
</style>
