<template>
	<view class="becs-tag" :class="{'becs-tag-check': value}" :style="{fontSize: size + 'rpx'}">
		<slot></slot>
	</view>
</template>

<script>
export default {
	props: {
		value: Boolean, // 是否选中
		size: {
			type: Number,
			default: 18
		} // 字体大小
	},
	data() {
		return {}
	},
	methods: {
		onCheck() {
			const value = !value
			this.$emit('input', value)
			this.$emit('change', value)
		},
	}
};
</script>

<style lang="scss" scoped>
.becs-tag {
	display: inline-block;
	background: rgba(255, 133, 82, 0.1);
	font-size: 18rpx;
	color: #FF6120;
	padding: 7rpx 15rpx;
	border-radius: 6rpx;
	border: 1px solid #FFB291;
	margin: 0 4rpx;
}
.becs-tag-check {
	background: #FF6120;
	color: #fff;
}
</style>
