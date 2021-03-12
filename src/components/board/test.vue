<template>
	<div class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
		userInquiry
		<form name="form1">
			<!-- 인증 요청 정보 -->
			<!--// 필수 항목 -->
			<input type="hidden" name="tc" value="kcb.oknm.online.safehscert.popup.cmd.P931_CertChoiceCmd"/>   <!-- 변경불가-->
			<input type="hidden" name="cp_cd" value="V47630000000">   <!-- 회원사코드 -->
			<input type="hidden" name="site_name" value="makepin">   <!-- 토큰 --> 
			<input type="hidden" name="mdl_tkn" :value="mdl_tkn">   
			<!-- 필수 항목 //-->   
		</form>
		<button @click="getAxios">getAxios</button>
		<button @click="sendPost">sendPost</button>
		<button @click="lastTest">lastTest</button>
	</div>

</template>
<script>

	import axios from "axios"

	export default{
		data(){
			return {
				tc: 'kcb.oknm.online.safehscert.popup.cmd.P931_CertChoiceCmd',
				cp_cd: 'V47630000000',
				site_name: 'makepin',
				mdl_tkn: '',
				reMdl_tkn:''
			}
		},
		name: 'userInquiry',
		created() {
	    },
	    methods: {
	    	getAxios(){
	    		axios
				.get('http://dev.back.makepin.co.kr:8080/users/mobileUserVerifyRequest/')
				.then( res => {
					console.log(res.data.mdl_tkn)
					this.mdl_tkn = res.data.mdl_tkn
				})
				.catch( err => {
					
				});
	    	},
	    	lastTest(){
	    		axios
				.get('http://dev.back.makepin.co.kr:8080/users/mobileUserVerifyCheck/'+this.reMdl_tkn+'/')
				.then( res => {
					console.log(res)
				})
				.catch( err => {
					
				});
	    	},
			sendPost() {
				document.form1.action = "https://safe.ok-name.co.kr/CommonSvl";
      			document.form1.method = "post";
      			document.form1.submit();
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