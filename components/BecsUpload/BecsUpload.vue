<template>
	<view class="becs-upload">
		<template v-if="!img">
			<view class="upload-back">
				<van-icon name="plus" />
			</view>
		</template>
		<template v-else>
			<van-image round width="100rpx" height="100rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		</template>
	</view>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			img: "1"
		}
	}
}
</script>

<style lang="scss" scoped>
.becs-upload {
	.upload-back {
		width: 100rpx;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #D8D8D8;
		color: #fff;
		font-size: 50rpx;
	}
}
</style>
