<template>
	<GlobalPage title="商品库">
		<view class="goods-library">
			<view class="header">
				<view class="search">
					<van-search shape="round" custom-class='root-search' :value="search" placeholder="搜索商品名称" />
				</view>
				<van-button type="default" size="small">添加新商品</van-button>
			</view>
			<view class="goods">
				<view class="left">
					<template v-for="(item, index) in leftList">
						<view class="silder" :class="{'silder-active': item.active }" :key="index">
							<view v-show="item.active" class="line"></view>
							<view class="title">蔬菜类</view>
						</view>
					</template>
					<view @click="jumpGoodsClass" class="silder">
						<view class="title" style="font-weight: bold;">
							<view class="icon">
								<van-icon name="setting-o" size="38rpx" />
							</view>
							<text>分类管理</text>
						</view>
					</view>
				</view>
				<view class="right">
					<template v-if="goodsList.length > 0">
						<template v-for="(item, index) in goodsList">
							<view class="goods-li" :key="index">
								<GoodsCard stockShow :show-stepp="false" />
								<view class="">
									<van-checkbox />
								</view>
							</view>
						</template>
					</template>
					<template v-else>
						<view class="no-goods">
							<image src="/static/pages/EmptyBox.png"></image>
							<view class="tips">暂无商品，快去添加新商品吧</view>
						</view>
					</template>
				</view>
			</view>
			<BecsButton background="#FF6120"><text>确定</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
import GoodsCard from '@/common/components/GoodsCard.vue'
export default {
	components: {
		GoodsCard
	},
	data() {
		return {
			search: '',
			leftList: [{active: false},{active: true},{active: false},{active: false},{active: false},],
			goodsList: [1,2,3,3,4],
		};
	},
	methods: {
		jumpGoodsClass() {
			uni.navigateTo({
				url: '/pages/GoodsClassMange/GoodsClassMange'
			})
		}
	},
}
</script>

<style lang="scss" scoped>
.goods-library {
	background: #fff;
	width: 750rpx;
	min-height: 100vh;
	padding-bottom: 120rpx;
}
.header {
	box-sizing: border-box;
	padding: 30rpx;
	display: flex;
	align-items: center;
	/deep/ .root-search {
		padding: 0 25rpx 0 0;
	}
	.search {
		flex: 1;
	}
}
.goods {
	width: 100%;
	display: flex;
	.left {
		width: 200rpx;
	}
	.silder {
		width: 100%;
		height: 90rpx;
		display: flex;
		background: #F8F8F8;
		.icon {
			padding-right: 10rpx;
			margin-top: 10rpx;
		}
		.line {
			height: 100%;
			width: 5rpx;
			background: backLiner(to bottom);
		}
		.title {
			flex: 1;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.silder-active {
		width: 200rpx;
		//position: absolute;
		font-weight: bold;
		background: #fff;
		box-shadow: 0rpx 2rpx 4rpx -4rpx rgba(142, 142, 142, 0.3);
	}
}
.right {
	flex: 1;
	.goods-li {
		width: 100%;
		padding: 10rpx 20rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.no-goods {
		min-height: 500rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-flow: column;
		> image {
			width: 300rpx;
			height: 250rpx;
		}
		.tips {
			padding-top: 20rpx;
			color: #898888;
			font-size: 26rpx;
		}
	}
}
</style>
