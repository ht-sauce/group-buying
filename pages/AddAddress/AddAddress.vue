<template>
	<GlobalPage :title="title">
		<view class="add-address">
			<view class="sel-map">
				<map
					style="width: 100%; height: 300px;"
					:latitude="map.latitude"
					:longitude="map.longitude"
					:markers="map.markers"
					show-location
				></map>
			</view>
			<ItemAddress @feedback="feedback" @change="addressValue" :list="addressList" />
			<BecsButton @click.native="checkAddress" background="#FF6120"><text>确定</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
import QQMapWX from '@/common/txMap/TxMap.js'
import ItemAddress from './ItemAddress.vue'
export default {
	components: {
		ItemAddress
	},
	data() {
		return {
			title: '新增小区地址',
			// 地图有关的信息
			map: {
				latitude: '',
				longitude: '',
				markers: []
			},
			addressList: [],
			currentAddress: {} // 最终当前选择的地址
		}
	},
	onShow() {
		this.load()
	},
	methods: {
		async load() {
			const [err, location] = await uni.getLocation({
				type: 'gcj02'
			})
			const { latitude, longitude } = location || { latitude: 31.99226, longitude: 118.7787 }
			this.map = {
				latitude: latitude,
				longitude: longitude,
				markers: []
			}
		},
		// 点击选择反馈
		feedback(item) {
			// console.log(item)
			const { lat, lng } = item.location
			this.map.latitude = lat
			this.map.longitude = lng
			// 赋予当前值
			this.currentAddress = item
		},
		// 地址列表返回的输入结果
		async addressValue(key) {
			const [, location] = await uni.getLocation({
				type: 'gcj02'
			})
			const { latitude, longitude } = location

			const list = await QQMapWX.search({
				keyword: key,
				location: `${latitude},${longitude}`
			})

			this.addressList = list

			list.map(val => {
				this.map.markers.push({
					id: Number(val.id),
					latitude: val.location.lat,
					longitude: val.location.lng,
					width: 10,
					height: 10,
					title: val.title
				})
			})
		},
		// 确定地址信息
		checkAddress() {
			// 通过页面通讯方式返回当前选择值
			uni.$emit('map', this.currentAddress)
			// 返回上一页
			uni.navigateBack({
				delta: 1
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.add-address {
	padding-bottom: 120rpx;
}
.sel-map {
}
</style>
