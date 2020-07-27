<template>
	<view class="set-goods-info">
		<view class="set-goods-title"><BecsTitle title="设置商品信息" @right="jumpGoodsLibrary" right-title="去商品库添加" /></view>
		<view class="set-goods-info">
			<view class="set-goods-info-li">
				<view class="filed"><BecsInput v-model="vaule" title="请填写商品名称（必填）" /></view>
				<view class="filed"><BecsInput v-model="vaule" title="商品介绍" /></view>
				<view class="upload-img-header">
					<!-- 添加标签 -->
					<view class="add-tags">
						<view style="padding-right: 10rpx;">
							<BecsTag :size="24">测试</BecsTag>
						</view>
						<view class="add-tags-button">
							<van-icon name="plus" size="24rpx" color="#fff" />
							<text>添加标签</text>
						</view>
					</view>
					<van-uploader :file-list="fileList" @after-read="afterRead">
						<view class="upload-photo">
							<view class="in-back"><van-icon name="plus" size="50rpx" color="#fff" /></view>
						</view>
					</van-uploader>
				</view>
				<view class="filed"><BecsInput v-model="vaule" title="规格" placeholder="请填写商品规格（必填）" /></view>
				<view class="filed"><BecsInput v-model="vaule" title="团购价" placeholder="请设置团购价，单位：元（必填）" /></view>
				<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" arrow-right title="阶梯价" placeholder="请设置2个阶梯价" /></view>
				<view class="filed filed-inline"><BecsInput v-model="vaule" flex="flex" arrow-right title="限制购买" placeholder="不限制" /></view>
				<!-- 当前商品项操作项 -->
				<view class="current-options">
					<view class="left">
						<van-button type="default" size="small">上移</van-button>
						<van-button type="default" size="small">下移</van-button>
						<van-button type="default" size="small">置顶</van-button>
					</view>
					<view><van-button type="default" size="small">删除</van-button></view>
				</view>
			</view>
			<!-- 添加商品 -->
			<view class="add-goods">
				<view class="add-goods-button">
					<van-icon name="plus" size="24rpx" color="#FF6120" />
					<text>添加商品</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {
	},
	data() {
		return {
			vaule: '',
			fileList: [],
		};
	},
	created() {},
	mounted() {},
	methods: {
		afterRead(e) {
			const { file } = e.detail;
			this.fileList.push({ ...file });
		},
		// 进入商品库
		jumpGoodsLibrary() {
			uni.navigateTo({
				url: '/pages/GoodsLibrary/GoodsLibrary'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
@import '../common.scss';
.set-goods-info {
	.set-goods-title {
		margin-top: 60rpx;
		padding: 30rpx 0;
	}
	.set-goods-info {
		@extend .content-flex;
		.add-tags {
			padding: 10rpx 0 10rpx 0;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			.add-tags-button {
				display: flex;
				align-items: center;
				height: 40rpx;
				display: inline-block;
				background: #ff6120;
				font-size: 24rpx;
				padding: 0 14rpx;
				color: #fff;
				line-height: 40rpx;
				border-radius: 20rpx;
			}
		}
		.add-goods {
			font-size: 24rpx;
			color: #ff6120;
			.add-goods-button {
				display: flex;
				align-items: center;
			}
		}
		.current-options {
			padding: 24rpx 0;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.left {
				width: 400rpx;
				display: flex;
				justify-content: space-around;
			}
		}
	}
}
</style>
