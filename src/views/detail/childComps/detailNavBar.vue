<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template v-slot:center>
        <div class="nav-detail">
          <div v-for="(item,index) in titles" class="title" :class="{active:index===currentIndex}" @click="itemClick(index)">{{item}}</div>
        </div>
      </template>
      <template v-slot:left>
        <div class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" class="back" >
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('navbarClick',index)
    },
    backClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.nav-detail{
  display: flex;
  justify-content: space-around;

}
.back{
  text-align: center;
  position: relative;
  font-size: 12px;
}
.back img{
  margin-top: 12px;
}
.active{
  color: var(--color-high-text);
}
</style>