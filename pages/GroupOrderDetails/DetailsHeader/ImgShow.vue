<template>
	<view class="img-show">
		<template v-if="imgList.length === 1">
			<view class="one-img"><van-image width="100%" height="100%" radius="5rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" /></view>
		</template>
		<template v-else-if="imgList.length > 1">
			<view class="many-img">
				<template v-for="(item, index) in imgList" v-if="index < 9">
					<van-image :key="index" width="200rpx" height="200rpx" radius="5rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
				</template>
			</view>
		</template>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			imgList: [1,2,3,4,1,2,3,4,1,2,3,4]
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.img-show {
	padding: 20rpx 0;
}
.one-img {
	width: 100%;
	height: 350rpx;
}
.many-img {
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	justify-content: space-between;
}
</style>
