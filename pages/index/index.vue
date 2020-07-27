<template>
	<!-- 全局页面存在 -->
	<GlobalPage :arrowShow="false" title="拜客社团" :bgHeight="90">
		<view class="home">
			<view class="search" :style="{top: topHeight }">
				<van-search shape="round" background="transparent" placeholder="请输入搜索关键词" />
			</view>
			<!-- 滚动通告 -->
			<view class="notice"><NoticeBar /></view>
			<!-- 功能菜单 -->
			<view><Menu /></view>
			<!-- 内容展示页 -->
			<view>
				<MsgContent />
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import NoticeBar from './NoticeBar.vue';
import Menu from './Meun/Menu.vue'
import MsgContent from './MsgContent.vue'
import Login from "@/common/utils/login.js"
export default {
	components: {
		NoticeBar,
		Menu,
		MsgContent
	},
	data() {
		return {
			value: '',
		};
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight  } = this.$store.state.sys
			return statusBarHeight + defaultTopHeight + 'px'
		}
	},
	onLoad() {
		// 自动登录流程，失败将进入弹窗登录
		Login.autoLogin()
	},
	onShow() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	.search {
		width: 750rpx;
		position: fixed;
		z-index: 2000;
	}
	.notice {
		margin-top: 10rpx;
		width: 100%;
		display: flex;
		justify-content: center;
	}
}
</style>
