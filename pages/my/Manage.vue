<template>
	<view class="manage" :style="{ top: topHeight + 'px' }">
		<view class="title">管理工具</view>
		<view class="utils">
			<template v-for="(item, index) in utilsList">
				<view class="li" :key="index">
					<image class="img" :src="item.img"></image>
					<view class="name">{{ item.name }}</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight + 80;
		}
	},
	data() {
		return {
			utilsList: [
				{ name: '社区地址', img: '/static/pages/icon-location.png' },
				{ name: '出售订单', img: '/static/pages/icon-record.png' },
				{ name: '商品库', img: '/static/pages/icon-home.png' }
			]
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.manage {
	left: 30rpx;
	width: 690rpx;
	position: absolute;
	z-index: 2000;
	background: #fff;
	box-shadow: 0 0 4rpx rgba(51, 143, 253, 0.18);
	padding: 20rpx;
	box-sizing: border-box;
	border-radius: 20rpx;
}
.title {
	font-size: 26rpx;
	font-weight: bold;
	padding-bottom: 20rpx;
}
.utils {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	.li {
		width: 33.3%;
		display: flex;
		flex-flow: column;
		align-items: center;
		.img {
			width: 70rpx;
			height: 70rpx;
			background-size: cover;
			padding: 5rpx 0;
		}
		.name {
			padding: 5rpx 0;
			font-size: 26rpx;
		}
	}
}
</style>
