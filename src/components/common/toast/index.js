import Toast from "@/components/common/toast/Toast";

const obj={}
obj.install=function (Vue){
        // 1.创建一个组件构造器
    const toastConstructor=Vue.extend(Toast)
    const toast=new toastConstructor
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast=toast
}
export default obj
