<template>
	<view class="header-info" :style="{ top: topHeight }">
		<view class="header">
			<member-header color="#c38513">
				<view class="options">
					<view class="invitation">邀请</view>
					<van-icon size="40rpx" name="setting-o" />
				</view>
			</member-header>
		</view>
	</view>
</template>

<script>
import MemberHeader from '@/common/components/MemberHeader.vue';
export default {
	components: {
		MemberHeader,
	},
	data() {
		return {};
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight + 'px';
		},
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.header-info {
	display: flex;
	flex-flow: column;
	align-items: center;
	position: absolute;
	z-index: 2100;
	.header {
		color: #c38513;
		.options {
			padding-top: 10rpx;
			height: 80rpx;
			display: flex;
			align-items: flex-start;
			font-size: 22rpx;
			color: #c38513;
			.invitation {
				margin-right: 20rpx;
				height: 35rpx;
				padding: 0 20rpx;
				border-radius: 20rpx;
				border: #c38513 1px solid;
				line-height: 35rpx;
				text-align: center;
			}
		}
	}
}
</style>
