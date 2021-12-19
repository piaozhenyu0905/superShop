<template>
  <div id="category">
    <category-nav-bar></category-nav-bar>
    <scroll class="left-scroll">
      <left-nav-bar></left-nav-bar>
    </scroll>
    <scroll class="right-scroll"
            ref="scroll"
            :pull-up-load="true"
            :probe-type="3"
            @pullingUp="pullUpLoad">
      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>
    <back-top @click.native="backClick"></back-top>
  </div>
</template>

<script>
import categoryNavBar from "@/views/category/childComps/categoryNavBar";
import LeftNavBar from "@/views/category/childComps/LeftNavBar";
import Scroll from "@/components/common/scroll/Scroll";
import RightGoodsNav from "@/views/category/childComps/RightGoodsNav";
import GoodsList from "@/components/content/goods/GoodsList";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import {debounce} from "@/common/utils";

import BackTop from "@/components/content/backtop/BackTop";

export default {
  name: "category",
  components:{
    categoryNavBar,
    LeftNavBar,
    Scroll,
    RightGoodsNav,
    GoodsList,
    BackTop
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      category:['pop','new','sell'], //模拟改变类别的代码
      index:0,//模拟改变类别的代码
      currentIDX:0,
      currentType:'pop'
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.category[this.currentIDX]].list
    }
  },
  activated() {
    let refresh_scroll=debounce(this.$refs.scroll.refresh,10)
    this.refresh = ()=>{
      refresh_scroll()
    }
    this.$bus.$on('ItemImageLoad',this.refresh)
    this.$bus.$on('changeCategory',this.changeCurrentIdx)
  },
  deactivated() {
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
    pullUpLoad(){
      this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    changeCurrentIdx(index){ //模拟改变类别的代码
      if(this.index!==index){
        this.index=index
        this.currentIDX=(this.currentIDX+1)%3
        this.currentType=this.category[this.currentIDX]
        this.$refs.scroll.scrollTo(0,0,0) //换类别就回到顶部
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300)
    }
  }
}
</script>

<style scoped>
  #category{
    position: relative;
  }
  .left-scroll,.right-scroll{
    height: calc(100vh - 49px - 44px);
    overflow: hidden;
  }
  .right-scroll{
    width: calc(100vw - 88px);
    position: absolute;
    top: 44px;
    right: 0;
    margin-top: 5px;
  }
</style>
