import App from './App'
import uView from './uni_modules/vk-uview-ui';
// // 将$U/$A助手库挂载原型
// Vue.prototype.$AppContext=$AppContext
// Vue.prototype.AppContext = AppContext

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  // 使用 uView UI
  app.use(uView)
  return {
    app
  }
}
// #endif