<template>
	<GlobalPage title="实名认证">
		<view class="Certification">
			<form>
				<view class="field">
					<van-field
						label="姓名"
						label-class="lable-class"
						input-class="input-class"
						required
						clearable
						input-align="right"
						placeholder="请填写姓名"
						:border="false"
					/>
				</view>
				<view class="field">
					<van-field
						label="身份证号"
						label-class="lable-class"
						input-class="input-class"
						required
						clearable
						input-align="right"
						placeholder="请填写身份证号"
						:border="false"
					/>
				</view>
				<view class="id-card">
					<view class="title">
						<text class="stars">*</text>
						<text>身份证</text>
					</view>
					
					<view class="card-upload">
						<view class="upload">
							<van-uploader :max-count="1" :file-list="fileList" @after-read="afterRead">
								<view class="custon-upload">身份证正面</view>
							</van-uploader>
						</view>
						<view class="upload">
							<van-uploader :max-count="1" :file-list="fileList" @after-read="afterRead">
								<view class="custon-upload">身份证反面</view>
							</van-uploader>
						</view>
						<view class="upload">
							<van-uploader :max-count="1" :file-list="fileList" @after-read="afterRead">
								<view class="custon-upload">手持身份证照片</view>
							</van-uploader>
						</view>
					</view>
					
					<view class="title">营业执照</view>
					
					<view class="card-upload">
						<view class="upload">
							<van-uploader :max-count="1" :file-list="fileList" @after-read="afterRead">
								<view class="custon-upload">营业执照</view>
							</van-uploader>
						</view>
					</view>
				</view>
				<BecsButton background="#FF6120">确定</BecsButton>
			</form>
		</view>
	</GlobalPage>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			fileList: [],
		};
	},
	methods: {
		afterRead(event) {
			const { file } = event.detail;
			this.fileList.push({ ...file });
		},
	},
};
</script>

<style lang="scss" scoped>
.Certification {
	margin-bottom: 120rpx;
	min-height: 100vh;
	background: #fff;
	color: #2d2d2d;
}
.field {
	box-sizing: border-box;
	padding: 0 30rpx;
	border-bottom: 1rpx solid #e6e6e6;
	/deep/ {
		.lable-class {
			font-weight: bold;
			font-size: 30rpx;
		}
		.input-class {
			font-size: 30rpx;
		}
	}
}
.id-card {
	box-sizing: border-box;
	padding: 0 30rpx;
	.title {
		padding: 20rpx 10rpx;
		margin-top: 1rpx;
		font-size: 30rpx;
		font-weight: bold;
		.stars {
			color: #f25c64;
			margin-right: 4rpx;
		}
	}
	.card-upload {
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.upload {
			padding: 10rpx 0;
		}
		.custon-upload {
			width: 280rpx;
			height: 220rpx;
			color: #fff;
			text-align: center;
			line-height: 220rpx;
			background: #D8D8D8;
		}
	}
}
</style>
