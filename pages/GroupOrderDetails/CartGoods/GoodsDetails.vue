<template>
	<van-popup closeable round overlay-style="top: -100rpx;" custom-style="bottom: 100rpx" :show="show" position="bottom" @close="onclose">
		<view class="goods-details">
			<GoodsCard stock-show />
			<view class="title">
				<gradients-title>
					商品简介
				</gradients-title>
			</view>
			<view class="info">
				<text>这是一段商品简介的描述文字，这是一段商品简介的描述文字，这是一段商品简介的描述文字，</text>
			</view>
			<view v-if="imgList.length > 0" class="img">
				<template v-for="(item,index) in imgList">
					<van-image :key="index" width="100%" height="250rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</template>
			</view>
		</view>
	</van-popup>
</template>

<script>
import GoodsCard from '@/common/components/GoodsCard.vue'
import GradientsTitle from '@/common/components/GradientsTitle.vue'
export default {
	components: {
		GoodsCard,
		GradientsTitle
	},
	data() {
		return {
			show: true,
			imgList: [12,3,4]
		};
	},
	created() {},
	mounted() {},
	methods: {
		onclose(e) {
			this.show = false;
		}
	}
};
</script>

<style lang="scss" scoped>
.goods-details {
	padding: 60rpx 30rpx 30rpx 30rpx;
	.title {
			width: 100%;
			padding: 20rpx 0;
		}
	.info {
		font-size: 18rpx;
		color: #535353;
		background: #F5F5F5;
		box-sizing: border-box;
		padding: 30rpx;
	}
}
</style>
