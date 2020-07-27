import vuex from "@/store/index.js"

export default {
	// 检测登录
	testLogin() {
		const login = vuex.state.login
		const openid = login.openid
		// 未登录唤起登录弹窗
		if(!openid) {
			console.log("未登录")
			vuex.commit('set_data', {
				login: {
					show: true
				}
			});
			uni.navigateTo({
				url: "/pages/BecsLogin/BecsLogin"
			})
			return true
		} else {
			return false
		}
	},
	// to.js,解决await无法捕获reject的处理方式
	to(promise) {
	   return promise.then(data => {
	      return [null, data];
	   })
	   .catch(err => [err]);
	},
	// 对提示信息提前进行封装，简化代码操作
	showToast({
		title = '网络环境异常',
		icon = 'none',
		duration = 2500,
		mask = false,
		position = 'center',
		image
	}) {
		uni.showToast({
			title,
			icon,
			duration,
			mask,
			position,
			image
		});
	}
}