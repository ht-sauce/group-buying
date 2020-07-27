<template>
	<!-- 团购单项组件 -->
	<view @click="onGroup" class="content-page-item">
		<!-- 不感兴趣遮罩 -->
		<view class="overlay" @click="overlayShow = false" :style="{height: overlayHeight }" v-if="overlayShow">
			<view class="no-like" @click.stop="noLickClick">
				<image class="no-like-img" src="/static/pages/no-like.png"></image>
				<text>活动不感兴趣</text>
			</view>
		</view>
		<!-- 顶部信息 -->
		<view class="head">
			<!-- 顶部可以自定义 -->
			<slot>
				<view class="left">
					<van-image 
						round 
						width="80rpx" 
						height="80rpx" 
						:src="groupData.msgType === 1 ? 'https://img.yzcdn.cn/vant/cat.jpeg' : '/static/pages/headSculpturSyse.png'" />
				</view>
				<view class="center">
					<view class="nick-name"><text>小智</text></view>
					<view>
						<text class="mr-right">2小时前</text>
						<text>发布</text>
					</view>
				</view>
				<view class="right" v-if="groupData.msgType === 1">
					<view v-show="groupData.ongoing" class="ongoing"><text>团购进行中</text></view>
					<view v-show="!groupData.ongoing" class="ongoing-stop"><text>团购结束</text></view>
				</view>
			</slot>
		</view>
		<!-- 中间内容展示 -->
		<view class="content-text">
			<view class="top"><text>{{ groupData.text }}</text></view>
			<view class="bottom" @click.stop="onClickImg">
				<template v-if="groupData.imgList.length > 1">
					<template v-for="(item, index) in groupData.imgList">
						<view class="img-li" :key="index">
							<van-image lazy-load show-menu-by-longpress image-class="goods-img" width="200rpx" height="200rpx" :src="item" />
						</view>
					</template>
				</template>
				<template v-else>
					<image mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593515058280&di=f0a7a44e3778e8faac5e4b1bef1a165e&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853"></van-image>
				</template>
			</view>
		</view>
		<!-- 底部控制 -->
		<view class="bottom-bar">
			<view v-show="groupData.msgType === 1" class="price">
				<text class="rmb">¥</text>
				<text>0</text>
				<text class="sign">~</text>
				<text>20</text>
			</view>
			<view class="tabs">
				<view class="icon-click">
					<image class="icon-img" src="/static/pages/look.png"></image>
					<text class="icon-img-num">80</text>
				</view>
				<view class="icon-click">
					<image class="icon-img" src="/static/pages/user.png"></image>
					<text class="icon-img-num">12</text>
				</view>
				<!-- 分享当前的团购信息 -->
				<view class="icon-click">
					<image class="icon-img" src="/static/pages/share.png"></image>
				</view>
				<!-- 不感兴趣按钮 -->
				<view class="icon-click" @click="overlayClick">
					<image class="icon-img" src="/static/pages/more.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			msgType: 1, // 1团购消息 2系统消息, 3通知消息
			overlayShow: false, // 遮罩是否展示
			overlayHeight: '200px'
		};
	},
	props: {
		groupData: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	methods: {
		// 本身点击
		onGroup() {
			this.$emit('clickGroup', this.groupData)
		},
		// 图片点击
		onClickImg() {
			this.$emit('clickImg', this.groupData)
		},
		// 展示遮罩信息
		overlayClick() {
			this.overlayShow = !this.overlayShow
			const query = uni.createSelectorQuery().in(this);
			query.select(".content-page-item").boundingClientRect(data => {
			  this.overlayHeight = data.height + 'px'
			}).exec();
		},
		noLickClick() {
			console.log("不感兴趣")
		},
	}
};
</script>

<style lang="scss" scoped>
.content-page-item {
	background: #fff;
	margin-bottom: 10rpx;
	padding: 20rpx;
	box-shadow: $g-shadow;
	border-radius: 5rpx;
	.overlay {
		width: 690rpx;
		min-height: 400rpx;
		background: rgba(0, 0, 0, 0.5);
		position: absolute;
		z-index: 10;
		border-radius: 5rpx;
		margin-left: -20rpx;
		margin-top: -20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		.no-like {
			width: 550rpx;
			height: 100rpx;
			border-radius: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 600;
			background: #fff;
			box-shadow: $g-shadow;
			&:hover {
				background: #f9f9f9;
			}
			.no-like-img {
				width: 40rpx;
				height: 40rpx;
				margin-right: 20rpx;
			}
		}
	}
	.head {
		display: flex;
		align-items: center;
		.left {
		}
		.center {
			padding: 0 20rpx;
			flex: 1;
			color: #737373;
			font-size: 22rpx;
			.nick-name {
				font-size: 30rpx;
				font-weight: 600;
				color: #000;
			}
			.mr-right {
				margin-right: 15rpx;
			}
		}
		.right {
			height: 80rpx;
			display: flex;
			align-items: flex-start;
			.ongoing {
				width: 180rpx;
				height: 50rpx;
				font-size: 24rpx;
				color: #fff;
				text-align: center;
				line-height: 50rpx;
				background: #ff6120;
				border-radius: 25rpx;
			}
			.ongoing-stop {
				@extend .ongoing;
				background: #6b6b6b;
			}
		}
	}
	.content-text {
		.top {
			word-break:break-all;
			font-size: 28rpx;
			word-wrap:break-word;
			margin-bottom: 15rpx;
		}
		.bottom {
			display: flex;
			flex-wrap: wrap;
			.img-li {
				margin-right: 15rpx;
			}
			/deep/ .goods-img {
				border-radius: 10rpx;
			}
			/deep/ .custom-img {
				min-width: 100rpx;
				max-width: 750rpx;
			}
		}
	}
	.bottom-bar {
		margin-top: 15rpx;
		display: flex;
		align-items: center;
		.price {
			color: #FA4C5B;
			font-weight: 600;
			font-size: 36rpx;
			.rmb {
				font-size: 22rpx;
				margin-right: 5rpx;
			}
		}
		.tabs {
			display: flex;
			align-items: center;
			font-size: 28rpx;
			margin-left: auto;
			.icon-click {
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.icon-img-num {
				padding: 0 5rpx;
			}
			.icon-img {
				width: 30rpx;
				height: 30rpx;
				padding: 10rpx;
			}
		}
	}
}
</style>
