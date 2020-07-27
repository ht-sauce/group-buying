<template>
	<view class="info-manage" :style="{height: type === 'edit' ? 'auto' : '380rpx' }">
		<template v-if="type === 'info'">
			<view class="title-opt">
				<view class="name">卖菜叔叔的团购群</view>
				<view class="tag">退群</view>
			</view>
			<view class="info">
				<text>
					这是衣短裙的简介内容这是衣短裙的简介内容这是衣短裙的简介内容这是衣短裙的简介内容这是衣短裙的简介内容这是衣短裙的简介内容这是衣短裙的简介内容
				</text>
			</view>
		</template>

		<view class="opt-nums">
			<view class="opt-li">
				<view class="num">20</view>
				<view>成员</view>
			</view>
			<view class="opt-li">
				<view class="num">30</view>
				<view>活动</view>
			</view>
			<view class="opt-li">
				<view class="num">1111</view>
				<view>参与人次</view>
			</view>
		</view>
		<template v-if="type === 'edit'">
			<view class="manage">
				<template v-for="(item, index) in manageList">
					<view class="button" :key="index">
						<image class="img" :src="item.img"></image>
						<text class="name">{{ item.name }}</text>
					</view>
				</template>
			</view>
		</template>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type: 'info', // edit 管理，info查看
			manageList: [
				{ name: '成员管理', img: '/static/pages/icon-light-user.png' },
				{ name: '订单管理', img: '/static/pages/icon-light-record.png' },
			],
		};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.info-manage {
	background: #fff;
	width: 100%;
	// height: 380rpx;
	padding: 30rpx;
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
}
.title-opt {
	display: flex;
	justify-content: space-between;
	.name {
		font-weight: bold;
	}
	.tag {
		height: 30rpx;
		width: 70rpx;
		border-radius: 15rpx;
		font-size: 22rpx;
		border: #000 1px solid;
		line-height: 30rpx;
		text-align: center;
	}
}
.info {
	font-size: 26rpx;
	margin-top: 20rpx;
	flex: 1;
}
.opt-nums {
	display: flex;
	align-items: center;
	.opt-li {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		width: 30%;
	}
	.num {
		padding-bottom: 10rpx;
		font-size: 40rpx;
		font-weight: bold;
	}
}
.manage {
	display: flex;
	align-items: center;
	box-sizing: border-box;
	justify-content: space-between;
	padding-top: 20rpx;
	.button {
		background: rgba(255, 97, 32, 0.06);
		font-size: 30rpx;
		font-weight: bold;
		height: 110rpx;
		width: 330rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ff6120;
		.img,
		.name {
			padding: 0 5rpx;
		}
		.img {
			width: 50rpx;
			height: 50rpx;
		}
	}
}
</style>
