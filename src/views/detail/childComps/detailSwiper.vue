<template>
    <swiper class="swiper-item" ref="detailswiper">
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="" @load="imgLoad">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
  name: "detailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return {
      loadImgCount:0
    }
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    imgLoad(){
      //当所有图片都加载完后，才开始进行初始化
      //为什么还要将loadImgCount还原成0：这是为了防止webpack的热更新机制导致页面不会完全刷新，数据会依旧存在，
      // 如果不还原成0的话，loadImgCount会一直往上加，就不会执行初始化函数了。
      if(++this.loadImgCount === this.topImages.length) {
        this.loadImgCount -= this.topImages.length;
        this.$refs.detailswiper.handleDom();
        this.$refs.detailswiper.startTimer();
      }
    }
  }
}
</script>

<style scoped>
.swiper-item{
  height: 300px;
  /*overflow: hidden;*/
}
</style>