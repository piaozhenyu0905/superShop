export default {
    addCartList(context,payLoad){
       return new Promise((resolve,reject)=>{
           let oldproduct=null
           oldproduct =context.state.cartList.find(item=>{
               return item.iid===payLoad.iid
           })
           if(oldproduct){
               context.commit('addCartNum',oldproduct)
               resolve('当前商品数量加一')
           }else{
               payLoad.count=1
               context.commit('addNewCart',payLoad)
               resolve('添加新的商品')
           }
       })
    }
}