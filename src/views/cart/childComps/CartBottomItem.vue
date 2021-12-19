<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isSelectAll" @click.native="selectedAll"></check-button>
      <span>全选</span>
    </div>

    <div class="price">合计: {{totalPrice}}</div>

    <div class="calculate" @click="calcClick">计算:({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton";
import {mapGetters} from 'vuex'
export default {
  name: "CartBottomItem",
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      let now_price=this.cartList.filter(item=>item.checked)
      return now_price===[]?'￥'+0:'￥'+now_price.reduce((pre_price,item)=>{
        return pre_price+item.count*item.price
      },0)
    },
    checkLength(){
      let num=0;
      this.cartList.forEach(item=>{
        if(item.checked===true)
          num++
      })
      return num
    },
    isSelectAll(){
      return this.cartList.length!==0 && (!this.cartList.filter(item=>!item.checked).length)
    }
  },
  methods:{
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商品')
      }
    },
    selectedAll(){
        if(this.isSelectAll){
          this.cartList.forEach(item=>{
            if(item.checked) item.checked=false
          })
        }
        else{
          this.cartList.forEach(item=>{
            if(!item.checked) item.checked=true
          })
        }
    }

  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  position: relative;
  background-color: #5e87af;
  bottom: 0;
  display: flex;
  align-items: center;
  line-height: 40px;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;
  background-color: #5e87af;
}
.check-button{
  width: 20px;
  height: 20px;
  margin-right:5px ;
  line-height: 20px;
}
.price{
  flex: 1;
  text-align: center;
  background-color: #ffb805;
}
.calculate{
  width: 80px;
  background-color: #ff3c00;
  text-align: center;
}
</style>