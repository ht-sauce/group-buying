<template>
	<van-popup :show="show" custom-style="border-radius: 6rpx;background:transparent;" @close="onClose">
		<view class="sms-note">
			<view class="content">
				<view class="title">短信通知</view>
				<view class="main">
					<view class="sms-tit">短信内容</view>
					<view class="sms-content">您的商品已到达货点，请尽快取货</view>
					<view class="option">
						<view class="option-li">
							<van-checkbox>仅发送此买家</van-checkbox>
						</view>
						<view class="option-li">
							<van-checkbox>
								<text>发送给所有未取货买家(</text>
								<text>77</text>
								<text>人)</text>
							</van-checkbox>
						</view>
					</view>
					<view class="price">
						<text>短信费用按</text>
						<text>7</text>
						<text>分/条从账户余额扣除，合计￥</text>
						<text>6.39</text>
					</view>
				</view>
				<view class="button">
					<view @click="onClose">取消</view>
					<view>确定</view>
				</view>
			</view>
			<view class="tips">{{ tips }}</view>
		</view>
	</van-popup>
</template>

<script>
export default {
	components: {},
	props: {
		show: Boolean
	},
	data() {
		return {
			tips: '您的账户余额不足'
		}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {
		onClose() {
			this.$emit('update:show', false)
		}
	}
};
</script>

<style lang="scss" scoped>
.sms-note {
	width: 600rpx;
	color: #000;
	.content {
		width: 100%;
		height: 760rpx;
		background: #fff;
		border-radius: 10rpx;
		box-sizing: border-box;
		display: flex;
		flex-flow: column;
		.title {
			font-weight: bold;
			font-size: 36rpx;
			width: 100%;
			text-align: center;
			padding-top: 30rpx;
		}
		.main {
			flex: 1;
			padding: 40rpx 30rpx;
			.sms-content {
				margin-top: 25rpx;
				background: #F4F4F4;
				padding: 20rpx 30rpx;
				font-weight: 700;
			}
			.option {
				padding: 20rpx 0;
				.option-li {
					padding: 10rpx 0;
				}
			}
			.price {
				color: #999999;
				font-size: 24rpx;
			}
		}
		.button {
			width: 100%;
			border-top: #D2D2D2 1px solid;
			height: 100rpx;
			display: flex;
			> view {
				width: 50%;
				height: 100%;
				text-align: center;
				line-height: 100rpx;
				font-weight: bold;
			}
		}
	}
	.tips {
		width: 100%;
		height: 110rpx;
		margin-top: 70rpx;
		background: #fff;
		border-radius: 20rpx;
		font-weight: bold;
		text-align: center;
		line-height: 110rpx;
	}
}
</style>
