<template>
	<GlobalPage title="取货点管理">
		<view class="pick-up-point">
			<template v-for="(item, index) in [1,2,3]">
				<view class="address-li" :key="index">
					<view class="setting">
						<view class="set-name">
							<text>位置：</text>
							<text>位置：云密城A座</text>
						</view>
						<view class="options"><van-icon size="40rpx" name="setting-o" /></view>
						<view class="popover" v-show="true">
							<view class="block">拉黑</view>
							<view class="del">删除</view>
						</view>
					</view>
					<view>
						<text>详细地址：</text>
						<text>一楼大厅门口</text>
					</view>
					<view>
						<text>联系人：</text>
						<text>彭培培（17788889999）</text>
					</view>
				</view>
			</template>
			<view class="occupy"></view>
			<view class="footer">
				<BecsButton background="#FF6120" @click.native="onAddAddress">
					<view class="footer-info">
						<view class="footer-icon"><van-icon name="plus" /></view>
						<text>新增收货地址</text>
					</view>
				</BecsButton>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		onAddAddress() {
			uni.navigateTo({
				url: '/pages/PickUpPointUpdate/PickUpPointUpdate'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.pick-up-point {
}
.address-li {
	font-weight: bold;
	width: 100%;
	box-sizing: border-box;
	padding: 30rpx;
	color: #070707;
	font-size: 28rpx;
	background: #fff;
	> view {
		padding: 5rpx 0;
	}
	.setting {
		display: flex;
		.set-name {
			flex: 1;
		}
		.options {
			position: absolute;
			right: 30rpx;
		}
		.popover {
			width: 110rpx;
			position: absolute;
			box-shadow: 0 0 5rpx rgba(0, 0, 0, 0.4);
			right: 60rpx;
			border-radius: 5rpx;
			margin-top: 40rpx;
			.block,.del {
				font-size: 22rpx;
				width: 100%;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
			}
		}
	}
}
.occupy {
	width: 100%;
	height: 100rpx;
}
.footer {
	.footer-info {
		color: #fff;
		display: flex;
		align-items: center;
	}
	.footer-icon {
		margin: 5rpx 15rpx 0 0;
		font-size: 36rpx;
	}
}
</style>
