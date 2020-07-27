<template>
	<GlobalPage title="成员详情" bgHeight="120" gbImage="/static/nav/bg-img.png">
		<view class="member-details">
			<view class="member" :style="{ top: topHeight }">
				<view class="mem-img">
					<van-image round width="80rpx" height="80rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					<view class="options" @click="popoverShow = !popoverShow"><van-icon size="40rpx" name="bars" /></view>
					<view class="popover" v-show="popoverShow">
						<view class="block">拉黑</view>
						<view class="del">删除</view>
					</view>
				</view>
				<view class="nick-name"><text>妙蛙种子</text></view>
				<view class="details">
					<view class="det-li">
						<view class="num">323</view>
						<view class="num-tit">浏览</view>
					</view>
					<view class="det-li">
						<view class="num">323</view>
						<view class="num-tit">参与活动</view>
					</view>
					<view class="det-li">
						<view class="num">323</view>
						<view class="num-tit">消费金额</view>
					</view>
				</view>
			</view>
			<view style="width: 750rpx;" :style="{ height: topHeight }"></view>
			<view class="record">
				<template v-for="(item, index) in recordList">
					<ItemRecord :key="index" :record="item" />
				</template>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import ItemRecord from './ItemRecord.vue';
export default {
	components: {
		ItemRecord
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight + 10 + 'px';
		}
	},
	data() {
		return {
			popoverShow: false,
			recordList: [{ type: 1 }, { type: 2 }, { type: 3 }, { type: 1 }]
		};
	}
};
</script>

<style lang="scss">
.member-details {
	.popover {
		width: 110rpx;
		position: absolute;
		box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.4);
		right: 30rpx;
		top: 70rpx;
		border-radius: 5rpx;
		.block,.del {
			font-size: 22rpx;
			width: 100%;
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
		}
	}
	.member {
		width: 690rpx;
		height: 300rpx;
		border-radius: 20rpx;
		margin-left: 30rpx;
		box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.22);
		background-color: #fff;
		position: fixed;
		z-index: 2000;
		display: flex;
		flex-flow: column;
		align-items: center;
		box-sizing: border-box;
		padding: 20rpx;
		.options {
			position: absolute;
			right: 20rpx;
			top: 20rpx;
		}
		.nick-name {
			margin-top: 10rpx;
			font-weight: bold;
		}
		.details {
			margin-top: 20rpx;
			display: flex;
			width: 100%;
			.det-li {
				width: 33.33%;
				display: flex;
				flex-flow: column;
				align-items: center;
				justify-content: center;
				.num {
					font-weight: bold;
					font-size: 36rpx;
					padding-bottom: 10rpx;
				}
			}
		}
	}
	.record {
		margin-top: 30rpx;
		width: 100%;
		min-height: 70vh;
		background-color: #fff;
	}
}
</style>
