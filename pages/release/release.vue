<template>
	<GlobalPage :arrowShow="false" title="发布">
		<form>
			<view class="release">
				<view class="explain">团购活动：即社群用户自行购买，达到一定人数后降价，原先购买的用户，将被退还差价。群主可灵活运用阶梯价设置达到团购降价效果</view>
				<view class="title">创建团购活动</view>
				<!-- 团购活动头部信息 -->
				<GroupHeader />
				<!-- 设置商品信息 -->
				<SetGoodsInfo />
				<!-- 团购信息设置部分 -->
				<SettingGroup />
				<!-- 底部操作按钮 -->
				<GroupFooter />
			</view>
		</form>
	</GlobalPage>
</template>

<script>
import GroupHeader from './GroupHeader/index.vue'
import SetGoodsInfo from './SetGoodsInfo/index.vue'
import SettingGroup from './SettingGroup/index.vue'
import GroupFooter from './GroupFooter/index.vue'
export default {
	components: {
		GroupHeader,
		SetGoodsInfo,
		SettingGroup,
		GroupFooter
	},
	data() {
		return {
		};
	},
	onShow() {},
	methods: {
	}
};
</script>

<style lang="scss" scoped>
.release {
	width: 750rpx;
	box-sizing: border-box;
	padding: 30rpx;
	.explain {
		color: #fff;
		font-size: 26rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		border-radius: 12rpx;
		background: #fd7131;
		box-shadow: 0 0 4rpx #fd7131;
	}
	.title {
		width: 100%;
		padding: 30rpx 0;
		font-weight: bold;
		text-align: center;
	}
}
</style>
