<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="swiper">
      <slot></slot>
    </div>
    <div class="right" @click="next">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
    <div class="left" @click="previous">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item,index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index">
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  props:{
    interval:{
      type:Number,
      default:3000
    },
    animDuration:{
      type:Number,
      default:300
    },
    moveRatio:{
      type:Number,
      default:0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      slideCount:4,
      totalWidth:0,
      swiperStyle:{}, //swiper的样式
      currentIndex:1, //当前红点的index
      scrolling:false //当前是否滚动
    }
  },
  methods:{
    startTimer(){
      this.playTimer=setInterval(()=>{
        this.currentIndex++
        this.scrollContent(-this.currentIndex*this.totalWidth)
      },this.interval)
    },
    stopTimer(){
      clearInterval(this.playTimer)
    },
    handleDom(){ //类似于一个初始化
      // 1.获取要操作的元素
      let swiperEl=this.$refs.swiper
      let slidesEls=swiperEl.getElementsByClassName('slide')

      // 2.保存个数
      this.slideCount=slidesEls.length
      //3.如果大于1个，那么在前后分别添加一个slide
      if(this.slideCount>1){
        let swiperstart=slidesEls[0].cloneNode(true)
        let swiperend=slidesEls[this.slideCount-1].cloneNode(true)
        swiperEl.insertBefore(swiperend,slidesEls[0])
        swiperEl.appendChild(swiperstart)

        this.totalWidth=swiperEl.offsetWidth
        this.swiperStyle=swiperEl.style
      }
      this.setTransform(-this.totalWidth)
    },

    scrollContent(currentPosition){
      this.scrolling=true
      this.swiperStyle.transition='transform '+this.animDuration+'ms'

      this.setTransform(currentPosition)

      //判断移动到的位置
      this.checkPosition()

      this.scrolling=false

    },
    setTransform(position){
      this.swiperStyle.transform=`translate3d(${position}px,0,0)`
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`
    },

    checkPosition(){
      setTimeout(()=>{
      this.swiperStyle.transition='transform 0ms'
      if(this.currentIndex>=this.slideCount+1){
        this.currentIndex=1
        this.setTransform(-this.currentIndex*this.totalWidth)
      }
      else if(this.currentIndex<=0){
        this.currentIndex=this.slideCount
        this.setTransform(-this.currentIndex*this.totalWidth)
      }
      // 2.结束移动后的回调
      this.$emit('transitionEnd', this.currentIndex-1); //暂时没用
    }, this.animDuration)
    },

    touchStart(event){
      if(this.scrolling) return;
      this.stopTimer(this.playTimer)
      this.scrollX=event.touches[0].pageX //记录开始的位置
    },
    touchMove(event){
      // 1.计算出用户拖动的距离
      this.currentX = event.touches[0].pageX;
      this.distance = this.currentX - this.scrollX;

      this.swiperStyle.transition='transform 0ms'
      this.setTransform(-this.currentIndex*this.totalWidth+this.distance)

    },
    touchEnd(){
      if(Math.abs(this.distance)===0)return
      else if(Math.abs(this.distance)>this.moveRatio*this.totalWidth && this.distance<0){
        this.currentIndex++
      }
      else if(Math.abs(this.distance)>this.moveRatio*this.totalWidth && this.distance>0){
        this.currentIndex--
      }
      this.scrollContent(-this.currentIndex*this.totalWidth)
      this.startTimer()
    },


    previous: function () {
      this.changeItem(-1);
    },

    next: function () {
      this.changeItem(1);
    },

    changeItem: function (num) {
      // 1.移除定时器
      this.stopTimer();

      // 2.修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 3.添加定时器
      this.startTimer();
    }
  }



}
</script>

<style scoped>
  #hy-swiper{
    overflow: hidden;
    position: relative;
  }
  .swiper{
    display: flex;
    will-change: transform
  }
  .indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom:8px
  }
  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
  .left,.right{
    top:50%;
    position: absolute;
    z-index: 10;
    transform: translateY(-50%);
  }
  .left img,.right img{
    vertical-align: bottom;
    height: 26px;
    width: 22px;
  }
  .left{
    left: 0;
  }
  .right{
    right: 0;
  }
</style>