<!-- 选择和创建小区 -->
<template>
	<GlobalPage title="选择小区">
		<view class="select-community">
			<view class="address-list">
				<template v-for="(item, index) in addressList">
					<view class="address-li" :key="index">
						<view><text>江苏省南京市云密城江苏省南京市云密城江苏省南京市云密城</text></view>
						<van-checkbox />
					</view>
				</template>
			</view>
			<view class="footer">
				<BecsButton background="#FF6120" @click.native="onAddAddress">
					<view class="footer-info">
						<view class="footer-icon"><van-icon name="plus" /></view>
						<text>新增收货地址</text>
					</view>
				</BecsButton>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	data() {
		return {
			addressList: [1, 2, 3]
		}
	},
	onShow() {
		uni.$on('map', this.callAddress)
	},
	methods: {
		// 接收到返回的地址信息
		callAddress(address) {
			console.log(address)
		},
		// 跳转新增收货地址页面
		onAddAddress() {
			uni.navigateTo({
				url: '/pages/AddAddress/AddAddress'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.select-community {
}
.address-list {
	width: 700rpx;
	margin-left: 25rpx;
	box-shadow: $g-shadow;
	background: #fff;
	margin-top: 15rpx;
	.address-li {
		color: #4f4f4f;
		padding: 10rpx 15rpx;
		display: flex;
		align-items: center;
	}
}
.footer {
	.footer-info {
		color: #fff;
		display: flex;
		align-items: center;
	}
	.footer-icon {
		margin: 5rpx 15rpx 0 0;
		font-size: 36rpx;
	}
}
</style>
