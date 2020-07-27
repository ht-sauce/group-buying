<template>
	<van-popup round :show="show" position="bottom" custom-style="height: 40%;border-top-left-radius: 10rpx;border-top-right-radius: 10rpx;" @close="onClose">
		<view class="switch-group">
			<ItemGroup title="可使用（高级群）" />
			<ItemGroup title="个人" />
		</view>
	</van-popup>
</template>

<script>
import ItemGroup from "./ItemGroup.vue"
export default {
	components: {
		ItemGroup
	},
	data() {
		return {
			seniorGropu: [1,2,3]
		};
	},
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		onClose() {
			this.$emit('update:show', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.switch-group {
	padding: 30rpx 20rpx 20rpx 20rpx;
	.header {
		display: flex;
		align-items: center;
		.line {
			margin-right: 15rpx;
			width: 10rpx;
			height: 50rpx;
			background: backLiner(to bottom);
		}
	}
}
</style>
