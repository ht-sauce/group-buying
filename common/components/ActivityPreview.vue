<!-- 活动查看组件 -->
<template>
	<van-popup z-index="2000" :show="show">
		<view class="activity-preview">
			<!-- 占位div -->
			<view style="width: 750rpx; background: #000;" :style="{ height: sysHeight }"></view>
			<view class="head">
				<view class="left">
					<van-image round width="80rpx" height="80rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
					<view class="nick"><text>小智</text></view>
				</view>
				<view class="right" @click="onClose"><van-icon name="cross" /></view>
			</view>
			<view class="main">
				<view class="page">
					<text>{{ page }}</text>
					<text>/</text>
					<text>{{ groupData.imgList.length ? groupData.imgList.length : 1 }}</text>
				</view>
				<swiper @change="swChange" class="look-swiper">
					<template v-for="(item, index) in groupData.imgList">
						<swiper-item class="look-img" :key="index">
							<image mode="widthFix" :src="item"></image>
						</swiper-item>
					</template>
				</swiper>
			</view>
			<view class="footer-text">
				<text>fdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsafdsafsafdsafdsa</text>
			</view>
		</view>
	</van-popup>
</template>

<script>
export default {
	data() {
		return {
			page: 1, // 当前图片第几页
		};
	},
	computed: {
		sysHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight + 'px';
		}
	},
	props: {
		groupData: {
			type: Object,
			default() {
				return {}
			}
		},
		show: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		groupData: {
			deep: true,
			handler(e) {
				console.log(111, e)
			}
		}
	},
	mounted() {
		console.log(this.groupData)
	},
	methods: {
		onClose() {
			this.$emit('update:show', false)
		},
		swChange(e) {
			this.page = e.detail.current + 1
		}
	}
};
</script>

<style lang="scss" scoped>
.activity-preview {
	width: 100%;
	height: 100vh;
	background: #000;
	color: #fff;
	.head {
		height: 100rpx;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 25rpx;
		box-sizing: border-box;
		.left {
			display: flex;
			align-items: center;
			.nick {
				font-size: 44rpx;
				margin-left: 20rpx;
				line-height: 70rpx;
				height: 80rpx;
			}
		}
		.right {
			margin-left: auto;
			font-size: 50rpx;
			height: 100%;
			display: flex;
			align-items: flex-start;
		}
	}
	.main {
		margin-top: 30rpx;
		width: 750rpx;
		min-height: 500rpx;
		overflow: hidden;
		.page {
			display: flex;
			width: 100%;
			justify-content: flex-end;
			margin-bottom: 20rpx;
			color: #fff;
			font-size: 28rpx;
			box-sizing: border-box;
			padding: 0 40rpx;
		}
		.look-swiper {
			width: 750rpx;
			height: 50vh;
		}
		.look-img {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
	}
	.footer-text {
		width: 100%;
		font-size: 28rpx;
		color: #fff;
		position: absolute;
		bottom: 100rpx;
		box-sizing: border-box;
		word-break:break-all;
		word-wrap:break-word;
		box-sizing: border-box;
		padding:0 40rpx;
	}
}
</style>
