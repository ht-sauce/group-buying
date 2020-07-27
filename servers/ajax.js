const toast = ({
	title = "",
	icon = "success"
}) => {
	uni.showToast({
		title: title,
		icon: icon,
		duration: 2500,
		mask: false,
	});
}
// 请求函数封装
const request = ({
	prefix = '', // 接口地址前缀
	url = '',
	data = {},
	header = {
		'content-type': 'application/json' // 默认值
	},
	method = "GET",
	timeout = 30000, // 接口超时时间
	dataType,
	loading = true, // 是否加载提示，传入字符提示信息变化
	error = true, // 错误信息提示，传入字符提示信息变化
	success = false, // 正确信息提示，传入字符提示信息变化
}) => {
	url = prefix + url // 前缀处理
	method = method.toUpperCase()

	loading && uni.showLoading({
		title: loading === true ? '加载中……' : loading,
		mask: true
	})
	return new Promise((resolve, reject) => {
		const task = uni.request({
			url,
			method,
			data,
			dataType,
			header,
			success(res) {
				const data = res.data
				if (data.code === 200) {
					success && toast({
						title: success === true ? "成功" : success
					})
					loading && uni.hideLoading()
					resolve(data)
				} else {
					const errMsg = data.msg
					
					error && toast({
						title: error === true ? errMsg ? errMsg : "失败" : error,
						icon: 'none'
					})
					
					loading && uni.hideLoading()
					reject(res)
				}
			},
			fail(err) {
				const data = res.data
				const errMsg = data.msg
				
				error && toast({
					title: error === true ? errMsg ? errMsg : "失败" : error,
					icon: 'none'
				})
				
				loading && uni.hideLoading()
				reject(err)
			}
		});
	})
}

export default request;
