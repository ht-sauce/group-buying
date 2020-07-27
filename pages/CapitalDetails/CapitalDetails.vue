<template>
	<GlobalPage title="资金明细">
		<view class="capita-details">
			<view class="van-tabs" :style="{ top: topHeight + 'px' }">
				<van-tabs line-width="70" color="linear-gradient(to right, #f94067, #fd7131)">
					<van-tab title="资金明细"></van-tab>
					<van-tab title="收入明细"></van-tab>
				</van-tabs>
			</view>
			<view class="details-list">
				<template v-for="(item, index) in list">
					<ItemDetails :key="index" />
				</template>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import ItemDetails from './ItemDetails.vue'	
export default {
	components: {
		ItemDetails
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight;
		},
	},
	data() {
		return {
			list: [1,2,3,3,3,44,,44,]
		};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.capita-details {
}
.van-tabs {
	width: 100%;
	position: fixed;
	z-index: 2000;
}
.details-list {
	margin-top: 110rpx;
}
</style>
