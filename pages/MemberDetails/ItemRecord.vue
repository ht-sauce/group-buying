<template>
	<view class="item-record">
		<view class="icon">
			<image :src="imgType[record.type]"></image>
			<text>{{ imgTypeTitle[record.type] }}</text>
		</view>
		<view class="name">活动名称</view>
		<view class="time">10分钟</view>
	</view>
</template>

<script>
	export default {
		props: {
			record: {
				type: Object,
				default() {
					return {}
				}
			},
		},
		data() {
			return {
				imgType: {
					1: "/static/pages/look.png",
					2: "/static/pages/user.png",
					3: "/static/pages/icon-msg.png"
				},
				imgTypeTitle: {
					1: "浏览",
					2: "参与",
					3: "评论"
				}
			};
		}
	};
	</script>
</script>

<style lang="scss" scoped>
.item-record {
	width: 100%;
	height: 90rpx;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	padding: 30rpx;
	.icon {
		display: flex;
		align-items: center;
		padding-right: 15rpx;
		image {
			width: 40rpx;
			height: 40rpx;
			padding-right: 10rpx;
		}
	}
	.name {
		flex: 1;
	}
	.time {
		font-size: 22rpx;
		color: #999999;
	}
}
</style>
