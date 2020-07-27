<template>
	<GlobalPage title="个人主页" :gbImage="false" background="#F9475F">
		<view class="personal-home">
			<view class="header">
				<view style="margin-top: 20rpx;">
					<van-image
						round
						width="100rpx"
						height="100rpx"
						src="https://img.yzcdn.cn/vant/cat.jpeg"
					/>
				</view>
				<text class="name">小智</text>
				<text class="explain">做最好的菜篮子搬运工！</text>
			</view>
			
			<!-- 中间管理和信息部分 -->
			<InfoManage />
			
			<view class="active">
				<template v-for="(item, index) in gropyList">
					<GroupItem :group-data="item" @groupClick="callItemGroup" :key="index">
						<view class="status-header">
							<view class="name-address">
								<text>活动社区：</text>
								<text>宁双路19号云密城</text>
							</view>
							<view class="status-type">
								<view v-show="item.ongoing" class="ongoing"><text>团购进行中</text></view>
								<view v-show="!item.ongoing" class="ongoing-stop"><text>团购结束</text></view>
							</view>
						</view>
					</GroupItem>
				</template>
			</view>
			<!-- 团购预览组件 -->
			<ActivityPreview
				@touchmove.stop.prevent
				:show.sync="preview.show"
				:groupData="preview.groupData"
			/>
		</view>
	</GlobalPage>
</template>

<script>
import GroupItem from '@/common/components/GroupItem.vue';
import ActivityPreview from '@/common/components/ActivityPreview.vue';
import InfoManage from './InfoManage.vue'
export default {
	components: {
		InfoManage,
		GroupItem,
		ActivityPreview,
	},
	props: {
		list: {
			type: Array,
			default() {
				return [1, 2, 3];
			},
		},
	},
	data() {
		return {
			gropyList: [
				{
					ongoing: true,
					msgType: 1,
					text:
						'新鲜农家菜园团购活动开始了，4月24日fdsahhfdjsakfhaskjhfashkfdas新鲜农家菜园团购活动开始了新鲜农家菜园团购活动开始了',
					imgList: [
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245111&di=fa97464fc203761da7db99fb81b98d88&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D3571592872%2C3353494284%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1200%26h%3D1290',
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245110&di=427aaba2fa9bd4c7173b8b6760e55c6d&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350',
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245110&di=d64e4b2fd0d104b44ab39d7c05d10cd5&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853',
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245109&di=07df4251d8e239f833910120ae6e7646&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3204887199%2C3790688592%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D4610%26h%3D2968',
						'https://img.yzcdn.cn/vant/cat.jpeg',
					],
				},
				{
					ongoing: false,
					msgType: 1,
					text:
						'新鲜农家菜园团购活动开始了，4月24日fdsahhfdjsakfhaskjhfashkfdas新鲜农家菜园团购活动开始了新鲜农家菜园团购活动开始了',
					imgList: ['https://img.yzcdn.cn/vant/cat.jpeg'],
				},
				{
					ongoing: true,
					msgType: 1,
					text:
						'新鲜农家菜园团购活动开始了，4月24日fdsahhfdjsakfhaskjhfashkfdas新鲜农家菜园团购活动开始了新鲜农家菜园团购活动开始了',
					imgList: [
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593586245110&di=427aaba2fa9bd4c7173b8b6760e55c6d&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350',
					],
				},
			],
			preview: {
				// 预览需要传递的数据
				show: false,
				groupData: {},
			},
		};
	},
	methods: {
		// 返回当前组件展示的数据
		callItemGroup(e) {
			//console.log(e)
			this.preview = {
				show: true,
				groupData: e,
			};
		},
	},
};
</script>

<style lang="scss">
.personal-home {
	.header {
		width: 100%;
		height: 300rpx;
		background: #f9475f;
		display: flex;
		flex-flow: column;
		align-items: center;
		.name,
		.explain {
			margin-top: 20rpx;
			color: #fff;
		}
		.name {
			font-size: 32rpx;
		}
		.explain {
			font-size: 24rpx;
		}
	}
	.active {
		padding: 10rpx 30rpx 30rpx 30rpx;
		box-sizing: border-box;
		.status-header {
			display: flex;
			align-items: center;
			width: 100%;
			height: 70rpx;
			.name-address {
				font-size: 28rpx;
				font-weight: bold;
				flex: 1;
			}
			.ongoing {
				width: 180rpx;
				height: 50rpx;
				font-size: 24rpx;
				color: #fff;
				text-align: center;
				line-height: 50rpx;
				background: #ff6120;
				border-radius: 25rpx;
			}
			.ongoing-stop {
				@extend .ongoing;
				background: #6b6b6b;
			}
		}
	}
}
</style>
