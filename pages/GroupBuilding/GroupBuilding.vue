<template>
	<GlobalPage title="建群">
		<view class="group-building">
			<form @submit="formSubmit">
				<view class="header">
					<BecsUpload />
					<view class="tips"><text>上传群主头像</text></view>
				</view>
				<view class="main">
					<van-field :value="form.name" label="群主名称" input-align="right" required clearable placeholder="请输入群主名称" />
					<van-field :value="form.name" label="联系人" input-align="right" required clearable placeholder="请输入联系人名称" />
					<van-field :value="form.name" label="手机号" input-align="right" required clearable placeholder="请输入手机号">
						<view class="send-code" slot="button"><text>发送验证码</text></view>
					</van-field>
					<van-field :value="form.name" label="验证码" input-align="right" required clearable placeholder="请输入验证码" />
					<van-field
						:value="form.name"
						label="社群服务小区"
						input-align="right"
						required
						clickable
						clearable
						right-icon="arrow"
						@click-icon="selAddress"
						placeholder="选择小区"
					>
						<!-- <view class="select-community" slot="button"><van-icon name="arrow" /></view> -->
					</van-field>
					<van-field
						:value="form.name"
						type="textarea"
						autosize
						label="简介"
						input-align="right"
						required
						clearable
						placeholder="不超过100字"
					/>
				</view>
				<view class="footer">
					<BecsButton formType="submit" background="#FF6120"><text>确定</text></BecsButton>
				</view>
			</form>
			<!-- 成功信息提示 -->
			<SelectCommunity :show="false" />
		</view>
	</GlobalPage>
</template>

<script>
import SelectCommunity from './SuccessGroup.vue'
export default {
	components: {
		SelectCommunity
	},
	data() {
		return {
			form: {
				name: 'fdsafas'
			}
		}
	},
	methods: {
		formSubmit(e) {
			console.log(1111, e)
		},
		afterRead(e) {
			console.log(e)
		},
		// 选择地址
		selAddress() {
			uni.navigateTo({
				url: '/pages/SelectCommunity/SelectCommunity'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.group-building {
	.header {
		margin-top: 50rpx;
		display: flex;
		flex-flow: column;
		align-items: center;
		color: #2d2d2d;
		font-weight: 600;
		.tips {
			margin-top: 15rpx;
		}
	}
	.main {
		margin-top: 40rpx;
		width: 700rpx;
		margin-left: 25rpx;
		box-sizing: border-box;
		box-shadow: $g-shadow;
		.send-code {
			color: #fd6f34;
			&:hover {
				color: #c0c0c0;
			}
		}
		// /deep/ .custom-community {
		// 	color: #2D2D2D;
		// }
		.select-community {
			font-size: 35rpx;
			margin-top: 5rpx;
		}
	}
}
</style>
