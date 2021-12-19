<template>
  <swiper ref="homeSwiper">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'
export default {
  name: "HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      default(){
        return []
      }
    }
  },
  data(){
    return{
      loadImages:0
    }
  },
  methods:{
    imgLoad(){
      if(++this.loadImages===this.banners.length){ //所有图片加载完后开始运行轮播图
        this.loadImages-=this.banners.length
        this.$refs.homeSwiper.handleDom(); //开始轮播图
        this.$refs.homeSwiper.startTimer();

        this.$emit('swiperImageLoad')
      }
    }
  }

}
</script>

<style scoped>

</style>