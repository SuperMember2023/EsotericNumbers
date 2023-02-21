import App from './App'
import uView from './uni_modules/vk-uview-ui';



// // 将$U/$A助手库挂载原型
// Vue.prototype.$AppContext=$AppContext
// Vue.prototype.AppContext = AppContext

// #ifndef VUE3
import Vue from 'vue'
// 引入全局存储
import store from '@/js/store';
// 网络状态监听
uni.getNetworkType({
	success: res => {
		store.dispatch('networkStateChange', res.networkType);
	}
});
uni.onNetworkStatusChange(function (res) {
	store.dispatch('networkStateChange', res.networkType);
});

Vue.config.productionTip = false
// 挂载全局自定义方法
Vue.prototype.$mStore = store;

if (store.getters.hasLogin){
	
}

App.mpType = 'app'
const app = new Vue({
    ...App
	store,
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