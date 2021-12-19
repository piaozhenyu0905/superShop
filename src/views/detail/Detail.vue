<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" ref="nav" @navbarClick="jumpTo"></detail-nav-bar>
    <scroll class="scroll-content" ref="scroll"
            @scroll="contentscroll"
            :pull-up-load="true"
            :probe-type="3">
      <detail-swiper :top-images="topImages" ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @AllimageLoad="AllimageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params-info"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment-info"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend-info"></goods-list>
    </scroll>
    <back-top v-show="isShowbacktop" @click.native="backClick"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
import detailNavBar from "@/views/detail/childComps/detailNavBar";
import detailSwiper from "@/views/detail/childComps/detailSwiper";
import {getDetail,Goods,Shop,Goodsparam,getRecommend} from "@/network/detail";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

import Scroll from "@/components/common/scroll/Scroll";
import {debounce} from "@/common/utils";


export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailBottomBar
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      isShowbacktop:false,
      FourOffsetTop:[],
      currentIndex:0
    }
  },
  created() {
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      this.topImages=res.result.itemInfo.topImages
      const data=res.result
      // 3.获取商品信息
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      // 4.创建店铺信息对象
      this.shop=new Shop(data.shopInfo)
      //  5.获取商品详细信息
      this.detailInfo=data.detailInfo
      // 6.获取参数信息
      this.paramInfo=new Goodsparam(data.itemParams.info,data.itemParams.rule)
      // 7.取出评论信息
      if(data.rate.cRate!==0){
        this.commentInfo=data.rate.list[0]
      }
      // 8.请求推荐数据
      getRecommend().then(res=>{
        this.recommends=res.data.list
      })
      //定义offsetTop的获取函数
      this.getTopY = ()=>{
          this.FourOffsetTop.push(0)
          this.FourOffsetTop.push(this.$refs["params-info"].$el.offsetTop)
          this.FourOffsetTop.push(this.$refs["comment-info"].$el.offsetTop)
          this.FourOffsetTop.push(this.$refs["recommend-info"].$el.offsetTop)
      }
    })
  },
  mounted() {
    let refresh_scroll=debounce(this.$refs.scroll.refresh,100)
    this.Itemrefresh = ()=>{
      refresh_scroll()
    }
    this.$bus.$on('itemImgLoad',this.Itemrefresh)

  },
  destroyed() {
    this.$bus.$off('itemImgLoad',this.Itemrefresh)
  },
  methods:{
    AllimageLoad(){
      this.$refs.scroll.refresh()
      //获取图片后，记录各个关键位置的offsetTop
      this.getTopY()
    },
    contentscroll(position){
      //1.判断backtop是否显示
      this.isShowbacktop = position.y<-1000
      //2.判断联动
      let positionY=-position.y
      let length=this.FourOffsetTop.length
      for(let i=0;i<length;i++){
        if(this.currentIndex!==i && ((positionY>=this.FourOffsetTop[i] && positionY<this.FourOffsetTop[i+1] && i!==length-1)||
            (i===length-1 && positionY>=this.FourOffsetTop[length-1])) ){
          this.currentIndex=i
          this.$refs.nav.currentIndex=i
        }
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    jumpTo(index){
        this.$refs.scroll.scrollTo(0,-this.FourOffsetTop[index],200)
    },
    addCart(){  //添加到购物车
      // 1.获取购物车展示的信息
      const product={}
      product.image=this.topImages[0]
      product.title=this.goods.title
      product.desc=this.goods.desc
      product.price=this.goods.realPrice
      product.iid=this.iid
      product.checked=true
      // 2.将商品添加到购物车
      this.$store.dispatch('addCartList',product).then((value)=>{
            this.$toast.show(value)
      })
    }

  },
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9999999;
    background-color: #fff;
  }
  .scroll-content{
    height: calc(100vh - 44px);
    overflow: hidden;
    position: relative;
  }
  .detail-nav{
    position: relative;
    z-index: 999999;
  }
</style>
