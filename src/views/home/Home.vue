<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control ref="reTabControl"
                 class="reTabControl"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 v-show="isTabControlShow">
    </tab-control>
    <scroll  class="scroll-wrapper"
             @scroll="contentscroll"
             ref="scroll"
             :pull-up-load="true"
             :probe-type="3"
             @pullingUp="pullUpLoad">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top  @click.native="backClick"
               v-show="isShowbacktop">
    </back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";
import FeatureView from "@/views/home/childComps/FeatureView";
import tabControl from "@/components/content/tabControl/tabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import {getHomeMultidata,getHomeGoods} from "@/network/home";
import {debounce} from "@/common/utils";

export default {
  name: "home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    tabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isShowbacktop:false,
        tabOffsetTop:0,
        isTabControlShow:false,
        leaveY:0
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
     let refresh_scroll=debounce(this.$refs.scroll.refresh,10)
      this.refresh = ()=>{
        refresh_scroll()
      }
    this.$bus.$on('ItemImageLoad',this.refresh)
    this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.leaveY,0)
  },
  deactivated() {
    this.leaveY=this.$refs.scroll.getLeaveY()

    this.$bus.$off('ItemImageLoad',this.refresh)
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page =this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page+=1
      })
    },

    tabClick(index){
      switch (index){
        case 0:this.currentType='pop';break;
        case 1:this.currentType='new';break;
        case 2:this.currentType='sell';break;
      }
      this.$refs.tabControl.currentIndex=index
      this.$refs.reTabControl.currentIndex=index
    },
    contentscroll(position){
      //1.判断backtop是否显示
      this.isShowbacktop = position.y<-1000
      // 2.判断是否吸顶
      this.isTabControlShow = (-position.y >= this.tabOffsetTop)
    },
    swiperImageLoad(){
      // 重新计算tabControl的offsetTop
      this.$refs.scroll.refresh()
      this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
    },
    pullUpLoad(){  // load more goods
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
  }
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    z-index: 999;
  }
  .scroll-wrapper{
    position: absolute;
    /*height: calc(100% - 93px);*/
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .reTabControl{
    position: absolute;
    top:44px;
    left:0;
    right: 0;
    z-index:9999;
  }
</style>
