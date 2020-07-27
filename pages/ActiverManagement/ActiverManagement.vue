<template>
	<GlobalPage title="选择活动">
		<view class="order-management">
			<view><van-search input-class="search-input-class" custom-class="search-root-class" :value="searchValue" placeholder="请输入搜索关键词" /></view>
			<van-tabs
				color="linear-gradient(to right, #f94067, #fd7131)"
				custom-class="tab-custom-class"
				tab-active-class="tab-active-class"
				tab-class="tab-class"
				@change="onChange"
				:active="tabsActive"
			>
				<van-tab title="全部"></van-tab>
				<van-tab title="本日"></van-tab>
				<van-tab title="昨日"></van-tab>
				<van-tab title="本周"></van-tab>
				<van-tab title="本月"></van-tab>
			</van-tabs>
			<view class="active-list">
				<template v-for="(item, index) in activeList">
					<ItemActive @click.native="openOrderDetails" :key="index" />
				</template>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import ItemActive from './ItemActive.vue'
export default {
	components: {
		ItemActive,
	},
	data() {
		return {
			searchValue: '', // 搜索内容
			tabsActive: 3,
			activeList: [1,2,3]
		};
	},
	methods: {
		onChange(e) {
			console.log(e)
			this.tabsActive = e.detail.index
		},
		openOrderDetails() {
			uni.navigateTo({
				url: '/pages/ActiveOrderDetails/ActiveOrderDetails'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.order-management {
	/deep/ .search-input-class {
		background: #F4F4F4;
	}
	/deep/ .search-root-class {
		padding: 10rpx 30rpx;
	}
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
	.active-list {
		width: 100%;
		height: 100vh;
		background: red;
		background: #fff;
		margin-top: 20rpx;
	}
}
</style>
