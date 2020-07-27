<template>
	<GlobalPage title="建群-须知">
		<view class="agreement">
			<view class="header">
				<gradients-title><text>建群须知</text></gradients-title>
			</view>
			<view class="content">
				<template v-for="(item, index) in contentList">
					<view class="content-li" :key="index">
						<text>{{ item }}</text>
					</view>
				</template>
			</view>
			<view class="check">
				<view class="icon" @click="onCheck" :style="{ color: checked ? '#FF6120' : '#c0c0c0' }"><van-icon size="45rpx" name="checked" /></view>
				<text>已阅读并同意</text>
				<text class="line" @click="lookAgreement">拜客社团协议</text>
			</view>
			<view class="button">
				<BecsButton @click.native="nextPage" :background="checked ? '#FF6120' : '#c0c0c0'"><text>确定</text></BecsButton>
			</view>
		</view>
	</GlobalPage>
</template>

<script>
import GradientsTitle from '@/common/components/GradientsTitle.vue';
export default {
	components: {
		GradientsTitle
	},
	data() {
		return {
			contentList: [
				'群可适用于社群团长、微商、淘宝店、水果店、餐饮店、便利店等个体开展团购活动；',
				'建群后群主可根据需要修改群名片、主页；',
				'建群后群主可细分自己私欲流量，分不同社区、社群来管理商品和群员进行团购活动；',
				'建群为付费功能，新用户可免费试用半年；'
			],
			checked: false // 是否同意协议
		};
	},
	methods: {
		onCheck() {
			this.checked = !this.checked;
		},
		nextPage() {
			if (this.checked) {
				uni.navigateTo({
					url: '/pages/GroupBuilding/GroupBuilding'
				});
			}
		},
		// 进入查看用户协议
		lookAgreement() {
			uni.navigateTo({
				url: '/pages/AgreementDetails/AgreementDetails'
			})
		}
	}
};
</script>

<style lang="scss">
.agreement {
	width: 100%;
	.header {
		margin-top: 50rpx;
	}
	.content {
		margin-top: 50rpx;
		box-sizing: border-box;
		padding: 0 40rpx;
		font-size: 28rpx;
		.content-li {
			margin-bottom: 50rpx;
		}
	}
	.check {
		width: 100%;
		position: fixed;
		bottom: 130rpx;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		.icon {
			color: #c0c0c0;
			margin-right: 10rpx;
			margin-top: 10rpx;
		}
		.line {
			text-decoration: underline;
		}
	}
}
</style>
