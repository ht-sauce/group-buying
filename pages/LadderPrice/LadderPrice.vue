<template>
	<GlobalPage title="设置阶梯价格">
		<view class="ladde-price">
			<view class="tips">阶梯价指：当购买数量>=设定的阶梯数量时，参与人将自动获得相应阶梯价格</view>
			<view class="ladde">
				<template v-for="(item, index) in [12, 3, 4]">
					<view class="price">
						<view class="fork">X</view>
						<van-field label="阶梯价格1" placeholder="请输入金额（元）" input-align="right" />
						<van-field label="购买人数" placeholder="请输入购买人数" input-align="right" />
					</view>
				</template>
			</view>
			<view class="add-price"><view class="button">+添加阶梯价</view></view>
			<BecsButton background="#FF6120"><text>确定</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.ladde-price {
	width: 100%;
	padding: 30rpx;
	box-sizing: border-box;
	margin-bottom: 120rpx;
}
.tips {
	padding: 20rpx;
	box-sizing: border-box;
	color: #fff;
	font-size: 26rpx;
	background: #fd7131;
}
.ladde {
	margin-top: 20rpx;
	.price {
		padding: 10rpx 0;
		.fork {
			position: absolute;
			z-index: 2000;
			margin-top: -10rpx;
			right: 20rpx;
			background: #999999;
			color: #fff;
			font-size: 26rpx;
			width: 40rpx;
			height: 40rpx;
			line-height: 40rpx;
			text-align: center;
			border-radius: 50%;
		}
	}
}
.add-price {
	width: 100%;
	padding: 30rpx 0;
	display: flex;
	align-items: center;
	justify-content: center;
	.button {
		width: 500rpx;
		color: #fff;
		font-size: 26rpx;
		padding: 20rpx 0;
		text-align: center;
		border-radius: 10rpx;
		background: linear-gradient(to right, #f94067, #ff6120);
	}
}
</style>
