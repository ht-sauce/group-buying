<template>
	<view class="comment">
		<gradients-title>
			<view class="comment-header">
				<image src="/static/pages/icon-active.png"></image>
				<text>活动留言</text>
			</view>
		</gradients-title>
		<view class="list">
			<van-search use-left-icon-slot shape="round" placeholder="快来写下你对活动的意见及想法吧！">
				<image slot="left-icon" class="input-icon" src="/static/pages/icon-edit.png"></image>
			</van-search>
			<view class="comment-li">
				<template v-for="(item, index) in list">
					<view class="li" :key="index">
						<view class="nick-name">
							<view class="nick-img"><van-image width="40rpx" round height="40rpx" src="https://img.yzcdn.cn/vant/cat.jpeg" /></view>
							<view class="nick">皮卡丘</view>
							<view class="time">1小时</view>
						</view>
						<view class="msg">新鲜吗</view>
					</view>
				</template>
			</view>
		</view>
		<!-- 留言板 -->
		<StayWord />
	</view>
</template>

<script>
import GradientsTitle from '@/common/components/GradientsTitle.vue';
import StayWord from './StayWord.vue'
export default {
	components: {
		GradientsTitle,
		StayWord
	},
	data() {
		return {
			list: [1, 2, 3, 3, 4]
		};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.comment {
	padding-top: 20rpx;
}
.comment-header {
	display: flex;
	align-items: center;
	> image {
		width: 42rpx;
		height: 42rpx;
		margin-right: 15rpx;
	}
}
.list {
	margin-top: 10rpx;
	.input-icon {
		margin: 5rpx 15rpx 0 15rpx;
		width: 38rpx;
		height: 38rpx;
	}
}
// 评论列表
.comment-li {
	.li {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.nick-name {
		display: flex;
		align-items: center;
		font-size: 26rpx;
		padding-bottom: 10rpx;
		.nick-img {
			margin-top: 5rpx;
			margin-right: 10rpx;
		}
		.nick {
			color: #3E3E3E;
			margin-right: 10rpx;
		}
		.time {
			color: #A2A2A2;
		}
	}
	.msg {
		padding-left: 50rpx;
		width: 100%;
		font-size: 28rpx;
		font-weight: 700;
	}
}
</style>
