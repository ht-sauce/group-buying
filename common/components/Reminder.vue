<template>
	<view class="reminder">
		<view>温馨提示：</view>
		<view>提现上限为2万/天</view>
		<view>
			<text :decode="true" space="emsp">如有异常</text>
			<text class="emsp"></text>
			<text class="line">请联系客服</text>
		</view>
		<view>
			<text :decode="true" space="emsp">更多信息请阅读</text>
			<text class="emsp"></text>
			<text class="line">《拜客社团用户协议》</text>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.reminder {
	font-size: 22rpx;
	color: #999999;
	> view {
		padding: 3rpx 0;
	}
	.emsp {
		display: inline-block;
		width: 11rpx;
		height: 22rpx;
	}
	.line {
		text-decoration: underline;
	}
}
</style>
