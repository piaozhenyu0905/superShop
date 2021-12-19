<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-item></cart-bottom-item>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import {mapGetters} from 'vuex'
import CartList from "@/views/cart/childComps/CartList";
import CartBottomItem from "@/views/cart/childComps/CartBottomItem";
export default {
  name: "Cart",
  components:{
    CartBottomItem,
    NavBar,
    CartList
  },
  computed:{
    ...mapGetters(['cartLength'])
  }

}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar{
  background-color: var(--color-tint);
  color: white;
}
</style>
