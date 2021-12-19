<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  data(){
    return {
      bscroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:3
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
    mounted() {
    this.bscroll=new BScroll(this.$refs.scroll,{
      prototype:this.prototype,
      pullUpLoad:this.pullUpLoad,
      observeDOM:true,
      click:true
    })

      this.bscroll.on('scroll',(position)=>{
        // console.log(position)
        this.$emit('scroll',position)
      })
      this.pullUpLoad && this.bscroll.on('pullingUp',()=>{
        // console.log('上拉加载更多')
        this.$emit('pullingUp')
      })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.bscroll && this.bscroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.bscroll && this.bscroll.finishPullUp()
    },
    refresh(){
      this.bscroll && this.bscroll.refresh()
    },
    getLeaveY(){
      return this.bscroll? this.bscroll.y:0
    }
  }
}
</script>

<style scoped>

</style>