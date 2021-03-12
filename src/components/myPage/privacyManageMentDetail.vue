<template>
	<div>
		<b-container class="mt-md-0 mt-4 mb-md-0 mb-4 mypage_cont_body">
			<slot name="header"></slot>
			<div class="mypage_container">
				<div class="mypage_container2 sign_from">
					<div id="signFromInput" class="sign_from_input">

						<div class="sign_input_box">
							<div class="title"><span id="idtitle">✓ </span>아이디</div>
							<div class="input_box">
								<input type="text" id="emailName" class="textC" v-model="from.userId" disabled>
								<span>{{emailText}}</span>
							</div>
						</div>

						<div class="mt-4">
							<div class="sign_input_box">
								<div class="title"><span id="pwdtitle">✓ </span>비밀번호</div>
								<div class="input_box">
									<input type="password" class="input_textC" id="txtPassword1" @focus="inputFocus" @blur="inputBlur" v-model="from.pwd" placeholder="영문/숫자/특수문자 중 2가지 조합 4~15자리">
									<span>{{passwordText1}}</span>
								</div>
							</div>
							<div class="sign_input_box mt-2">
								<div class="input_box">
									<input type="password" class="input_textC"id="txtPassword2" @focus="inputFocus" @blur="inputBlur" v-model="from.repwd" placeholder="비밀번호 확인">
									<span>{{passwordText2}}</span>
								</div>
							</div>
							<div class="list_txt_type2">
								<ul>
									<li class="title_li">비밀번호 정책</li>
									<li>띄어쓰기(공백)불가 -최소4자 ~ 최대 15자 / 영문, 숫자, 특수문자 중 2가지 이상 조합</li>
									<li>대소문자 구분</li>
								</ul>
							</div>
						</div>

						<div class="sign_input_box mt-4">
							<div class="title"><span>✓ </span>휴대폰 본인인증</div>
							<div class="input_box">
								<div class="phoneDbCheck mt-2">
									<div v-if="disabledSta != true">
										<input type="text" v-model="userPhoneData" placeholder="＂인증하기＂를 눌러주세요"  :disabled="disabledSta == false">
										<button class="" @click="phoneChangeCheck">{{ checkedSta.accountSta ? '인증하기' : '변경하기' }}</button>
									</div>
									<b-button variant="primary" class="check_btn full" v-else @click="getAxios">휴대폰 인증하기</b-button>
								</div>
							</div>
						</div>
					</div>
					<div class="bTcont_body">
						<button class="btnn bTcont bTsuccess" @click="userWithDRaw">회원탈퇴하기</button>
						<button id="changingInformation" class="btnn bTcont bTsuccess" @click="changingInformation">개인정보 수정</button>
					</div>
				</div>
			</div>
		</b-container>
	</div>
	
</template>

<script>
	import axios from "axios"
	import { mapState, mapActions } from "vuex"

	export default{
		name: 'privacyManageMent',
		data(){
			return {
				userPhoneData: '',
				mdl_tkn: '',
				reMdl_tkn:'',
				from: {
					userId: '',
					pwd: '',
					repwd: '',
					tel: '',
					mobileOperator: '',
					birth: '',
					gender: '',
					foreigner:'',
					email: '',
					name: '',
					ci: '',
				},
				chPwd:{
					pwd: '',
					sta: false
				},
				checkedSta:{
					idSta: false,
					passwordSta: false,
					accountSta: false,
				},
				lastUserDatalVal: false,
				disabledSta: false,
				emailText:'',
				passwordText1:'',
				passwordText2:'',
				phoneText:'',
				emailWarning1: '이메일 형식이 올바르지 않습니다',
			}
		},
		created() {
			this.$emit('checkeddetail', {name: 'signUserFrom', sta: true, goingSignUp: true});
			this.userLoadData();
		},
		computed: {
			...mapState(["userData"])
		},
		methods: {
			...mapActions(["userDataVal"]),

			changingInformation(){
				if(this.chPwd.sta == false) return
				if(this.from.pwd != '' && this.from.pwd == this.from.repwd){
					this.changingInformation2()
				}
			},
			
			changingInformation2(){
				this.chPwd.pwd = this.from.pwd
				axios
				.put(process.env.VUE_APP_BASE_URL + '/users/password/', this.chPwd, { withCredentials: true })
				.then( res => {
					this.showMsgBoxOne('개인정보 수정이 완료되었습니다.', 'repwd')
				})
				.catch( err => {
					// console.log(err)
				});
			},

			userLoadData(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/info/', { withCredentials: true })
				.then( res => {
					this.from.userId = res.data.userId
					this.userPhoneData = ''+res.data.name+' / '+res.data.tel+''
				})
				.catch( err => {
					// console.log(err);
				});
			},

			inputFocus(obj){
				obj.target.parentElement.classList.add('dis_b')
				// setTimeout(obj.target.parentElement.classList.add('focus'), 400)
				if(this.from.repwd == 0){
					var txtPassword2 = document.getElementById('txtPassword2');
					this.from.repwd = ''
					txtPassword2.parentElement.classList.remove('success', 'focus', 'err', 'dis_b');
				}
			},

			inputBlur(obj){
				if(obj.target.id == 'txtPassword1'){
					this.passwordChecked1(obj)
				} else if(obj.target.id == 'txtPassword2'){
					this.passwordChecked2(obj)
				} else {
					obj.target.parentElement.classList.remove('focus', 'dis_b')
				}
			},

			pwdChecked: function(){
				var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
				if(!reg_email.test(this.from.pwd)) {                            
					return false;        
				} else {                      
					return true;        
				}    
			},

			passwordChecked1: function(obj){
				var pw = this.from.pwd;
				this.checkedSta.passwordSta = false;
				var num = pw.search(/[0-9]/g);
				var eng = pw.search(/[a-z]/ig);
				var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
				var kor = pw.search(/[^가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]/gi);
				var numlength = 0;
				var englength = 0;
				var spelength = 0;
				obj.target.parentElement.classList.remove('success');

				var txtPassword2 = document.getElementById('txtPassword2');
				this.from.repwd = ''
				txtPassword2.parentElement.classList.remove('success', 'focus', 'err', 'dis_b');

				for(var i=0;pw.length > i;i++){
					if(pw[i].search(/[0-9]/g) != -1){
						numlength++
					} else if(pw[i].search(/[a-z]/ig) != -1){
						englength++
					} else if(pw[i].search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi) != -1){
						spelength++
					} else if(pw[i].search(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/gi) != -1){
						this.passwordText1 = "한글은 패스워드에 사용할 수 없습니다."
						obj.target.parentElement.classList.add('dis_b')
						setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
						return
					}
				}
				
				if(pw.length == 0){
					obj.target.parentElement.classList.remove('focus', 'err', 'dis_b')
					return
				}
				if(pw.length < 4 || pw.length > 15){
					this.passwordText1 = "4자리 ~ 15자리 이내로 입력해주세요."
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
					return false;
				}else if(pw.search(/\s/) != -1){
					this.passwordText1 = "비밀번호는 공백 없이 입력해주세요."
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
					return false;
				}else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) || (spe < 0 && num < 0) ){
					this.passwordText1 = '영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력해주세요.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
					return false;
				} else {
					this.passwordText1 = '사용가능한 비밀번호 입니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'success'), 400)
				}
			},

			passwordChecked2: function(obj){
				this.checkedSta.passwordSta = false;
				obj.target.parentElement.classList.remove('success')
				if(this.from.pwd.length == 0) return
				if(this.from.pwd == this.from.repwd){
					this.passwordText2 = '비밀번호가 일치합니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'success'), 400);
					this.checkedSta.passwordSta = true;
					this.successDepth();
				} else {
					this.chPwd.sta = false
					document.getElementById('changingInformation').classList.remove('grd');
					this.passwordText2 = '비밀번호가 일치하지 않습니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
				}
			},

			successDepth(){
				if(this.from.pwd == this.from.repwd){
					this.chPwd.sta = true
					document.getElementById('changingInformation').classList.add('grd');
				}
			},

			phoneChangeCheck(){
				if(this.checkedSta.accountSta == true){
					
				} else {
					this.showMsgBoxTwo('휴대폰 인증을 새로 하시겠습니까?', 'phone')
				}
			},

			userWithDRaw(){
				this.showMsgBoxTwo('회원 탈퇴 하시겠습니까?', 'user')
			},

			showMsgBoxOne(text, sta) {
				this.boxTwo = ''
				this.$bvModal.msgBoxOk(text, {
					okTitle: '확인',
					okVariant: 'outline-dark',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					this.boxTwo = value
					if(sta == false){
						this.logOut()
					}

					if(sta == 'repwd'){
						this.$router.push({name: 'Home', path: '/'});
					}
				})
				.catch(err => {

				})
			},

			showMsgBoxTwo(text, type) {
				this.boxTwo = ''
				this.$bvModal.msgBoxConfirm(text, {
					okTitle: '확인',
					cancelTitle: '취소',
					okVariant: 'outline-dark',
					cancelVariant: 'outline-dark',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					if(type == 'phone'){
						if(value){
							this.userPhoneData = null
							this.disabledSta = true
						}
					}

					if(type == 'user'){
						if(value){
							this.$router.push({name: 'withDraw', path: 'withDraw'});
						}
					}

				})
				.catch(err => {

				})
			},

			getAxios(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyRequest/')
				.then( res => {
					open_popup(res.data.mdl_tkn, this);
				})
				.catch( err => {
					// console.log(err)
				});
			},

			lastTest(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyCheck/'+this.mdl_tkn+'/')
				.then( res => {
					this.from.birth = res.data.birth
					this.from.ci = res.data.ci
					this.from.foreigner = res.data.foreigner
					this.from.gender = res.data.gender
					this.from.mobileOperator = res.data.mobileOperator
					this.from.name = res.data.name
					this.from.tel = res.data.tel
					this.successPhone();
				})
				.catch( err => {
					// console.log(err)
				});
			},

			successPhone(){
				axios
				.put(process.env.VUE_APP_BASE_URL + '/users/phone/', {mobileOperator: this.from.mobileOperator,tel: this.from.tel,ci: this.from.ci}, { withCredentials: true })
				.then( res => {
					this.showMsgBoxOne('휴대폰가 변경 되었습니다.')
					this.disabledSta = false
					this.userPhoneData = ''+this.from.name+' / '+this.from.tel+''
				})
				.catch( err => {
					// console.log(err)
				});
			},
		},
		watch: {
			'checkedSta.idSta' (val) {
				if(val == true){
					var signFromInput = document.getElementById('idtitle');
					signFromInput.classList.add('success');
				}
			},

			'checkedSta.passwordSta' (val){
				if(val == true){
					var signFromInput = document.getElementById('pwdtitle');
					signFromInput.classList.add('success');
				}
			},

			mdl_tkn(val){
				this.lastTest()
			},

			from(val){
				//console.log(val);
			},
		}
	}
</script>

<style scoped="">
.sign_from_input{}
.sign_input_box{}
.sign_input_box .title{font-size:1rem;margin-bottom: 5px;}
.sign_input_box .input_box{
position: relative;}
.sign_input_box .input_box.focus{position:relative;}
.sign_input_box .input_box select,
.sign_input_box .input_box input{width:100%;transition:.5s;border:none;border:solid 1px #ccc;border-radius: 10px;padding:9px 10px;font-size: .87rem;}
.sign_input_box .input_box select{color:#999;}
.sign_input_box .input_box span{display:none;opacity:0;float:left;height:20px;transition:.5s;position:absolute;top:0;left:0;font-size: .87rem;
color: #999;padding:7px 10px}
.sign_input_box .input_box.dis_b span{display:block;}
.sign_input_box .input_box.focus input{padding:30px 10px 10px 10px;}
.sign_input_box .input_box.focus span{opacity:1;}

.sign_input_box .input_box.err input{border:solid 1px #f11919;}
.sign_input_box .input_box.err span{opacity:1;color:#f11919;}
.sign_input_box .input_box.success input{color:#498ceb;border:solid 1px #498ceb;}
.sign_input_box .input_box.success span{opacity:1;color:#498ceb;}

.list_txt_type2{margin-top:5px;}
.list_txt_type2 ul{padding-left:5px;}
.list_txt_type2 li.title_li{font-weight:700;}
.list_txt_type2 li{position:relative;padding-left:8px;font-size:.78rem;line-height:21px;color:#999}
.list_txt_type2 li:before{content:'';width:3px;height:1px;display:inline-block;background:#999;position:absolute;top:10px;left:0}
.list_txt_type2 li em{color:#222}
.sign_input_box .input_box .phoneDbCheck{position:relative;}
.sign_input_box .input_box .phoneDbCheck input{position:relative;z-index:1;}
.sign_input_box .input_box .phoneDbCheck button{height:40px;position:absolute;top:0;right:0;border:solid 1px #ccc;border-radius:10px;font-size: .7rem;z-index:11;}

#idtitle.success,
#pwdtitle.success{color:#498ceb;font-weight:700;}

input.input_textC::placeholder {
  text-align:center;
}

.btnn.bTcont.bTsuccess:hover{text-decoration:none;color:#fff;}
.btnn.bTcont.phoneBtn{margin-top:0;width:100%;}
.btnn.bTcont.bTsuccess{min-width:40%;margin:0 1%;display:inline-block;}
.bTcont_body{text-align:center;margin-top:3rem;}
.mypage_container2.sign_from{width: 550px;}
.sign_input_box .input_box .phoneDbCheck button.btn.check_btn.full{width:100%;position:relative;border:none;}
.mobile .mypage_container2.sign_from{width:100%;}
.mobile .mypage_cont_body .mypage_container{padding:1rem 0;}
.mobile .btnn.bTcont.bTsuccess{padding:0;font-size:.9rem;}
</style>
