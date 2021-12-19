<template>
  <div class="back-top" @touchstart="touchStart" @touchmove="touchMove" ref="backtop" >
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data(){
    return{
        swiperStyle:null,
        x:0,
        y:0
    }
  },
  mounted() {
    this.swiperStyle=this.$refs.backtop.style
  },
  methods:{
    touchStart(event){
      event.cancelBubble=true
    },
    touchMove(event){
      event.cancelBubble=true
      this.x=parseInt(event.touches[0].pageX)
      this.y=parseInt(event.touches[0].pageY)
      this.setTransform()
    },
    setTransform(){
      let widthAll=window.innerWidth
      let HeightAll=window.innerHeight
      let offheight=this.$refs.backtop.offsetHeight
      let offwidth=this.$refs.backtop.offsetWidth
      this.swiperStyle.bottom=HeightAll-this.y-offheight/2 +'px'
      this.swiperStyle.right=widthAll-this.x-offwidth/2+'px'
    },
  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  bottom:55px;
  right: 10px;
  z-index: 9999999;
}
.back-top img{
  height: 43px;
  width: 43px;
  vertical-align: top;
}
</style>