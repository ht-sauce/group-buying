<template>
	<GlobalPage title="我加入的社群">
		<view class="community-to-join">
			<template v-for="(item, index) in list">
				<view class="group-li">
					<view class="img-nick">
						<van-image
							width="70rpx"
							radius="6rpx"
							height="70rpx"
							src="https://img.yzcdn.cn/vant/cat.jpeg"
						/>
						<view class="leader">
							<van-tag round color="#FC693A">群主</van-tag>
						</view>
					</view>
					<view class="nick-name">
						<view class="nick">
							<text style="padding-right: 6rpx;">皮卡丘</text>
							<van-tag color="#FFA03A">
								<text>已认证</text>
								<van-icon name="arrow" />
							</van-tag>
						</view>
						<view class="num">成员23</view>
					</view>
					<image class="out-img" src="/static/pages/icon-out.png"></image>
				</view>
			</template>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			list: [12, 3, 3, 4, 44, 5, 5, 5],
		};
	},
	created() {},
	mounted() {},
	methods: {},
};
</script>

<style lang="scss" scoped>
.community-to-join {
}
.group-li {
	background: #fff;
	box-sizing: border-box;
	padding: 15rpx 30rpx;
	display: flex;
	align-items: center;
	width: 100%;
	.img-nick {
		position: relative;
		margin-top: 6rpx;
		.leader {
			position: absolute;
			right: -14rpx;
			bottom: -6rpx;
		}
	}
	.nick-name {
		flex: 1;
		box-sizing: border-box;
		padding: 0 30rpx;
		.nick,.num {
			padding: 4rpx 0;
		}
		.nick {
			font-size: 26rpx;
			display: flex;
			align-items: center;
		}
		.num {
			color: #999999;
			font-size: 20rpx;
		}
	}
	.out-img {
		width: 30rpx;
		height: 30rpx;
	}
}
</style>
