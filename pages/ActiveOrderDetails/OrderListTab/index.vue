<template>
	<view class="order-list-tab">
		<view class="header">
			<gradients-title><text>订单信息</text></gradients-title>
		</view>
		<van-tabs
			color="linear-gradient(to right, #f94067, #fd7131)"
			custom-class="tab-custom-class"
			tab-active-class="tab-active-class"
			tab-class="tab-class"
			@change="onChange"
			:active="tabsActive"
		>
			<van-tab :info="3" title="全部"></van-tab>
			<van-tab :info="3" title="代发货">1312312</van-tab>
			<van-tab :info="3" title="待处理">132131</van-tab>
			<van-tab :info="3" title="已完成">321321</van-tab>
			<van-tab :info="3" title="已失效">3123213</van-tab>
		</van-tabs>
		<view class="tabs">
			<template v-for="(item, index) in order">
				<OrderItem :order="item" :key="index" />
			</template>
		</view>
	</view>
</template>

<script>
import OrderItem from "./OrderItem.vue"
import GradientsTitle from '@/common/components/GradientsTitle.vue';
export default {
	components: {
		OrderItem,
		GradientsTitle
	},
	props: {
		order: {
			type: Array,
			default() {
				return [
					{type: 1},
					{type: 2},
					{type: 3},
					{type: 4},
					{type: 5},
					{type: 6},
				];
			}
		}
	},
	data() {
		return {
			tabsActive: 0,
		};
	},
	created() {},
	mounted() {},
	methods: {
		onChange(e) {
			console.log(e);
			this.tabsActive = e.detail.index;
		}
	}
};
</script>
<style>
.van-tab__title__info {
	background: yellow !important;
}
</style>
<style lang="scss" scoped>
.order-list-tab {
	margin-top: 10rpx;
	/deep/ .tab-custom-class {
		height: 80rpx;
		overflow: hidden;
	}
	/deep/ .tab-active-class {
		color: #ff6120;
	}
	/deep/ .tab-class {
		width: 150rpx;
		flex: 0;
		height: 80rpx;
		padding: 0;
	}
}
.header {
	background: #fff;
	width: 100%;
	color: #151515;
	padding: 25rpx 0 15rpx 0;
}
.tabs {
	margin-top: 20rpx;
	width: 100%;
}
</style>
