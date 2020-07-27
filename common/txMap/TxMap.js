// 腾讯sdk函数封装,用以简化页面书写,和函数回调问题
import TxSdk from './qqmap-wx-jssdk.min.js'
import vuex from '@/store/index.js'

const map = new class TxMap {
	constructor() {
		this.TxMap = new TxSdk({
			key: vuex.state.txKey
		});
	}
	// 搜索方法封装
	search({
		keyword,
		location,
		page_size = 20
	}) {
		uni.showLoading({
			title: '加载中……',
			mask: true
		})
		return new Promise((resolve, reject) => {
			this.TxMap.search({
				keyword: keyword,
				location: location,
				page_size: page_size,
				success(res) {
					uni.hideLoading()
					if (res.status === 0) {
						resolve(res.data)
					} else {
						reject(res)
					}
				},
				fail(fail) {
					uni.hideLoading()
					reject(fail)
				}
			})
		})
	}
	// 距离计算,如果是直线距离计算经过源码查看，不需要经过接口调用
	calculateDistance({
		mode = 'straight',
		from,
		to
	}) {
		uni.showLoading({
			title: '加载中……',
			mask: true
		})
		return new Promise((resolve, reject) => {
			this.TxMap.calculateDistance({
				mode,
				from,
				to,
				success(res) {
					uni.hideLoading()
					if (res.status === 0) {
						resolve(res.result)
					} else {
						reject(res)
					}
				},
				fail(fail) {
					uni.hideLoading()
					console.log(fail)
					reject(fail)
				}
			})
		})
	}
}
export default map