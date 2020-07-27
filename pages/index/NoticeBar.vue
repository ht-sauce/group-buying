<template>
	<view class="notice-bar">
		<image class="notice-image" src="../../static/pages/notice-msg.png"></image>
		<view class="line"></view>
		<swiper class="swiper" :vertical="true" :autoplay="true" :interval="3000" circular>
			<template v-for="(item, index) in noticebar">
				<swiper-item class="sw-item" :key="index">{{ item }}</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			noticebar: [
				'星星的眼睛 在龙津社区建了一个团购活动',
				'巴黎盛开的樱花  在清河新寓社区建了一个团购活动',
				'开心的笨小孩 在长阳花园社区建了一个团购活动',
				'在哪跌倒こ就在哪躺下  在新铜社区建了一个团购活动',
				'优雅的叶子 在牧龙社区建了一个团购活动',
				'不浪漫罪名 在红光村社区建了一个团购活动',
				'玩味  在大庙社区建了一个团购活动',
				'青瓷清茶倾城歌  在新洲社区建了一个团购活动',
				'一生荒唐  在上湖社区建了一个团购活动',
				'知足常乐 在铁心桥社区建了一个团购活动',
				'限量版女汉子  在凤凰社区建了一个团购活动',
				'如你所愿 在岱山社区建了一个团购活动',
				'发型不乱一切好办i 在赛虹桥社区建了一个团购活动',
				'蝶恋花╮  在石门坎社区建了一个团购活动',
				'白恍 在朝天宫社区建了一个团购活动',
				'幸福触手可及 在蓝旗社区建了一个团购活动',
				'回忆、曾经的幸福 在古棠社区建了一个团购活动',
				'莫小羽～ 在瓜埠中心社区建了一个团购活动',
				'回忆、曾经的幸福 在古棠社区建了一个团购活动',
				'红豆奶油 在方州社区建了一个团购活动',
				'天上爱人 在紫霞社区建了一个团购活动',
				'太阳神i 在砂子沟社区建了一个团购活动',
				'亦世凡华在白果社区建了一个团购活动',
				'微凉时光倾旧城 在聚福园社区建了一个团购活动',
				'雨淋湿了巴黎 在方州社区建了一个团购活动',
				'你的滥情我的绝情  在凤凰社区建了一个团购活动',
				'月影随念郎 在岱山社区建了一个团购活动',
				'青衫湿 在赛虹桥社区建了一个团购活动'
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
$height: 72rpx;
.notice-bar {
	background: rgba(251, 92, 72, 0.1);
	padding: 0 15rpx;
	display: flex;
	flex-flow: row;
	width: 690rpx;
	box-sizing: border-box;
	background: rgba(251, 92, 72, 0.04);
	box-shadow: 2rpx 2rpx 4rpx 0rpx rgba(157, 65, 23, 0.37);
	border-radius: 4rpx;
	height: $height;
	align-items: center;
	.notice-image {
		width: 100rpx;
		height: 40rpx;
	}
	.line {
		border-left: #979797 1px solid;
		margin: 0 15rpx;
		height: 22rpx;
	}
	.swiper {
		flex: 1;
		height: $height;
		line-height: $height;
		color: #7a7a7a;
	}
	.sw-item {
		font-size: 24rpx;
	}
}
</style>
