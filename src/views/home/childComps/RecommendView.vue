<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-class">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>


.recommend{
    display: flex;
    border-bottom: 8px solid #eee;
    font-size: 12px;
    padding: 10px 0 20px;
}
.recommend-class{
  flex:1;
  text-align: center;

}
.recommend-class img{
  margin-bottom: 10px;
  width: 65px;
  height: 65px;
}
</style>
