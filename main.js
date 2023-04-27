import App from './App'

// #ifndef VUE3
import Vue from 'vue'
console.log("vue2");
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import uView from './uni_modules/vk-uview-ui'

export function createApp() {
  const app = createSSRApp(App)
	app.use(uView)
  return {
    app
  }
}
// #endif