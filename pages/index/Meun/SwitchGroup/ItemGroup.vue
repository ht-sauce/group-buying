<template>
	<view class="gropu">
		<view class="header">
			<view class="line"></view>
			<text>{{ title }}</text>
		</view>
		<view class="list">
			<template v-for="(item, index) in list">
				<view class="li" :key="index">
					<view class="head-portrait">
						<view class="img"><van-image round width="60rpx" height="60rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" /></view>
						<text>群主</text>
					</view>
					<view class="info">
						<text class="info-li">成员121</text>
						<text class="info-li">接龙人次1222</text>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		title: String,
		list: {
			type: Array,
			default() {
				return [1, 2, 3];
			}
		}
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.gropu {
	width: 100%;
	padding: 0 20rpx;
	box-sizing: border-box;
	.header {
		display: flex;
		align-items: center;
		font-size: 32rpx;
	}
	.line {
		margin-right: 15rpx;
		width: 10rpx;
		height: 50rpx;
		background: backLiner(to bottom);
	}
	.list {
		padding-top: 15rpx;
	}
	.li {
		padding: 10rpx 0;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		height: 60rpx;
		line-height: 40rpx;
		.head-portrait {
			display: flex;
			align-items: center;
			width: 300rpx;
			overflow: hidden;
			.img {
				margin-right: 15rpx;
			}
		}
		.info {
			font-size: 24rpx;
			color: #A2A2A2;
			.info-li {
				margin-right: 20rpx;
			}
		}
	}
}
</style>
