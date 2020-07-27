<template>
	<view class="statistics">
		<view class="small-area">
			<text>服务小区：</text>
			<text>软件谷云密城</text>
		</view>
		<view class="info">
			<view style="flex: 1;">
				<text>这是一段群介绍，这是一段群介绍，这是一段群介绍，这是一段群介绍，这是一段群介绍</text>
			</view>
			<view class="opt-nums">
				<view class="opt-li">
					<view class="num">20</view>
					<view>成员</view>
				</view>
				<view class="opt-li">
					<view class="num">30</view>
					<view>活动</view>
				</view>
				<view class="opt-li">
					<view class="num">1111</view>
					<view>参与人次</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.statistics {
	display: flex;
	flex-flow: column;
	align-items: center;
	.small-area {
		margin-top: 30rpx;
		color: #fff;
		border-radius: 5rpx;
		background: rgba(48, 48, 48, 0.65);
		font-size: 22rpx;
		padding: 10rpx 40rpx;
	}
	.info {
		background: #fff;
		width: 670rpx;
		height: 260rpx;
		border-radius: 20rpx;
		box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.34);
		margin-top: 20rpx;
		padding: 30rpx;
		box-sizing: border-box;
		font-size: 26rpx;
		display: flex;
		flex-flow: column;
		.opt-nums {
			display: flex;
			align-items: center;
			.opt-li {
				display: flex;
				flex-flow: column;
				align-items: center;
				justify-content: center;
				width: 30%;
			}
			.num {
				padding-bottom: 10rpx;
				font-size: 34rpx;
				font-weight: bold;
			}
		}
	}
}
</style>
