<template>
	<GlobalPage title="订单管理">
		<view class="active-order-details">
			<!-- 顶部部分，订单金额，信息部分 -->
			<OrderHeader />
			<!-- 订单操作项部分 -->
			<DeliverGoods />
			<!-- 订单列表部分 -->
			<OrderListTab />
		</view>
	</GlobalPage>
</template>

<script>
import OrderHeader from './OrderHeader.vue';
import DeliverGoods from './DeliverGoods.vue';
import OrderListTab from './OrderListTab/index.vue';
export default {
	components: {
		OrderHeader,
		OrderListTab,
		DeliverGoods,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss">
.active-order-details {
}
</style>
