<template>
	<GlobalPage title="新增提货点">
		<form class="pick-up-point-update">
			<van-field label="提货点位置" is-link input-align="right" required placeholder="选择位置" />
			<van-field label="详细地址" input-align="right" required placeholder="请输入详细地址" />
			<van-field label="手机号" input-align="right" required placeholder="请输入手机号" />
			<BecsButton background="#FF6120">确定</BecsButton>
		</form>
	</GlobalPage>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
.pick-up-point-update {
}
</style>
