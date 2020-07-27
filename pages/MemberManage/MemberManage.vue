<template>
	<GlobalPage title="成员">
		<view class="member-manage">
			<view class="search">
				<view class="van-input">
					<van-search custom-class="root-search" field-class="search-mem" placeholder="搜索成员" />
				</view>
				<image src="/static/pages/icon-user-add.png"></image>
			</view>
			<view class="title">
				<text>我的成员（</text>
				<text>10</text>
				<text>）:</text>
			</view>
			<view class="member-list">
				<template v-for="(item, index) in memberList">
					<view @click="openMemberDetail(item)" class="mem-li" :key="index">
						<view class="nick-img">
							<van-image width="70rpx" height="70rpx" radius="5rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" />
						</view>
						<view class="nick-name">
							<text>神奇宝贝</text>
						</view>
						<van-icon color="#767682" size="40rpx" name="arrow" />
					</view>
				</template>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	data() {
		return {
			memberList: [1,2,3,5]
		};
	},
	methods: {
		openMemberDetail() {
			uni.navigateTo({
				url: '/pages/MemberDetails/MemberDetails'
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.member-manage {
	width: 100%;
	min-height: 100vh;
	background: #fff;
	padding: 20rpx 30rpx 30rpx 30rpx;
	.search {
		width: 690rpx;
		display: flex;
		align-items: center;
		.van-input {
			flex: 1;
		}
		> image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	/deep/ .root-search {
		padding: 0;
	}
	/deep/ .search-mem {
		background: #F4F4F4;
	}
	.title {
		font-weight: bold;
		padding-top: 15rpx;
	}
	.member-list {
		margin-top: 10rpx;
	}
	.mem-li {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		width: 690rpx;
		height: 100rpx;
		.nick-img {
			margin-top: 5rpx;
		}
		.nick-name {
			flex: 1;
			padding-left: 20rpx;
		}
	}
}
</style>
