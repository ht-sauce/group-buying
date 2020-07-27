<template>
	<view class="setting-group">
		<view class="setting-group"><BecsTitle title="团购设置" /></view>
		<view class="group-form">
			<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" title="活动开始时间" placeholder="发布即开始" /></view>
			<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" title="活动结束时间" arrow-right placeholder="请选择" /></view>
			<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" title="提货点" arrow-right placeholder="请选择" /></view>
			<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" title="提货开始时间" placeholder="请选择" /></view>
			<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" title="提货结束时间" placeholder="请选择" /></view>
			<view class="filed"><BecsInput v-model="vaule" title="活动起购价" placeholder="请设置起购价，单位元（必填）" /></view>
			<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" title="每人最多购买次数" placeholder="无限次" /></view>
			<view class="filed"><BecsInput v-model="vaule" title="买家未取货扣除赔偿金" placeholder="请填写百分比%" /></view>
		</view>
	</view>
</template>

<script>
export default {
	components: {
	},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
@import '../common.scss';
.setting-group {
	.setting-group {
		margin-top: 30rpx;
		padding: 30rpx 0;
	}
	.group-form {
		@extend .content-flex;
	}
}
</style>
