<template>
	<div class="login">
		<!-- 登录页 -->
	</div>
</template>

<script>
	import { goAuth } from '@/utils'
	export default{
		data() {
			return {}
		},
		mounted() {
			console.log(666666)
		},
		created() {
			const { token } = this.$route.query
			if(token) {
				const loading = this.$toast.loading({
					duration: 0,
					message: "登录中..."
				})
				this.$store.commit('user/SET_TOKEN', token)
				this.$router.push('/')
				
				loading.clear()
			} else {
				console.log('没有token')
				goAuth()
			}
		}
	}
</script>

<style scoped lang="less">
	.login{
		font-size: 0.24rem;
	}
</style>
