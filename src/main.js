import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload";
import FastClick from 'fastclick'

import toast from 'components/common/toast/index'

Vue.use(toast)

Vue.use(VueLazyload)

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()

// 解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
