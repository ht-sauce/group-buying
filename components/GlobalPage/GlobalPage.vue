<template>
	<view class="global-page">
		<view class="nav-head">
			<view class="nav-background" :style="{height: bgHeight + statusBarHeight + 'px', background: background}">
				<image v-if="gbImage" :src="gbImage" />
			</view>
			<!-- 顶部导航栏 -->
			<CustomHead :arrowShow="arrowShow" :title="title"></CustomHead>
		</view>
		<!-- 占位div,保证内容部分正常展示 -->
		<view style="width: 750rpx;" :style="{height: statusBarHeight + bgHeight + 'px'}"></view>
		<!-- 内容部分 -->
		<view class="main-content" :style="{top: statusBarHeight + bgHeight + 'px'}">
			<slot></slot>
		</view>
	</view>
</template>
<!-- 逻辑梳理：
顶部需要图片和标题，但是图片可以放大变化，甚至是可以替换
其中顶部的z-index为1000，这样背景图片也在1000，顶部文字导航区域设置为1001，保证比图片大
内容slot部分为了保证和正常开发无差别，需要和导航一样计算高度，然后进行同样大小的div占位。 -->
<script>
import CustomHead from '@/common/components/CustomHead/CustomHead.vue';
export default {
	components: {
		CustomHead,
	},
	props: {
		title: {
			type: String,
			default: '拜客社团'
		},
		arrowShow: { // 是否展示返回上一步箭头
			type: Boolean,
			default: true
		},
		bgHeight: { // 背景图片高度
			type: Number,
			default: 40
		},
		gbImage: { // 背景图片
			type: [String, Boolean],
			default: '/static/nav/bg.jpg'
		},
		background: String // 背景颜色
	},
	data() {
		return {};
	},
	computed: {
		statusBarHeight() {
			return this.$store.state.sys.statusBarHeight
		}
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.global-ppage {
	margin: 0;
}
.nav-head {
	position: fixed;
	z-index: 1000;
}
.nav-background {
	width: 750rpx;
	background: transparent;
	> image {
		width: 100%;
		height: 100%;
	}
}
.main-content {
	width: 750rpx;
}
</style>
