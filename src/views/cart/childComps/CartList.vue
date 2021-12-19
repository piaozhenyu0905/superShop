<template>
    <scroll class="content" ref="scroll">
      <cart-list-item   v-for="(item,index) in cartList"
                        :item-info="item"
                        :key="index">
      </cart-list-item>
    </scroll>
</template>

<script>
import CartListItem from "@/views/cart/childComps/CartListItem";
import Scroll from "@/components/common/scroll/Scroll";
import {mapGetters} from 'vuex'
export default {
  name: "CartList",
  computed:{

    ...mapGetters(['cartList'])
  },
  components:{
    Scroll,
    CartListItem
  }
}
</script>

<style scoped>
  .content{
    height: calc(100vh - 49px - 44px - 40px);
    overflow: hidden;
  }
</style>