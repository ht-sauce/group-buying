<template>
	<van-dialog
		use-slot
		use-title-slot
		:show="show"
		custom-style="border-radius: 20rpx;font-weight: bold;"
		show-cancel-button
		@cancel="onCancel"
		@confirm="onConfirm"
		confirm-button-color="#000000"
		cancel-button-color="#000000"
		width="520rpx"
	>
		<view solt="title" style="text-align: center;">
			<text style="font-weight: bold;font-size: 30rpx;">设置分类标题</text>
		</view>
		<view class="add-class">
			<input
				class="class-name"
				value=""
				placeholder="请输入分类名称"
				placeholder-style="font-size: 30rpx;color: #D2D2D2;"
			/>
		</view>
	</van-dialog>
</template>

<script>
export default {
	props: {
		show: Boolean
	},
	data() {
		return {}
	},
	methods: {
		onCancel() {
			this.$emit('update:show', false)
		},
		onConfirm() {
			this.$emit('update:show', false)
		}
	}
}
</script>

<style lang="scss" scoped>
.add-class {
	width: 100%;
	padding: 60rpx 0 50rpx 0;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	.class-name {
		width: 400rpx;
		height: 80rpx;
		border-radius: 8rpx;
		line-height: 80rpx;
		font-size: 30rpx;
		padding: 0 20rpx;
		border: 1px solid #979797;
		font-weight: 500;
	}
}
</style>
