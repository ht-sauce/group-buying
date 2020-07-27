import vuex from "@/store/index.js"
import Utils from "./index.js"
// 检测code登录状态
const checkSession = () => {
	return new Promise((resolve, reject) => {
		uni.checkSession({
			success: () => {
				resolve(vuex.state.code)
			},
			fail: () => {
				reject(false)
			}
		})
	});
}
// 获取code，用以返回code
const obtainCode = () => {
	return new Promise((resolve, reject) => {
		uni.login({
			success: code => {
				vuex.commit('set_data', {
					code: code.code
				});
				resolve(code.code)
			},
			fail() {
				reject(fasle)
			}
		});
	})
}
// 检测code值是否有效，并且最终返回code值
const testCode = async () => {
	let [err, code] = await Utils.to(checkSession())

	if (!code) {
		[err, code] = await Utils.to(obtainCode())
	}
	if (!code) {
		uni.showToast({
			title: '登录失效，请尝试重新授权',
			duration: 2500,
			mask: false,
		})
		return false
	}
	return code
}
// 自动登录
const autoLogin = async () => {
	const isAuth = () => {
		return new Promise((resolve, reject) => {
			uni.getSetting({
				success: (e) => {
					const authSetting = e.authSetting
					if (authSetting["scope.userInfo"]) {
						uni.getUserInfo({
							success: (user) => {
								resolve(user)
							},
							fail: () => {
								reject(false)
							}
						})
					} else {
						reject(false)
					}
				},
				fail: () => {
					reject(false)
				}
			})
		})
	}
	const [err, authInfo] = await Utils.to(isAuth())
	const code = await testCode()

	// 如果获取code值失败进入弹窗登录流程
	if (code && authInfo) {
		console.log("自动登录流程")
		// 正常授权流程
		vuex.commit('set_data', {
			login: {
				show: false, //是否展示登录弹窗
				userInfo: authInfo.userInfo, // 登录之后的授权信息
				openid: "daihaitian"
			}
		});
	}
}
export default {
	testCode,
	autoLogin
}
