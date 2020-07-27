import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import api from './servers/index.js'
import util from './common/utils/index.js'

Vue.prototype.$store = store //vuex数据
Vue.prototype.$api = api // 所有接口地址信息
Vue.prototype.$util = util // 工具类函数

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
