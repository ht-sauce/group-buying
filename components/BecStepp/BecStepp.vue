<template>
	<view class="bec-stepp">
		<template v-if="value">
			<image @click="onDel" class="img" src="/static/pages/icon-splice.png"></image>
			<view class="nums">{{ value }}</view>
		</template>
		<image @click="onAdd" class="img" src="/static/pages/icon-add.png"></image>
	</view>
</template>

<script>
export default {
	props: {
		value: Number
	},
	data() {
		return {
		}
	},
	methods: {
		onAdd() {
			const value = this.value + 1
			this.$emit('input', value)
			this.$emit('change', value)
		},
		onDel() {
			const value = this.value - 1
			this.$emit('input', value)
			this.$emit('change', value)
		}
	}
};
</script>

<style lang="scss" scoped>
.bec-stepp {
	display: flex;
	align-items: center;
	.img {
		width: 40rpx;
		height: 40rpx;
	}
	.nums {
		font-size: 22rpx;
		color: #1A1A1A;
		padding: 0 15rpx;
	}
}
</style>
