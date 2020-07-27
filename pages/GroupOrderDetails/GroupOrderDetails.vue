<template>
	<GlobalPage title="活动详情" :bg-height="150">
		<view class="group-order-details">
			<view class="header" :style="{ top: topHeight + 'px' }">
				<member-header color="#c38513">
					<view class="options">
						<image src="/static/pages/icon-headset.png"></image>
						<image src="/static/pages/icon-share.png"></image>
					</view>
				</member-header>
			</view>
			<!-- 内容详情部分 -->
			<view class="details" :style="{ top: topHeight + 55 + 'px' }">
				<!-- 商品主图部分 -->
				<DetailsHeader />
				<!-- 购物商品列表 -->
				<CartGoods />
				<!-- 活动历史 -->
				<ActiveHistory />
				<!-- 留言部分 -->
				<Comment />
			</view>
			<!-- 底部和按钮部分 -->
			<view class="footer">
				<GroupLeader v-if="isSlef" />
				<CartEnd v-else />
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import MemberHeader from '@/common/components/MemberHeader.vue';
import DetailsHeader from './DetailsHeader/index.vue';
import CartEnd from './CartEnd.vue';
import ActiveHistory from './ActiveHistory.vue';
import Comment from './Comment/index.vue'
import CartGoods from './CartGoods/index.vue'
import GroupLeader from './GroupLeader/index.vue'
export default {
	components: {
		MemberHeader,
		DetailsHeader,
		CartEnd,
		ActiveHistory,
		Comment,
		CartGoods,
		GroupLeader
	},
	computed: {
		topHeight() {
			const { statusBarHeight, defaultTopHeight } = this.$store.state.sys;
			return statusBarHeight + defaultTopHeight;
		}
	},
	data() {
		return {
			isSlef: true // 判断是否是群主进入当前页面
		};
	},
	created() {
		console.log('测试下');
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.group-order-details {
	padding: 30rpx;
	box-sizing: border-box;
	.header {
		color: #fff;
		position: absolute;
		z-index: 2000;
		.options {
			> image {
				width: 58rpx;
				height: 58rpx;
				margin-left: 28rpx;
			}
		}
	}
}
.details {
	width: 690rpx;
	background: #fff;
	border-radius: 6rpx;
	padding: 30rpx;
	box-shadow: $g-shadow;
	box-sizing: border-box;
	position: absolute;
	z-index: 2000;
	margin-bottom: 120rpx;
}
.footer {
	width: 100%;
	height: 100rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2000;
}
</style>
