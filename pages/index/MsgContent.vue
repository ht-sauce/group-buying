<template>
	<view class="msg-content">
		<view class="nav-button">
			<view class="default-button" @click="active = true" :class="{ 'silder-button': active }"><text>我加入的</text></view>
			<view class="default-button" @click="active = false" :class="{ 'silder-button': !active }"><text>我发布的</text></view>
		</view>
		<!-- 加入和发布内容展示页面 -->
		<view class="page-content">
			<template v-if="gropyList.length > 1">
				<template v-for="(item, index) in gropyList">
					<!-- 每一项展示 -->
					<GroupItem :group-data="item" @clickGroup="onGroupOrderDetails" @clickImg="callItemGroup" :key="index" />
				</template>
			</template>
			<template v-else>
				<view class="empty-data">
					<image class="empty-box" src="/static/pages/EmptyBox.png"></image>
					<text>当前没有内容</text>
				</view>
			</template>
		</view>
		<!-- 团购预览组件 -->
		<ActivityPreview @touchmove.stop.prevent :show.sync="preview.show" :groupData="preview.groupData" />
	</view>
</template>

<script>
import GroupItem from '@/common/components/GroupItem.vue';
import ActivityPreview from '@/common/components/ActivityPreview.vue';
export default {
	components: {
		GroupItem,
		ActivityPreview
	},
	data() {
		return {
			active: true, // 发布状态切换
			gropyList: [
				{
					ongoing: true,
					msgType: 1,
					text: '新鲜农家菜园团购活动开始了，4月24日fdsahhfdjsakfhaskjhfashkfdas新鲜农家菜园团购活动开始了新鲜农家菜园团购活动开始了',
					imgList: [
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245111&di=fa97464fc203761da7db99fb81b98d88&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245110&di=427aaba2fa9bd4c7173b8b6760e55c6d&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350',
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245110&di=d64e4b2fd0d104b44ab39d7c05d10cd5&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245109&di=07df4251d8e239f833910120ae6e7646&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3204887199%2C3790688592%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D4610%26h%3D2968',
						'https://img.yzcdn.cn/vant/cat.jpeg'
					]
				},
				{
					ongoing: true,
					msgType: 2,
					text: '新鲜农家菜园团购活动开始了，4月24日fdsahhfdjsakfhaskjhfashkfdas新鲜农家菜园团购活动开始了新鲜农家菜园团购活动开始了',
					imgList: ['https://img.yzcdn.cn/vant/cat.jpeg']
				},
				{
					ongoing: true,
					msgType: 3,
					text: '新鲜农家菜园团购活动开始了，4月24日fdsahhfdjsakfhaskjhfashkfdas新鲜农家菜园团购活动开始了新鲜农家菜园团购活动开始了',
					imgList: [
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245110&di=427aaba2fa9bd4c7173b8b6760e55c6d&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350'
					]
				}
			],
			preview: {
				// 预览需要传递的数据
				show: false,
				groupData: {}
			}
		};
	},
	mounted() {},
	methods: {
		// 返回当前组件展示的数据
		callItemGroup(e) {
			// console.log(e)
			this.preview = {
				show: true,
				groupData: e
			};
		},
		// 进入团购详情页面
		onGroupOrderDetails() {
			uni.navigateTo({
				url: '/pages/GroupOrderDetails/GroupOrderDetails'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.msg-content {
	margin-top: 20rpx;
	width: 100%;
	box-sizing: border-box;
	padding: 0 30rpx;
	.nav-button {
		margin: 20rpx 0;
		width: 690rpx;
		background: rgba(180, 180, 180, 0.36);
		color: #a1a1a1;
		height: 70rpx;
		line-height: 70rpx;
		display: flex;
		font-size: 32rpx;
		border-radius: 35rpx;
		.default-button {
			width: 50%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.silder-button {
			@extend .default-button;
			background: backLiner();
			border-radius: 35rpx;
			color: #fff;
			box-shadow: $g-shadow;
		}
	}
	.page-content {
		width: 100%;
		height: 400rpx;
		.empty-data {
			width: 100%;
			height: 500rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #a9a9a9;
			flex-flow: column;
		}
		.empty-box {
			width: 320rpx;
			height: 255rpx;
			margin-bottom: 20rpx;
		}
	}
}
</style>
