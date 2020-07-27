<template>
	<GlobalPage title="账户余额" :bg-height="150">
		<view class="account-balance">
			<view class="header" :style="{ top: topHeight }">
				<view class="name">
					<view class="sum">总资金（元）</view>
					<view class="details">
						<text>资金明细</text>
						<view style="padding-left: 4rpx; margin-top: 8rpx;"><van-icon name="arrow" color="#fff" size="24rpx" /></view>
					</view>
				</view>
				
				<view class="money">
					<text>2908.35</text>
				</view>
			</view>
			
			<view class="tips">
				<Reminder />
			</view>
			<BecsButton background="#FF6120"><text>确定</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
import Reminder	from "@/common/components/Reminder.vue"
export default {
	components: {
		Reminder
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight + 10 +  'px';
		},
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
.account-balance {
	margin-bottom: 120rpx;
	.header {
		position: fixed;
		z-index: 2000;
		box-sizing: border-box;
		padding: 0 30rpx;
		width: 100%;
		color: #fff;
		.name {
			display: flex;
			align-items: center;
			.sum {
				flex: 1;
			}
			.details {
				display: flex;
				align-items: center;
				font-size: 22rpx;
			}
		}
		.money {
			padding-top: 30rpx;
			font-size: 70rpx;
			font-weight: bold;
		}
	}
	.tips {
		padding: 20rpx 30rpx;
	}
}
</style>
