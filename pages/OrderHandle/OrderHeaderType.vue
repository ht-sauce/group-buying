<template>
	<view class="order-header-type" :style="{top: topHeight}">
		<van-image width="100rpx" height="100rpx" :src="page.icon" />
		<view class="title">
			<text>{{ page.title }}</text>
		</view>
		<view v-show="page.tips" class="tips">
			<text>{{ page.tips }}</text>
		</view>
		<!-- 待发货和待处理需要展示 -->
		<view v-if="page.id === 3 || page.id === 2" class="button">
			<view v-show="page.id===2" class="but" @click="smsShow = true" >短信通知</view>
			<view v-show="page.id===3" class="but">不处理</view>
			<view class="but">取消订单</view>
		</view>
		<!-- 短信通知弹窗 -->
		<SmsNote :show.sync="smsShow" />
	</view>
</template>

<script>
import SmsNote from './SmsNote.vue'	
export default {
	components: {
		SmsNote
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight  } = this.$store.state.sys
			return statusBarHeight + defaultTopHeight + 'px'
		}
	},
	props: {
		page: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			smsShow: true
		}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.order-header-type {
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	z-index: 2000;
	color: #ffffff;
	.title {
		margin-top: 10rpx;
		font-size: 36rpx;
	}
	.tips {
		margin-top: 10rpx;
		font-size: 26rpx;
	}
	.button {
		margin-top: 25rpx;
		display: flex;
		align-items: center;
		font-size: 28rpx;
		.but {
			border-radius: 6rpx;
			border: #fff 1px solid;
			padding: 5rpx 15rpx;
			margin: 0 15rpx;
		}
	}
}
</style>
