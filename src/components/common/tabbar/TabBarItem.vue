<template>
 <div class="tab-bar-item" @click="itemclick">
<!--   最好像下面一样用外部的div包装slot，这样可以在外部div中设置一些属性或动态属性，以防止slot被替换后导致某些属性丢失-->
   <div v-if="!isActive"><slot name="item-icon"></slot></div>
   <div v-else><slot name="item-icon-active"></slot></div>
   <div :style="activeSytle">
     <slot name="item-text"></slot>
   </div>
 </div>
<!--   最好不要把动态属性绑定到slot上(如下面注释部分的代码)，因为slot会被替换,导致动态绑定的class消失无效:-->
<!--   <slot name="item-text" :class="{active:isActive}"></slot>-->

</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1 //字符串的indexof查找，有则返回下标，无返回-1
    },
    activeSytle(){
      return this.isActive?{color: this.activeColor}:{}
    }
  },
  methods:{
    itemclick(){
      this.$router.push(this.path)
    }
  }

}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size:14px
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>
