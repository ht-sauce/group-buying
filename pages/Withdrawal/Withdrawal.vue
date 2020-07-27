<template>
	<GlobalPage title="提现">
		<view class="withdrawal">
			<view class="payee">
				<van-field
					label="收款人"
					label-class="lable-class"
					input-class="input-class"
					clearable
					placeholder="请输入绑定微信的实名"
					:border="false"
				/>
			</view>

			<view class="withdrawal-amount">
				<view class="name">提现金额</view>
				<view class="amount">
					<view class="rmb">¥</view>
					<input class="money" value="0.00" />
				</view>
				<view class="options">
					<view class="current">
						<text>当前资金余额</text>
						<text>¥</text>
						<text>879</text>
					</view>
					<van-button color="#FD7032" round size="small">圆形按钮</van-button>
				</view>
			</view>

			<view class="tips"><Reminder /></view>
			<BecsButton background="#FF6120"><text>确定</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
import Reminder from '@/common/components/Reminder.vue';
export default {
	components: {
		Reminder,
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.withdrawal {
	margin-bottom: 120rpx;
}
.payee {
	/deep/ {
		.lable-class {
			font-weight: bold;
			font-size: 30rpx;
		}
		.input-class {
			font-size: 30rpx;
		}
	}
}
.withdrawal-amount {
	margin-top: 20rpx;
	box-sizing: border-box;
	padding: 30rpx;
	background: #fff;
	.name {
		font-weight: bold;
	}
	.amount {
		display: flex;
		align-items: flex-end;
		padding: 35rpx 0;
		color: #161616;
		font-weight: bold;
		.rmb {
			font-size: 22rpx;
			margin-right: 30rpx;
		}
		.money {
			flex: 1;
			font-size: 70rpx;
			height: 70rpx;
		}
	}
	.options {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.current {
			flex: 1;
			color: #999999;
			font-size: 26rpx;
		}
	}
}
.tips {
	padding: 20rpx 30rpx;
}
</style>
