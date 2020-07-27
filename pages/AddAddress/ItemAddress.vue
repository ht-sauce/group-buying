<template>
	<view class="item-address">
		<view class="address-input">
			<view class="search-icon"><van-icon @click="selectAddress" size="45rpx" name="search" color="#919191" /></view>
			<input class="search-input" @blur="selectAddress" placeholder="搜索小区名称,无需填写门牌号" />
		</view>
		<view class="address-list">
			<template v-for="(item, index) in addressList">
				<view class="address-li" :key="index" @click="feedback(item, index)">
					<view class="info">
						<view class="address-title"><text>{{ item.address }}</text></view>
						<view class="addres-info">
							<text class="distance">{{ formatDistance(item.distance) }}</text>
							<view class="line"></view>
							<text class="area">{{ item.ad_info.district }}</text>
						</view>
					</view>
					<view class="img" v-if="item.check">
						<image src="/static/pages/icon-ok.png"></image>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import QQMapWX from '@/common/txMap/TxMap.js'
export default {
	props: {
		list: Array,
	},
	watch: {
		list: {
			deep: true,
			handler(list) {
				const newList = []
				list.forEach(async val => {
					val.distance = await this.calculateDistance(val.location)
					val.check = false
					newList.push(val)
				})
				this.addressList = newList
			}
		}
	},
	data() {
		return {
			addressList: [],
			oldCheck: -1, // 当前选中的数组id
		}
	},
	methods: {
		// 选择地址反馈信息
		feedback(item, index) {
			this.oldCheck !== -1  && (this.addressList[this.oldCheck].check = false) // 关闭之前状态
			this.addressList[index].check = true // 修改当前状态
			this.oldCheck = index // 标记当前状态
			// 点击数组反馈
			this.$emit('feedback', item)
		},
		// 查询地址
		selectAddress(e) {
			const value = e.detail.value
			this.$emit('change', value)
		},
		// 距离计算
		async calculateDistance(location) {
			const [, currentLocation] = await uni.getLocation({
				type: 'gcj02'
			})
			
			const { latitude, longitude } = currentLocation
			const { lat, lng } = location
			const { elements } = await QQMapWX.calculateDistance({
				form: { latitude, longitude },
				to: [{
					latitude: lat,
					longitude: lng
				}]
			})
			const distance = elements[0].distance
			
			return distance;
		},
		// 距离单位格式化
		formatDistance(distance) {
			return distance >= 1000 ? (distance/1000).toFixed(1) + '千米' : distance + '米'
		}
	}
}
</script>

<style lang="scss" scoped>
.item-address {
	position: fixed;
	height: calc(100vh - 300px);
	background: #fff;
	border-top-right-radius: 12rpx;
	border-top-left-radius: 12rpx;
	box-shadow: rgba(0, 0, 0, 0.28) 0 0 4rpx;
	padding: 30rpx;
	overflow-x: hidden;
	.address-input {
		display: flex;
		background: #e6e6e6;
		width: 690rpx;
		display: flex;
		align-items: center;
		height: 60rpx;
		border-radius: 8rpx;
		.search-icon {
			padding: 0 20rpx 0 10rpx;
			margin-top: 8rpx;
		}
		.search-input {
			flex: 1;
			height: 100%;
			line-height: 60rpx;
		}
	}
}
.address-list {
	padding-bottom: 250rpx;
	.address-li {
		padding: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.info {
		flex: 1;
	}
	.address-title {
		font-size: 24rpx;
		font-weight: bold;
		padding: 5rpx 0;
	}
	.addres-info {
		padding: 5rpx 0;
		display: flex;
		align-items: center;
		font-size: 18rpx;
		color: #a2a2a2;
		.line {
			border-left: 1px #a2a2a2 solid;
			height: 25rpx;
			margin: 0 5rpx;
		}
	}
	.img {
		> image {
			width: 50rpx;
			height: 50rpx;
		}
	}
}
</style>
