<template>
	<GlobalPage title="分类管理">
		<view class="goods-class-mange">
			<BecsTitle line-height="60rpx" title="已有分类">
				<view class="slot-right">
					<van-button @click="show = true" type="default" custom-class="cus-button" size="small">
						添加分类
					</van-button>
				</view>
			</BecsTitle>
			<view class="have-class">
				<template v-for="(item, index) in classList">
					<view class="have-class-li">
						<view class="nums">{{ index + 1 }}</view>
						<view class="title">{{ item }}</view>
						<BecsBubble>
							<view class="icon"><van-icon name="ellipsis" size="50rpx" color="#FF6120" /></view>
							<view class="options" slot="content">
								<view class="options-li">移到最前</view>
								<view class="options-li">修改名称</view>
								<view class="options-li">删除</view>
							</view>
						</BecsBubble>
					</view>
				</template>
			</view>

			<BecsTitle line-height="60rpx" title="常用分类" />
			<view class="often-class">
				<template v-for="(item, index) in oftenClass">
					<view class="tag-li" :key="index">
						<BecsTag v-model="check" :size="26">{{ item }}</BecsTag>
					</view>
				</template>
			</view>

			<!-- 添加分类 -->
			<AddClass :show.sync="show" />
		</view>
	</GlobalPage>
</template>

<script>
import AddClass from './AddClass.vue'
export default {
	components: {
		AddClass
	},
	data() {
		return {
			show: false,
			classList: ['网红美食', '网红美食', '店长推荐', '热销商品', '发发呆'],
			oftenClass: ['网红美食', '店长推荐', '热销商品', '发发呆', '金科股份', '大沙发发呆', '逆风'],
			check: true
		}
	}
}
</script>

<style lang="scss" scoped>
.goods-class-mange {
	padding: 30rpx 0;
}
.slot-right {
	box-sizing: border-box;
	padding-right: 30rpx;
	font-size: 26rpx;
	/deep/ .cus-button {
		background: transparent;
		color: #7a7373;
		border: 1px solid #979797;
	}
}
.have-class {
	color: #393939;
	padding: 30rpx;
	box-sizing: border-box;
	.have-class-li {
		width: 100%;
		display: flex;
		align-items: center;
		font-size: 26rpx;
		font-weight: bold;
		padding: 20rpx 0;
		border-bottom: 1px solid #d2d2d2;
		.nums {
			padding-right: 30rpx;
		}
		.title {
			flex: 1;
		}
		.icon {
			transform: rotate(90deg);
			> image {
				width: 100%;
				height: 100%;
			}
		}
	}
}
.options {
	padding: 10rpx;
	.options-li {
		font-size: 20rpx;
		padding: 10rpx 16rpx;
		color: #2c2c2c;
	}
}
.often-class {
	margin-top: 20rpx;
	.tag-li {
		padding: 10rpx 25rpx;
		display: inline-block;
	}
}
</style>
