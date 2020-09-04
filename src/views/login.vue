<template>
	<div class="login_container" name="pageName">

		<div v-show="pageName ==undefined">
			<loginFrom>
				<h3>로그인</h3>
			</loginFrom>
		</div>
		<div v-show="pageName =='findId'">
			<findId :pageName="pageName">
				<h3>아이디 찾기</h3>
			</findId>
		</div>
		<div v-show="pageName =='successfindid'">
			<successfindid :pageName="pageName">
				<h3>아이디 찾기</h3>
			</successfindid>
		</div>

		<div v-show="pageName =='resetPassword'">
			<resetPassword>
				<h3>비밀번호 재설정</h3>
			</resetPassword>
		</div>
		<div v-show="pageName =='successfindidDepth2'">
			<successfindidDepth2>
				<h3>비밀번호 재설정</h3>
			</successfindidDepth2>
		</div>
	</div>
</template>

<script>
	import loginFrom from '@/components/loginFrom'
	import findId from '@/components/findid'
	import successfindid from '@/components/successfindid'
	import resetPassword from '@/components/resetPassword'
	import successfindidDepth2 from '@/components/successfindidDepth2'

	export default{
		name: 'login',
		data() {
			return {
				name: '로그인',
				pageName: undefined,
			}
		},
		components: {
			loginFrom,
			findId,
			successfindid,
			resetPassword,
			successfindidDepth2
		},
		computed: {
			param: function () {
				this.pageName = this.$route.params.page
			}
		},
		watch: {
			pageName: function (val) {
				console.log(val)
			}
		}
	}
</script>

<style>
.login_container{width:450px;margin:0 auto;padding:100px 0;}
</style>