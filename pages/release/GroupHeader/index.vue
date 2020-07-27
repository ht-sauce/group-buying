<template>
	<view class="group-header">
		<view class="filed"><BecsInput v-model="vaule" title="请填写活动名称（必填）" /></view>
		<view class="filed"><BecsInput v-model="vaule" title="请填写活动介绍" /></view>
		<view class="upload-img-header">
			<van-uploader accept='image' :file-list="fileList" @after-read="afterRead">
				<view class="upload-photo">
					<view class="in-back"><van-icon name="plus" size="50rpx" color="#fff" /></view>
				</view>
			</van-uploader>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			value: '',
			fileList: [],
		}
	},
	methods: {
		afterRead(e) {
			const { file } = e.detail;
			this.fileList.push({ ...file });
		},
	}
};
</script>

<style lang="scss" scoped>
@import '../common.scss';
.group-header {
	@extend .content-flex;
}
</style>
