<template>
	<view class="member-header">
		<view style="margin-top: 10rpx;">
			<van-image round width="70rpx" height="70rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		</view>
		<view class="userinfo">
			<view class="name-title">
				<text class="name">小智</text>
				<van-tag :color="color">
					<view class="attestation">
						<text>已认证</text>
						<van-icon name="arrow" />
					</view>
				</van-tag>
			</view>
			<view class="explain"><text>做最好的菜篮子搬运工！</text></view>
		</view>
		<slot></slot>
	</view>
</template>

<script>
export default {
	components: {},
	props: {
		color: String
	},
	data() {
		return {}
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.member-header {
	width: 690rpx;
	display: flex;
	align-items: center;
	.userinfo {
		padding-left: 20rpx;
		flex: 1;
		.name-title {
			display: flex;
			align-items: center;
		}
		.name {
			font-weight: bold;
			margin-right: 15rpx;
			font-size: 30rpx;
		}
		.attestation {
			display: flex;
			align-items: center;
		}
		.explain {
			font-size: 24rpx;
		}
	}
}
</style>
