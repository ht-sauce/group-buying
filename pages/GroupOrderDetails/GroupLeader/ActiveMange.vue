<template>
	<van-popup :show="show" position="bottom" @close="onclose">
		<view class="active-mange">
			<view class="options" @click="jumpActive">活动统计</view>
			<view class="options">修改活动</view>
			<view class="options">结束活动</view>
			<view class="options">删除活动</view>
			<view class="options">复制活动</view>
		</view>
	</van-popup>
</template>

<script>
export default {
	components: {},
	props: {
		show: Boolean
	},
	data() {
		return {};
	},
	methods: {
		onclose(e) {
			this.$emit('update:show', false);
		},
		jumpActive() {
			uni.navigateTo({
				url: '/pages/ActivityStatistics/ActivityStatistics'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.active-mange {
	font-weight: bold;
	color: #000000;
	box-sizing: border-box;
	.options {
		width: 100%;
		text-align: center;
		padding: 30rpx 0;
	}
}
</style>
