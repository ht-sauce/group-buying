<template>
	<view class="gropu-leader">
		<view class="order" @click="onActivePage">订单管理</view>
		<view class="active" @click="onActiveMangeShow">活动管理</view>
		<ActiveMange :show.sync='show' />
	</view>
</template>

<script>
import ActiveMange from './ActiveMange.vue'
export default {
	components: {
		ActiveMange
	},
	data() {
		return {
			show: false
		}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {
		onActivePage() {
			uni.navigateTo({
				url: '/pages/ActiverManagement/ActiverManagement'
			});
		},
		onActiveMangeShow() {
			this.show = true
		}
	}
};
</script>

<style lang="scss" scoped>
.gropu-leader {
	width: 100%;
	height: 100rpx;
	color: #fff;
	font-weight: bold;
	display: flex;
	> view {
		width: 50%;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
	}
	.order {
		background: #FF9E20;
		border-top-left-radius: 40rpx;
		border-bottom-left-radius: 40rpx;
	}
	.active {
		border-top-right-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		background: #FF6120;
	}
}
</style>
