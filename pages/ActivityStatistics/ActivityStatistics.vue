<template>
	<GlobalPage title="活动统计">
		<view class="activity-statistics">
			<view class="people-statistics">
				<view class="li">
					<view class="nums">7890</view>
					<view class="tiile">参与人次</view>
				</view>
				<view class="li">
					<view class="nums">7890</view>
					<view class="tiile">查看人次</view>
				</view>
				<view class="li">
					<view class="nums">7890</view>
					<view class="tiile">转发人次</view>
				</view>
			</view>
			<view class="income">
				<view class="nums">¥7890</view>
				<view class="tiile">活动实际收入</view>
			</view>
			<view class="oncome-statistics">
				<view class="li">
					<view class="oncome-nums">7890</view>
					<view class="tiile">参与人次</view>
				</view>
				<view class="li">
					<view class="oncome-nums">7890</view>
					<view class="tiile">查看人次</view>
				</view>
				<view class="li">
					<view class="oncome-nums">7890</view>
					<view class="tiile">转发人次</view>
				</view>
			</view>
			<view class="tips"><text>每次活动结束拜客社团收取0.8%服务费</text></view>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	data() {
		return {};
	},
};
</script>

<style lang="scss">
.activity-statistics {
	background: #fff;
	height: 100vh;
}
.people-statistics {
	width: 100%;
	height: 160rpx;
	padding: 0 100rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.li {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
}
.nums {
	font-weight: bold;
	font-size: 40rpx;
	padding-bottom: 16rpx;
}
.tiile {
	font-size: 20rpx;
}
.income {
	@extend .li;
	width: 100%;
	padding: 20rpx 0;
}
.oncome-statistics {
	@extend .people-statistics;
	height: 100rpx;
	.oncome-nums {
		@extend .nums;
		font-size: 30rpx;
	}
}
.tips {
	padding-top: 30rpx;
	width: 100%;
	text-align: center;
	font-size: 20rpx;
	color: #999999;
}
</style>
