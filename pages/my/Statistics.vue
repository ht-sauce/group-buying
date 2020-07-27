<template>
	<view class="statistics" :style="{top: topHeight + 'px' }">
		<view class="li">
			<view class="num">78898</view>
			<view class="title">我创建的社群</view>
		</view>
		<view class="li">
			<view class="num">78898</view>
			<view class="title">我加入的社群</view>
		</view>
		<view class="li">
			<view class="num">78898</view>
			<view class="title">账户余额</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight  } = this.$store.state.sys
			return statusBarHeight + defaultTopHeight + 10
		}
	},
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
	position: fixed;
	z-index: 2100;
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #fff;
	box-sizing: border-box;
	padding: 0 75rpx;
	width: 100%;
	.li {
		display: flex;
		align-items: center;
		flex-flow: column;
		> view {
			padding: 10rpx 0;
		}
		.num {
			font-size: 40rpx;
		}
		.title {
			font-size: 26rpx;
		}
	}
}
</style>
