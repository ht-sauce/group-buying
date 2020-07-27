<template>
	<view class="details-header">
		<view class="header">
			<view class="title">
				<text>活动社区：</text>
				<text>宁双路19号云密城</text>
			</view>
			<view v-if="isStart" class="group-status">活动进行中</view>
			<view v-else class="group-status-stop">活动结束</view>
		</view>
		<view class="pick-up-info"><text>新鲜农家菜团购活动开始了，4月24日 17:30~18:30在云密 城A座大门外取货</text></view>
		<view class="pick-up-time"><text>6小时前发布</text></view>
		<!-- 图片展示区域 -->
		<ImgShow />
		<view class="introduce">
			<text>
				这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字这是活动介绍文字
			</text>
		</view>
		<!-- 倒计时部分 -->
		<view class="count-down">
			<view class="title">距结束:</view>
			<van-count-down use-slot :time="time" @change="onChange">
				<text class="item">{{ timeData.hours }}</text>
				<text class="item-point">:</text>
				<text class="item">{{ timeData.minutes }}</text>
				<text class="item-point">:</text>
				<text class="item">{{ timeData.seconds }}</text>
			</van-count-down>
		</view>
		<!-- 商品领取地址 -->
		<view class="address">
			<text>商品领取地址：</text>
			<text>宁双路19号云密城</text>
		</view>
		<!-- 由于商品部分和这里是一个整体，但是商品部分复杂度高，额外分离一个组件，然后通过插槽插入 -->
		<slot></slot>
	</view>
</template>

<script>
import ImgShow from './ImgShow.vue';
export default {
	components: {
		ImgShow,
	},
	data() {
		return {
			isStart: true,
			time: 30 * 60 * 60 * 1000,
			timeData: {}
		};
	},
	methods: {
		onChange(e) {
			this.timeData = e.detail;
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	.title {
		font-size: 28rpx;
		font-weight: bold;
		flex: 1;
	}
	.group-status {
		height: 50rpx;
		border-radius: 25rpx;
		background: #ff6120;
		color: #fff;
		font-size: 26rpx;
		line-height: 50rpx;
		padding: 0 20rpx;
	}
	.group-status-stop {
		@extend .group-status;
		background: #6b6b6b;
	}
}
.pick-up-info {
	font-size: 24rpx;
	color: #151515;
	padding: 17rpx 0;
}
.pick-up-time {
	color: #8c8c8c;
	font-size: 20rpx;
}
.introduce {
	font-size: 24rpx;
}
.count-down {
	display: flex;
	align-items: center;
	padding: 30rpx 0;
	.title {
		padding-right: 15rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #f94462;
		height: 40rpx;
		line-height: 40rpx;
	}
	.item {
		margin: 0 10rpx;
		display: inline-block;
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		color: #fff;
		font-size: 28rpx;
		border-radius: 5rpx;
		background: backLiner(to bottom);
	}
	.item-point {
		color: #f94462;
		font-size: 28rpx;
	}
}
.address {
	font-size: 28rpx;
	color: #151515;
	font-weight: bold;
}
</style>
