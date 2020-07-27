<template>
	<view class="item-details">
		<view class="header">
			<view class="name">活动收入</view>
			<view class="time">结算时间：2020-05-06 18:30</view>
		</view>
		<view class="user-img">
			<view class="img">
				<van-image
					round
					width="40rpx"
					height="40rpx"
					src="https://img.yzcdn.cn/vant/cat.jpeg"
				/>
				<view class="tag">群主</view>
			</view>
			<view class="nick-name">皮卡丘</view>
			<van-tag color="#FFA03A">
				<text>已认证</text>
				<van-icon name="arrow" />
			</van-tag>
		</view>
		<view class="info">这是一段活动名称这是一段活动名称这是一段活动名称这是一段活动名称这是一段活动名称这是一段活动名称这是一段活动名称这是一段活动名称</view>
		<view class="cost-details">
			<view class="money">
				<view>订单编号：23993002033</view>
				<view>657890</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.item-details {
	width: 100%;
	box-sizing: border-box;
	padding: 20rpx 30rpx;
	background: #fff;
	height: 285rpx;
	border-bottom: 1px solid #EEEEEE;
}
.header {
	display: flex;
	align-items: center;
	.name {
		font-weight: bold;
	}
	.time {
		margin-left: auto;
		font-size: 20rpx;
	}
}
.user-img {
	display: flex;
	align-items: center;
	padding-top: 20rpx;
	.img {
		margin-top: 10rpx;
		position: relative;
		.tag {
			position: absolute;
			right: -4rpx;
			bottom: 4rpx;
			font-size: 10rpx;
			height: 16rpx;
			padding: 0 6rpx;
			border-radius: 8rpx;
			line-height: 16rpx;
			background: #FC693A;
			color: #fff;
		}
	}
	.nick-name {
		font-size: 28rpx;
		font-weight: bold;
		padding: 0 10rpx;
	}
}
.info {
	padding-top: 20rpx;
	font-size: 20rpx;
}
.cost-details {
	.money {
		padding-top: 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 20rpx;
	}
}
</style>
