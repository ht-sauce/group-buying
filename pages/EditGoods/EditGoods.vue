<template>
	<GlobalPage :title="type === 'edit' ? '编辑商品' : '新增商品'">
		<view class="edit-goods">
			<form>
				<view class="goods-set">
					<view class="input-li"><input placeholder="请输入商品名称（必填）" /></view>

					<view class="input-li">
						<input placeholder="商品介绍" />
						<!-- 标签部分 -->
						<view class="tags">
							<view style="padding-right: 10rpx;"><BecsTag :size="24">测试</BecsTag></view>
							<view class="add-tags-button">
								<van-icon name="plus" size="24rpx" color="#fff" />
								<text>添加标签</text>
							</view>
						</view>
					</view>

					<view class="input-li">
						<van-uploader :file-list="fileList" @after-read="afterRead">
							<view class="upload-photo">
								<view class="in-back"><van-icon name="plus" size="50rpx" color="#fff" /></view>
							</view>
						</van-uploader>
						<view style="height:1rpx; 100%;border-bottom: 1rpx solid #d2d2d2;"></view>
					</view>

					<view class="input-li-field">
						<view class="line">
							<van-field is-link label-class="left-label" input-class="field-input" required clearable label="规格" placeholder="请输入用户名" />
						</view>
					</view>

					<view class="input-li-field">
						<view class="line">
							<van-field label-class="left-label" input-class="field-input" required clearable label="价格（元）" placeholder="请填写商品价格" />
						</view>
					</view>

					<view class="input-li-field">
						<view class="line">
							<van-field label-class="left-label" input-class="field-input" required clearable label="库存" placeholder="请填写商品库存" />
						</view>
					</view>

					<view class="input-li-field">
						<view class="line">
							<van-field is-link label-class="left-label" input-class="field-input" required clearable label="选择分类" placeholder="全部" />
						</view>
					</view>
				</view>
			</form>
			<view v-if="type === 'edit'" class="tips">
				<view>温馨提示：</view>
				<view>开团中修改商品库中的任何内容，均不会同步至活动；如需修改活动商品内容，可通过以下方式修改：进入活动页→点击”活动管理”→点击”修改活动”</view>
			</view>
			<BecsButton background="#FF6120"><text>保存编辑</text></BecsButton>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	data() {
		return {
			type: 'add', // edit修改，add新增
			fileList: []
		};
	},
	methods: {
		afterRead(e) {
			const { file } = e.detail;
			this.fileList.push({ ...file });
		}
	}
};
</script>

<style lang="scss" scoped>
.edit-goods {
	font-size: 30rpx;
	padding: 30rpx;
	box-sizing: border-box;
	width: 750rpx;
	margin-bottom: 120rpx;
}
.goods-set {
	background: #fff;
	padding-bottom: 20rpx;
	.input-li {
		width: 100%;
		padding: 0 20rpx;
		box-sizing: border-box;
		> input {
			width: 100%;
			height: 100%;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #d2d2d2;
		}
	}
	.input-li-field {
		margin-top: 1rpx;
		padding: 0 20rpx;
		.line {
			box-sizing: border-box;
			border-bottom: 1rpx solid #E6E6E6;
		}
	}
	/deep/ .left-label {
		font-weight: bold;
		font-size: 30rpx;
	}
	/deep/ .field-input {
		font-size: 30rpx;
	}
}
// 图片上传自定义样式
.upload-photo {
	width: 160rpx;
	height: 160rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	.in-back {
		width: 100rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #d8d8d8;
	}
}
.tags {
	margin-top: 20rpx;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	.add-tags-button {
		display: flex;
		align-items: center;
		height: 40rpx;
		display: inline-block;
		background: #ff6120;
		font-size: 24rpx;
		padding: 0 14rpx;
		color: #fff;
		line-height: 40rpx;
		border-radius: 20rpx;
	}
}

.tips {
	font-size: 22rpx;
	color: #999999;
	margin-top: 10rpx;
	> view {
		padding: 10rpx 0;
	}
}
</style>
