<template>
	<van-dialog use-slot z-index="2000" show-cancel-button @cancel="onCancel" @confirm="onConfirm" :show="show" width="540rpx">
		<view class="select-community">
			<view class="title">
				<view class="li">群主页创建成功</view>
				<view class="li">是否同步个人主页的数据</view>
			</view>
			<view class="main">
				<template v-for="(item, index) in groupList">
					<view class="group-list" :key="index">
						<view class="left-check">
							<van-checkbox icon-size="50rpx" />
						</view>
						<view class="right-content">
							<view class="name">
								<view class="img-user">
									<van-image round width="45rpx" height="45rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
								</view>
								<view>彭培培</view>
							</view>
							<view class="num">
								<text>成员（共</text>
								<text>{{ item }}</text>
								<text>个）</text>
							</view>
						</view>
					</view>
				</template>
			</view>
		</view>
	</van-dialog>
</template>

<script>
export default {
	props: {
		show: {
			type: Boolean,
			show: true
		},
		groupList: {
			type: Array,
			default() {
				return [1,2,3]
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		onConfirm() {
			this.$emit('update:show', false);
		},
		onCancel() {
			this.$emit('update:show', false);
		}
	}
};
</script>

<style lang="scss" scoped>
.select-community {
	width: 540rpx;
	padding: 30rpx;
	.title {
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
		.li {
			margin-bottom: 5rpx;
		}
	}
	.main {
		padding: 35rpx 0 0 0;
		.left-check {
			margin-right: 20rpx;
		}
		.group-list {
			display: flex;
			align-items: center;
			padding: 10rpx 0 25rpx 0;
		}
		.right-content {
			.name {
				font-size: 30rpx;
				font-weight: bold;
				display: flex;
				align-items: center;
				margin-bottom: 10rpx;
				.img-user {
					margin-right: 10rpx;
					margin-top: 15rpx;
				}
			}
			.num {
				margin-top: 5rpx;
				color: #999999;
				font-size: 26rpx;
			}
		}
	}
}
</style>
