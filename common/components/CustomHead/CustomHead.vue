<template>
	<view class="custom-head">
		<!-- 顶部占位 -->
		<view class="nav-bar" :style="{ height: statusBarHeight }"></view>
		<!-- 导航栏部分 -->
		<view class="nav-title">
			<!-- 返回上一步 -->
			<view
				class="icon"
				@click="previousPage"
				v-if="arrowShow"
			>
				<van-icon name="arrow-left" />
			</view>
			<!-- 内容标题 -->
			<view :class="{title: !arrowShow}">
				<text>{{ title }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'CustomHead',
	props: {
		title: {
			type: String,
			default: '拜客社团'
		},
		// 是否展示返回上一步箭头
		arrowShow: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			// 获取系统导航栏高度
			statusBarHeight: uni.getSystemInfoSync().statusBarHeight + 'px',
		};
	},
	methods: {
		// 返回上一页
		previousPage() {
			uni.navigateBack({
				delta: 1
			});
		}
	}
};
</script>

<style lang="scss" scoped>
//linear-gradient(to right, #f94067, #fd7131);
$background: transparent;
.custom-head {
	width: 750rpx;
	top: 0;
	background: $background;
	position: fixed;
	z-index: 1001;
	.nav-bar {
		height: 20px;
		width: 100%;
	}
	.nav-title {
		display: flex;
		height: 40px;
		align-items: center;
		color: #ffffff;
		font-size: 36rpx;
		line-height: 40rpx;
		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 40rpx;
			width: 40px;
			height: 40px;
			&:hover {
				background: rgba(0, 0, 0, 0.1);
			}
		}
		.title {
			padding-left: 20rpx;
		}
	}
}
</style>
