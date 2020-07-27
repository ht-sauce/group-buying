<template>
	<view class="order-info-item" :style="[...customStyle]">
		<template v-for="(item, index) in list">
			<view :key="index" class="order-li">
				<view class="title">{{ item.title }}</view>
				<view class="info">{{ item.value }}</view>
			</view>
		</template>
	</view>
</template>

<script>
export default {
	components: {},
	props: {
		customStyle: {
			type: Object,
			default() {
				return {}
			}
		}, // 自定义样式
		list: {
			type: Array,
			default() {
				return [
					{title: '', value: ''}
				]
			}
		},
	},
	data() {
		return {}
	},
	created() {
		
	},
	mounted() {
		console.log(this.customStyle)
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.order-info-item {
	width: 100%;
	box-sizing: border-box;
	padding: 30rpx;
	font-size: 28rpx;
	background: #fff;
	.order-li {
		display: flex;
		align-items: center;
		padding: 10rpx;
		.title {
			color: #666666;
		}
		.info {
			flex: 1;
			text-align: right;
			color: #090909;
			font-weight: bold;
		}
	}
}
</style>
