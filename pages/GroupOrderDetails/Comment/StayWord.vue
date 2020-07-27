<template>
	<van-popup :show="show" custom-style="border-radius: 7rpx;" @close="onClose">
		<view class="stay-word">
			<view class="header">
				<view>取消</view>
				<view class="is-leader">
					<text>发送给群主</text>
					<view class="switch-v"><van-switch active-color="#FF6120" size="30rpx" :checked="checked" @change="onChange" /></view>
				</view>
				<view>发送</view>
			</view>
			<textarea
				class="msg"
				placeholder-style="font-size: 24rpx;color: #999999;"
				placeholder="发表您的个人意见"
			/>
		</view>
	</van-popup>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			show: false,
			checked: false
		};
	},
	created() {},
	mounted() {},
	methods: {
		onClose(e) {
			this.show = false;
		},
		onChange({ detail }) {
			// 需要手动对 checked 状态进行更新
			this.checked = detail;
		}
	}
};
</script>

<style lang="scss" scoped>
.stay-word {
	width: 600rpx;
	height: 310rpx;
	box-sizing: border-box;
	padding: 30rpx;
	.header {
		font-size: 26rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		.is-leader {
			display: flex;
			align-items: center;
			padding-left: 50rpx;
			margin-right: auto;
			.switch-v {
				padding-left: 30rpx;
				margin-top: 10rpx;
			}
		}
	}
	.msg {
		margin-top: 5rpx;
		font-size: 24rpx;
		width: 100%;
		background: rgba(105, 104, 104, 0.15);
		box-sizing: border-box;
		padding: 20rpx;
		border-radius: 5rpx;
		height: 200rpx;
	}
}
</style>
