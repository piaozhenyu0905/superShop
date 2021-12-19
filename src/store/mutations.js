export default {
    addCartNum(state,payLoad){
        payLoad.count++
    },
    addNewCart(state,payLoad){
        state.cartList.push(payLoad)
    }
}