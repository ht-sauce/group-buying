import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
 // 多模块存储
const modules = {};

const state = {
	miniProgram: uni.getAccountInfoSync().miniProgram,
	// 导航栏距离顶部高度
	sys: {
		defaultTopHeight: 40,
		statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
	},
	code: "", // 获取解密code值
	// 登录状态数据
	login: { 
		show: true, //是否展示登录弹窗
		userInfo: {}, // 登录之后的授权信息
		openid: ""
	},
	// 订单状态
	orderType: {
		1: '发货处理', // 只作用于发货处理页面
		2: '待发货',
		3: '待处理',
		4: '已发货',
		5: '已取消',
		6: '已失效',
	},
	txKey: 'CRUBZ-TQIYS-7CBON-64XHB-IVZD7-F3BSU', // 腾讯key值
};

const mutations = {
	// 数据统一修改，避免多操作函数情况，缺陷：无法精细化操作变量，操作方式类似微信小程序操作
	set_data(state, data) {
		for (let key in data) {
			state[key] = data[key];
		}
	}
};

export default new Vuex.Store({
	state,
	mutations,
	modules,
	plugins: [ // 对vuex数据持久化存储，避免独立操作loaclstorege
		createPersistedState({
			storage: {
				getItem: key => uni.getStorageSync(key),
				setItem: (key, value) => uni.setStorageSync(key, value),
				removeItem: key => uni.removeStorageSync(key)
			}
		})
	],
})
