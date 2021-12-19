import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const home=()=>import('../views/home/Home') //路由的懒加载，即只有使用时才加载
const category=()=>import('../views/category/Category')
const cart=()=>import('../views/cart/Cart')
const profile=()=>import('../views/profile/Profile')
const detail=()=>import('../views/detail/Detail')

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home,
    meta:{
      title:"home"
    },
  },
  {
    path:'/category',
    component:category,
    meta:{
      title:"category"
    }
  },
  {
    path:'/detail/:iid',
    component:detail,
    meta:{
      title:"detail"
    }
  },
  {
    path:'/cart',
    component:cart,
    meta:{
      title:"cart"
    }
  },
  {
    path:'/profile',
    component:profile,
    meta:{
      title:"profile"
    }
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  window.document.title=to.matched[0].meta.title
  next()
})
export default router
