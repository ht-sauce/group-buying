import request from "./ajax.js"

// 前置数据预处理
const ajax = (options) => {
	return request({prefix:"https://test.cnbecs.com:9201", ...options})
}
export default {
	// 登录
	login: options => ajax({url: "/authentication/wx", method:"POST", ...options}),
	// 登出
	outLogin: options => ajax({url: "/authentication/logout", method:"POST", ...options}),
	// 群接口
	group: {
		// 新建群
		add: (options) => ajax({url: "/groupInfo/insert", method:"POST", ...options})
	},
	groupBuy: {
		// 发布团购活动
		add: (options = {}) => ajax({url: "/activity/insert", method:"POST", ...options})
	}
}