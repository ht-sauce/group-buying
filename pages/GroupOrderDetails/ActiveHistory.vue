<template>
	<view class="active-history">
		<gradients-title>
			<view class="active-history-header">
				<image src="/static/pages/icon-active.png"></image>
				<text>参与活动</text>
			</view>
		</gradients-title>
		<view class="active-list">
			<template v-for="(item, index) in list">
				<view :key="index" class="active-list-li">
					<view class="nick-img"><van-image width="40rpx" round height="40rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" /></view>
					<view class="nick">皮卡丘</view>
					<view class="time">1小时前</view>
					<view class="goods">青椒5元一斤 *2，共8件</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
import GradientsTitle from '@/common/components/GradientsTitle.vue';
export default {
	components: {
		GradientsTitle
	},
	data() {
		return {
			list: [1, 2, 3]
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.active-history {
	padding: 20rpx 0;
}
.active-history-header {
	display: flex;
	align-items: center;
	> image {
		width: 42rpx;
		height: 42rpx;
		margin-right: 15rpx;
	}
}
.active-list {
	margin-top: 30rpx;
	font-size: 26rpx;
	.active-list-li {
		height: 65rpx;
		display: flex;
		align-items: center;
		.nick-img {
			margin-top: 5rpx;
		}
		.nick, .goods {
			font-weight: 700;
		}
		.nick, .time {
			padding-left: 16rpx;
		}
		.time {
			color: #A2A2A2;
		}
		.goods {
			flex: 1;
			text-align: right;
		}
	}
}
</style>
