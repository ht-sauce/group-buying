<template>
	<view class="menu">
		<template v-for="(item, index) in menu">
			<view class="menu-li" :key="index" @click="menuClick(item)">
				<image class="img" :src="item.src"></image>
				<view class="font">
					<text>{{ item.name }}</text>
				</view>
			</view>
		</template>
		<!-- 选择可取货活动 -->
		<PickUpActive :show.sync="PickUpActiveShow" />
		<!-- 取货码发货 -->
		<PickUpCode @touchmove.stop.prevent :show.sync="PickUpCodeShow" />
		<!-- 切换群主页 -->
		<SwitchGroup :show.sync="SwitchGroupShow" />
	</view>
</template>

<script>
import PickUpActive from './PickUpActive.vue';
import PickUpCode from './PickUpCode.vue';
import SwitchGroup from './SwitchGroup/SwitchGroup.vue';
export default {
	components: {
		PickUpActive,
		PickUpCode,
		SwitchGroup
	},
	data() {
		return {
			menu: [
				{ id: 1, name: '扫码发货', src: '/static/pages/ScanCodeSend.png' },
				{ id: 2, name: '取货码发货', src: '/static/pages/pickUp.png' },
				{ id: 3, name: '我的取货码', src: '/static/pages/MypickUp.png' },
				{ id: 4, name: '我要建群', src: '/static/pages/GroupBuilding.png' },
				{ id: 5, name: '群主页', src: '/static/pages/groupHome.png' }
			],
			PickUpActiveShow: false,
			PickUpCodeShow: false,
			SwitchGroupShow: false,
		};
	},
	methods: {
		menuClick(e) {
			switch (e.id) {
				case 1:
					this.$util.testLogin()
					break;
				case 2:
					this.PickUpCodeShow = true;
					break;
				case 3:
					this.PickUpActiveShow = true;
					break;
				case 4:
					uni.navigateTo({
						url: '/pages/agreement/agreement'
					});
					break;
				case 5:
					break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.menu {
	margin-top: 20rpx;
	width: 100%;
	flex-wrap: wrap;
	display: flex;
	padding: 0 30rpx;
	box-sizing: border-box;
	.menu-li {
		display: flex;
		width: 20%;
		flex-flow: column;
		align-items: center;
		.img {
			width: 80rpx;
			height: 80rpx;
		}
		.font {
			font-size: 20rpx;
			margin-top: 5rpx;
		}
	}
}
</style>
