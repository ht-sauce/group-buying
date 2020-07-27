<template>
	<GlobalPage :arrowShow="false" title="拜客社团" :bg-height="130">
		<view class="my">
			<!-- 顶部数据统计部分 -->
			<Statistics />
			<!-- 管理工具部分 -->
			<Manage />
		</view>
	</GlobalPage>
</template>

<script>
import Statistics from './Statistics.vue'
import Manage from './Manage.vue'
export default {
	components: {
		Statistics,
		Manage
	},
	data() {
		return {};
	},
	onShow() {
	},
	methods: {
	}
};
</script>

<style>
.ceshi {
	width: 100%;
	height: 1000vh;
	background: red;
	min-height: 100vh;
	background: #fff;
}
</style>
