<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-div" :class="{active:index===currentIndex}" @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  data(){
      return{
        currentIndex:0
      }
  },
  methods:{
    itemclick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  background-color: #ffffff;
  margin-bottom: 3px;
}
.tab-div{
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-div span{
  padding: 5px 10px;
}
.active{
  color:var(--color-high-text);
}
.active span{
  border-bottom: 3px solid var(--color-high-text);
}
</style>