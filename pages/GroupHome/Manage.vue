<template>
	<view class="manage">
		<view class="row-but">
			<view @click="jumpPage(1)" class="button-man" style="background: #F95B44;">
				<image src="../../static/pages/icon-users.png"></image>
				<text>成员管理</text>
			</view>
			<view @click="jumpPage(2)" class="button-man" style="background: #01B18A;">
				<image src="../../static/pages/icon-orders.png"></image>
				<text>订单管理</text>
			</view>
		</view>
		<view class="row-but">
			<view @click="jumpPage(3)" class="button-man" style="background: #53689C;">
				<image src="../../static/pages/icon-address.png"></image>
				<text>取货点管理</text>
			</view>
			<view @click="jumpPage(4)" class="button-man" style="background: #FDBB3C;">
				<image src="../../static/pages/icon-actives.png"></image>
				<text>发布活动</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		jumpPage(type) {
			switch (type) {
				case 1:
					uni.navigateTo({
						url: '/pages/MemberManage/MemberManage'
					});
					break;
				case 2:
					uni.navigateTo({
						url: '/pages/ActiverManagement/ActiverManagement'
					});
					break;
				case 3:
					uni.navigateTo({
						url: '/pages/PickUpPoint/PickUpPoint'
					});
					break;
				case 4:
					uni.switchTab({
						url: '/pages/release/release'
					});
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.manage {
	margin-top: 20rpx;
	padding: 0 30rpx;
	.row-but {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		.button-man {
			width: 280rpx;
			height: 100rpx;
			border-radius: 20rpx;
			color: #fff;
			font-weight: bold;
			display: flex;
			justify-content: center;
			align-items: center;
			line-height: 80rpx;
			> image {
				width: 60rpx;
				height: 60rpx;
				margin-right: 5rpx;
				margin-left: -20rpx;
			}
		}
	}
}
</style>
