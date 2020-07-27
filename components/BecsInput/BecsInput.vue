<template>
	<view class="becs-input">
		<view class="filed" :style="{display: flex}">
			<view class="field-title">
				<text v-show="required" class="stars">*</text>
				<text>{{ title }}</text>
			</view>
			<view class="field-show">
				<input
					v-model="value"
					v-show="show"
					:class="flex ==='block' ? 'border-b margin-t' : 'flex-text'"
					class="field-input"
					:name="name"
					:type="type"
					:password="password"
					:placeholder="placeholder"
					:placeholder-style="placeholderStyle"
					:placeholder-class="placeholderClass"
					:disabled="disabled"
					:maxlength="maxlength"
					:focus="focus"
					@input="onInput"
					@focus="onFocus"
					@blur="onBlur"
					@confirm="onConfirm"
					@keyboardheightchange="onKeyboardheightchange"
				/>
				<view class="field-input-occupy" :class="flex ==='block' ? 'border-b margin-t' : 'flex-text'" v-show="!show">{{ value }}</view>
			</view>
			<view v-show="arrowRight" class="right-arrow">
				<van-icon name="arrow" size="30rpx" />
			</view>
		</view>
		<view v-show="errorMessage && errorMessage !=='true'" class="error-msg" :class="flex === 'flex' ? 'flex-text' : ''">{{ errorMessage }}</view>
	</view>
</template>

<script>
export default {
	behaviors: ['uni://form-field'],
	props: {
		title: String, // 标题名称
		value: [String, Number],
		arrowRight: Boolean, //右箭头模式
		required: Boolean, // 是否必填星号
		flex: { // 更改布局模式
			type: String,
			default: 'block'
		}, 
		errorMessage: String,
		// 用以解决原生组件层级太高，进行隐藏
		show: {
			type: Boolean,
			default: true
		},
		name: String,
		type: {
			type: String,
			default: 'text'
		},
		password: Boolean,
		placeholder: String,
		placeholderStyle: {
			type: String,
			default: `font-size: 24rpx;color: #D2D2D2;`
		},
		placeholderClass:  {
			type: String,
			default: ''
		},
		disabled: Boolean,
		maxlength: {
			type: Number,
			default: 140
		},
		focus: Boolean
	},
	watch: {
		value() {
			console.log(111);
		}
	},
	data() {
		return {};
	},
	methods: {
		onInput(e) {
			this.$emit('input', e.detail.value);
		},
		onFocus(e) {
			this.$emit('focus', e);
		},
		onBlur(e) {
			this.$emit('blur', e);
		},
		onConfirm(e) {
			this.$emit('confirm', e);
		},
		onKeyboardheightchange(e) {
			this.$emit('keyboardheightchange', e);
		}
	}
};
</script>

<style lang="scss" scoped>
// block模式需要的样式
.border-b {
	border-bottom: #D2D2D2 1px solid;
}
.margin-t {
	margin-top: 40rpx;
}
// flex模式需要的样式
.flex-text {
	text-align: right;
	padding: 0 !important;
}
// 整体布局
.becs-input {
	width: 100%;
	.filed {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.field-title {
		color: #282828;
		font-size: 26rpx;
		font-weight: bold;
		display: flex;
		align-items: center;
		.stars {
			color: #ee0a24;
			padding: 5rpx 5rpx 0 5rpx;
		}
	}
	.field-show {
		flex: 1;
		font-size: 24rpx;
		.field-input {
			width: 100%;
			padding: 10rpx 0;
		}
		.field-input-occupy {
			@extend  .field-input;
			margin: 0;
		}
	}
	.right-arrow {
		color: #636372;
		margin-top: 8rpx;
	}
	.error-msg {
		font-size: 24rpx;
		width: 100%;
		color: #ee0a24;
		padding-top: 10rpx;
	}
}
</style>
