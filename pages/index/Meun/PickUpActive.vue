<template>
	<van-popup :show="show" position="bottom" custom-style="height: 40%;" @close="onClose">
		<view class="pickUp-active">
			<template v-for="(item, index) in activeList">
				<view class="active-li" :key="index">
					<view class="top">
						<view class="left">
							<text>取货点：</text>
							<text>{{ item.name }}</text>
						</view>
						<view class="right">
							<text>距取货时间剩余：</text>
							<van-count-down :time="item.time" />
						</view>
					</view>
					<view class="bottom">
						<template v-for="(foods, fid) in item.food">
							<text class="food-li" :key="fid">
								<text>{{ foods.name }}</text>
								<text>*</text>
								<text>{{ foods.num }}</text>
							</text>
						</template>
					</view>
				</view>
			</template>
		</view>
	</van-popup>
</template>

<script>
export default {
	data() {
		return {
			activeList: [
				{
					name: '云密城A座1楼',
					food: [{ name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }],
					time: 30 * 60 * 60 * 1000
				},
				{
					name: '云密城A座1楼',
					food: [{ name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }],
					time: 30 * 60 * 60 * 1000
				},
				{
					name: '云密城A座1楼',
					food: [{ name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }, { name: '青菜', num: 1 }],
					time: 30 * 60 * 60 * 1000
				}
			]
		};
	},
	props: {
		show: {
			type: Boolean,
			default: false,
		}
	},
	methods: {
		onClose() {
			this.$emit('update:show', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.pickUp-active {
	padding: 20rpx;
	.active-li {
		width: 100%;
		padding: 10rpx 0 25rpx 0;
		box-sizing: border-box;
		.top {
			display: flex;
			align-items: flex-start;
			font-size: 32rpx;
			.left {
				font-weight: 500;
				width: 390rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.right {
				display: flex;
				align-items: center;
				margin-left: auto;
				font-size: 26rpx;
				color: #999999;
			}
		}
		.bottom {
			margin-top: 15rpx;
			display: flex;
			align-items: center;
			width: 700rpx;
			font-size: 26rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			.food-li {
				margin-right: 20rpx;
			}
		}
	}
}
</style>
