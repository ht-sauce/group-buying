<template>
	<GlobalPage title="群主页" :bg-height="220" gb-image="/static/pages/group-home.png">
		<view class="group-home">
			<!-- 头部信息 -->
			<HeaderInfo />
			<view class="occupy" :style="{ top: topHeight }">
				<Statistics />
				<!-- 管理信息部分 -->
				<Manage v-if="true" />
				<!-- 活动信息 -->
				<ActiveInfo />
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import HeaderInfo from './HeaderInfo.vue';
import Manage from './Manage.vue';
import ActiveInfo from './ActiveInfo.vue';
import Statistics from './Statistics.vue';
export default {
	components: {
		HeaderInfo,
		Manage,
		ActiveInfo,
		Statistics
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight + 40 + 'px';
		}
	},
	data() {
		return {
			type: 1 // 管理模式，2查看模式
		};
	},
	onLoad(e) {
		// 确定页面展示模式
		this.type = e.type ? e.type : 1;
	}
};
</script>

<style lang="scss">
.group-home {
	padding: 30rpx;
	.occupy {
		position: absolute;
		z-index: 2000;
	}
}
</style>
