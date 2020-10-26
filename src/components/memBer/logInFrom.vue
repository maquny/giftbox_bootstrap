<template>
	<div class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
		​
		<div class="from_box">
			
			<input
			id="input-id"
			v-model="id"
			type="email"
			class=""
			required
			placeholder="아이디(이메일)을 입력해주세요."
			>
			​
			<input
			id="input-password"
			v-model="pwd"
			type="password"
			required
			placeholder="비밀번호를 입력해주세요."
			>
			​
			<b-button variant="primary" class="login_btn" @click="login({id, pwd})" >로그인</b-button>
		</div>
		​
		<div id="input-group-4">
			<b-form-checkbox v-model="checked" value="autoLogin">로그인 유지</b-form-checkbox>
		</div>
		​
		<div class="user_infor">
			<router-link to="/login/findId">아이디 찾기</router-link>
			<router-link to="/login/resetPassword">비밀번호 재설정</router-link>	
			<router-link to="/sginup" class="sign_up_btn">회원가입</router-link>	
		</div>
		​{{SamePass_0}}, {{SamePass_1}}, {{SamePass_2}}
	</div>
</template>
<script>
	import { mapState, mapActions } from "vuex"

	export default{
		name: 'logInFrom',
		data() {
			return {
				id: 'gnogun@naver.com',
				pwd: '12341234',
				checked: false,
				idPass: false,
				pwdPass: false,
				pw_passed: true,
				SamePass_0:0,
				SamePass_1:0,
				SamePass_2:0,
				chr_pass_0:'',
				chr_pass_1:'',
				chr_pass_2:'',
				allUsers:[
				{}
				]
			}
		},
		computed: {
			...mapState(["isLogin", "isLoginError"])
		},
		methods: {
			...mapActions(["login"]),

			loginChecked(){
				if(this.id != true || this.pwd != true){
					if(this.id === '' && this.pwd === ''){
						console.log('아이디와 패스워드를 입력해 주세요.')
					} else if(this.id === ''){
						console.log('아이디를 입력해 주세요.', this.pwd)
					} else if(this.pwd === ''){
						console.log('패스워드를 입력해 주세요.', this.id)
					}
				}

				if(this.id || this.pwd){
					console.log(123)
					this.logIdChecked()
					console.log(this.logIdChecked())
				}
			},

			logIdChecked: function(){
				var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
				if(!reg_email.test(this.id)) {                            
					return false;         
				}                            
				else {                       
					return true;         
				}     
			},

			passwordChecked2: function(){
				var pw = document.getElementById("txtPassword1").value;
				var pw2 = document.getElementById("txtPassword2").value;
				var id = document.getElementById("txtId").value;
				this.pw_passed = true;
				var pattern1 = /[0-9]/;
				var pattern2 = /[a-zA-Z]/;
				var pattern3 = /[~!@\#$%<>^&*]/;
				var pw_msg = "";
				if(id.length == 0) {
					alert("아이디를 입력해주세요");
					return false;
				} else {
				}

				if(pw.length == 0) {
					alert("비밀번호를 입력해주세요");
					return false;
				} else {
					if( pw  !=  pw2) {
						alert("비밀번호가 일치하지 않습니다.");
						return false;
					}
				}

				if(!pattern1.test(pw)||!pattern2.test(pw)||!pattern3.test(pw)||pw.length<8||pw.length>50){
					alert("영문+숫자+특수기호 8자리 이상으로 구성하여야 합니다.");
					return false;
				}          

				if(pw.indexOf(id) > -1) {
					alert("비밀번호는 ID를 포함할 수 없습니다.");
					return false;
				}
				var SamePass_0 = 0;
				var SamePass_1 = 0; 
				var SamePass_2 = 0; 
				for(var i=0; i < pw.length; i++) {
					var chr_pass_0;
					var chr_pass_1;
					var chr_pass_2;
					if(i >= 2) {
						chr_pass_0 = pw.charCodeAt(i-2);
						chr_pass_1 = pw.charCodeAt(i-1);
						chr_pass_2 = pw.charCodeAt(i);
						if((chr_pass_0 == chr_pass_1) && (chr_pass_1 == chr_pass_2)) {
							SamePass_0++;
						} 
						else {
							SamePass_0 = 0;
						}
						if(chr_pass_0 - chr_pass_1 == 1 && chr_pass_1 - chr_pass_2 == 1) {
							SamePass_1++;
						}
						else {
							SamePass_1 = 0;
						}
						if(chr_pass_0 - chr_pass_1 == -1 && chr_pass_1 - chr_pass_2 == -1) {
							SamePass_2++;
						} 
						else {
							SamePass_2 = 0;
						}  
					}     
					if(SamePass_0 > 0) {
						alert("동일문자를 3자 이상 연속 입력할 수 없습니다.");
						this.pw_passed=false;
					}

					if(SamePass_1 > 0 || SamePass_2 > 0 ) {
						alert("영문, 숫자는 3자 이상 연속 입력할 수 없습니다.");
						this.pw_passed=false;
					} 

					if(!this.pw_passed) {             
						return false;
						break;
					}
				}
				return true;

			}
		},
	}
</script>
​
<style scoped="">
.from_box{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;}
.from_box input{width:100%;border:solid 1px #ddd;border-radius:5px;margin:10px 0;padding:6px 10px;}
.btn.login_btn{width:100%;border-radius:0;}
.user_infor{text-align:center;}
.user_infor a{color:#444;font-size:.75em;}
.user_infor a:first-child:before{display:none;}
.user_infor a:first-child + a:before{content:'/';display:inline-block;clear:both;padding:0 5px;}
.sign_up_btn{float:left;width:100%;background-color:#fff;height:40px;line-height:40px;text-align:center;color:#444;margin-top:10px;border:solid 1px #ccc;}
</style>