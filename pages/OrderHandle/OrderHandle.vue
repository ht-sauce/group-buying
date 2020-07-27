<template>
	<GlobalPage :title="page.pageTitle" :bgHeight="page.navHeight">
		<view class="order-handle">
			<template v-if='page.id !== 1' >
				<!-- 订单顶部状态展示 -->
				<OrderHeaderType :page="page" />
			</template>
			<!-- 订单头部信息 -->
			<OrderInfoItem :list="HeaderInfo" />
			<!-- 商品信息，买家信息，发货信息，所有模式公用-->
			<InfoGoodsOrder />
			<!-- 发货条件下的确定按钮 -->
			<template v-if='page.id === 1'>
				<view class="deliver-goods-button">
					<BecsButton background="#FF6120">发货</BecsButton>
				</view>
			</template>
		</view>
	</GlobalPage>
</template>

<script>
import OrderInfoItem from './OrderInfoItem.vue'	
import InfoGoodsOrder from './InfoGoodsOrder.vue'
import OrderHeaderType from './OrderHeaderType.vue'	
export default {
	components: {
		OrderInfoItem,
		InfoGoodsOrder,
		OrderHeaderType
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight  } = this.$store.state.sys
			return statusBarHeight + defaultTopHeight + 'px'
		}
	},
	data() {
		return {
			// 页面级别变量控制点
			SysType: [
				{ id: 1, title: '发货处理', icon: '', pageTitle: '发货处理', navHeight: 40, tips: "" },
				{ id: 2, title: '待发货', icon: '/static/pages/icon-await.png', pageTitle: '订单详情', navHeight: 200, tips: "买家已下单" },
				{ id: 3, title: '待处理', icon: '/static/pages/icon-time.png', pageTitle: '订单详情', navHeight: 200, tips: "买家申请取消订单" },
				{ id: 4, title: '已发货', icon: '/static/pages/icon-over.png', pageTitle: '订单详情', navHeight: 160, tips: "交易完成" },
				{ id: 5, title: '已取消', icon: '/static/pages/icon-cancel.png', pageTitle: '订单详情', navHeight: 140, tips: "" },
				{ id: 6, title: '已失效', icon: '/static/pages/icon-invalid.png', pageTitle: '订单详情', navHeight: 140, tips: "" }
			],
			// 当前页面控制项
			page: {},
			HeaderInfo: [
				{title: '订单类型', value: '团购订单'},
				{title: '订单编号', value: 'PTGQ0004161579893789920'},
				{title: '下单时间', value: '2020-01-17 16:48'}
			]
		};
	},
	onLoad(e) {
		const { pageType } = e;
		const page = this.SysType.filter(item => item.id == pageType)[0];
		if (!page) uni.navigateBack({
			delta: 1
		})
		console.log(page)
		this.page = page
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.order-handle {
}
.deliver-goods-button {
	width: 100%;
	height: 100rpx;
}
</style>
