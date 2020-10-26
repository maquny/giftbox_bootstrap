<template>
	<form name="form1" @submit.prevent="sendPost">
		<!-- 인증 요청 정보 -->
		<!--// 필수 항목 -->
		<input type="hidden" name="tc" v-model="tc">   <!-- 변경불가-->
		<input type="hidden" name="cp_cd" v-model="cp_cd">   <!-- 회원사코드 -->
		<input type="hidden" name="mdl_tkn" v-model="site_name">   <!-- 토큰 --> 
		<input type="hidden" name="target_id" v-model="mdl_tkn">   
		<!-- 필수 항목 //-->   
		<button type="submit">faqList</button>
	</form>
</template>
<script>

	import axios from "axios"

	export default{
		data(){
			return {
				data: '',
				tc: '',
				cp_cd: '',
				site_name: '',
				mdl_tkn: ''
			}
		},
		name: 'userInquiry',
		created() {
			this.sendData()
		},
		methods: {
			sendData() {
				axios
				.get("http://dev.back.makepin.co.kr:8080/users/mobileUserVerifyRequest/", {withCredentials: true})
				.then( res => {
					console.log(res, res.data)
					this.data = res.data
				})
				.catch( err => {
					console.log(err);
				});
			},
			sendPost() {
				axios
				.post("https://safe.ok-name.co.kr/CommonSvl", this.data)
				.then( res => {
					console.log(res)
				})
				.catch( err => {
					console.log(err);
				});
				this.$router.push({ path: 'frequentlyAskedQuestions',name: 'frequentlyAskedQuestions',})
			},
		},
		watch: {
			$route (data){
				console.log(data)
			},
		}
	}

</script>
​
<style scoped="">

</style>