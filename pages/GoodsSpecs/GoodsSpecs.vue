<template>
	<GlobalPage title="选择商品规格">
		<view class="goods-specs">
			<view class="search">
				<input class="search-input" placeholder="请输入自定义规格" placeholder-style="color: #999999;" >
			</view>
			<view class="often-class">
				<view class="title">常用规格</view>
				<template v-for="(item, index) in oftenClass">
					<view class="tag-li" :key="index">
						<BecsTag v-model="check" :size="26">{{ item }}</BecsTag>
					</view>
				</template>
			</view>
			<BecsButton background="#FF6120"><text>确定</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			check: true,
			oftenClass: ['网红美食', '店长推荐', '热销商品','发发呆', '金科股份', '大沙发发呆', '逆风'],
		}
	},
	created() {
		
	},
	mounted() {
		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.goods-specs {
	padding: 30rpx;
	font-size: 30rpx;
	min-height: 100vh;
	width: 100%;
	background: #ffffff;
	box-sizing: border-box;
	.search {
		width: 100%;
		> input {
			padding: 20rpx 30rpx;
			border-radius: 20rpx;
			border: 1px solid #979797;
			background: #F8F8F8;
		}
	}
}
.often-class {
	margin-top: 30rpx;
	.title {
		font-weight: bold;
		padding-bottom: 20rpx;
	}
	.tag-li {
		padding: 10rpx 25rpx;
		display: inline-block;
	}
}
</style>
