<template>
	<div>

		<div v-if="resetPassSta != true">
			<div>
				아래 정보 확인 후 비밀번호를 재설정하세요.<br/>
				비밀번호는 고객센터에서 안내 또는 수정이 불가합니다
			</div>

			<div class="from_2box">
				<b-form-group
				id="input-group-id"
				label-for="input-id"
				>
				<b-form-input
				id="input-id"
				v-model="form.id"
				@blur="inputBlur2"
				type="email"
				required
				placeholder="아이디(이메일)을 입력해주세요."
				></b-form-input>
				</b-form-group>

				<b-form-group
				id="input-group-phone"
				label-for="input-phone"
				>
				<b-form-input
				id="input-phone"
				v-model="form.tel"
				type="text" 
				required
				@keyup="phoneNum"
				@blur="phoneInputBlur"
				maxlength="11"
				placeholder="휴대폰번호 - 제외 후 입력해주세요."
				></b-form-input>
				</b-form-group>

				<b-form-group
				id="input-group-name"
				label-for="input-name"
				>
				<b-form-input
				id="input-name"
				v-model="form.name"
				type="text"
				@blur="inputBlur2"
				required
				placeholder="가입자 이름 입력해주세요."
				></b-form-input>
				</b-form-group>

				<button id="resetPwd" class="btnn bTcont bTsuccess" @click="resetPwd">다음</button>

			</div>

			<div class="sub_text">
				<p>* 휴대폰번호 입력시 (-)는 제외하고 입력해 주세요.</p>
				<p>* 본인 인증 시 제공되는 정보는 인증 이외의 용도로 이용 또는 저장하지 않습니다.</p>
				<p>* 휴대폰 인증은 본인 명의의 휴대폰으로만 인증이 가능합니다. (14세 미만 이용 불가)</p>
				<p>* 인증이 되지 않을 경우, 고객센터(1:1문의 바로가기)로 문의 하시기 바랍니다.</p>
			</div>
		</div>

		<div class="form_2box" v-else>
			<h5>새로운 비밀번호를 설정해주세요.</h5>
			<div class="mt-4">
				<div class="sign_input_box">
					<div class="title"><span class="pwdtitle">✓ </span>새로운 비밀번호</div>
					<div class="input_box">
						<input type="text" id="txtPassword1" @focus="inputFocus" @blur="inputBlur" v-model="form.pwd" placeholder="영문/숫자/특수문자 중 2가지 조합 4~15자리">
						<span>{{passwordText1}}</span>
					</div>
				</div>
				<div class="sign_input_box mt-2">
					<div class="title"><span class="pwdtitle">✓ </span>새로운 비밀번호 확인</div>
					<div class="input_box">
						<input type="text" id="txtPassword2" @focus="inputFocus" @blur="inputBlur" v-model="form.repwd" placeholder="비밀번호 확인">
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
			<button id="resetPassWord" class="btnn bTcont bTsuccess" @click="resetPassWord">비밀번호 재설정</button>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	export default{
		name: 'resetPassWord',
		data() {
			return {
				resetPassSta: false,
				form: {
					id:'',
					tel: '',
					name:'',
					pwd: '',
					repwd: '',
				},
				form2: {
					id:'',
					tel:'',
					name:''
				},
				pwdForm: {
					userId:'',
					ci: '',
					pwd: '',
				},
				logoImg: require('@/assets/images/make_pin_logo.png'),
				onlyNumber:'',
				mdl_tkn:'',
				passwordText1:'',
				passwordText2:'',
				checkedSta:{
					passwordSta: false,
				},
			}
		},
		methods: {

			showMsgBoxOne(text, type) {
				this.boxOne = ''
				this.$bvModal.msgBoxOk(text, {
					okTitle: '확인',
					size: 'sm',
					okVariant: 'outline-dark',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					if(type == 'pwdChange'){
						this.$router.push({name: 'Home', path: '/'});
					}
					this.boxOne = value
				})
				.catch(err => {
				})
			},

			phoneNum(){
				return this.form.tel = this.form.tel.replace(/[^0-9]/g, '');
			},

			inputFocus(obj){
				document.getElementById('resetPassWord').classList.remove('grd');
				obj.target.parentElement.classList.add('dis_b')
				// obj.target.parentElement.classList.add('dis_b')
				// setTimeout(obj.target.parentElement.classList.add('focus'), 400)
				if(this.form.repwd == 0){
					var txtPassword2 = document.getElementById('txtPassword2');
					this.form.repwd = ''
					txtPassword2.parentElement.classList.remove('success', 'focus', 'err', 'dis_b');
				}
			},

			inputBlur(obj){
				if(obj.target.id == 'txtPassword1'){
					this.passwordChecked1(obj)
				} else if(obj.target.id == 'txtPassword2'){
					if(this.form.pwd != ''){
						this.passwordChecked2(obj)
					}
				} else {
					obj.target.parentElement.classList.remove('focus', 'dis_b')
				}
			},


			passwordChecked1: function(obj){
				var pw = this.form.pwd;
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
				this.form.repwd = ''
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
				if(this.form.pwd == this.form.repwd){
					this.passwordText2 = '비밀번호가 일치합니다.'
					obj.target.parentElement.classList.add('dis_b')
					document.getElementById('resetPassWord').classList.add('grd');
					setTimeout(obj.target.parentElement.classList.add('focus', 'success'), 400);
					this.checkedSta.passwordSta = true;
				} else {
					this.passwordText2 = '비밀번호가 일치하지 않습니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
				}
			},

			normalPwd(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/findPassword/id/'+ this.form.id +'/tel/'+ this.form.tel +'/')
				.then( res => {
					document.getElementById('resetPwd').classList.add('grd');
				})
				.catch( err => {
				});
			},

			resetPwd(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/findPassword/id/'+ this.form.id +'/tel/'+ this.form.tel +'/')
				.then( res => {
					if(this.form.name == res.data.name){
						this.pwdForm.userId = res.data.userId
						this.checkedUserPwd(res.data);
					}
					// this.checkedUserInfor(res)
				})
				.catch( err => {
					if(err.response.data.message.indexOf("account doesn't exists. Please check userid") != -1){
						this.showMsgBoxOne('입력하신 정보와 일치하는 회원이 없습니다.')
					} else {
						this.showMsgBoxOne('입력하신 정보를 다시 확인하시고 시도해 주세요.')
					}
				});
			},

			checkedUserInfor(obj){//불필요 로직 삭제 대기
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/login/id/'+this.form.id+'/pwd/'+this.form.pwd+'')
				.then( res => {
					this.checkedUserPwd(res.data);
					this.pwdForm.userId = res.data.userId
				})
				.catch( err => {
					// console.log(err)
				});
			},

			checkedUserPwd(obj){
				if(obj.name == this.form.name){
					axios
					.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyRequest/')
					.then( res => {
						open_popup(res.data.mdl_tkn, this);
					})
					.catch( err => {
						// console.log(err)
					});
				}
			},

			lastTest(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyCheck/'+this.mdl_tkn+'/')
				.then( res => {
					this.resetPassSta = true;
					this.pwdForm.ci = res.data.ci
				})
				.catch( err => {
					// console.log(err)
				});
			},

			inputBlur2(obj){
				if(this.form.id != '' && this.form.name != '' && this.form.tel != ''){
					this.normalPwd()
				} else {
					document.getElementById('resetPwd').classList.remove('grd');
				}
			},
			
			phoneInputBlur(){
				this.form2 = false
				var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
				var tel = this.form.tel
				if( !regExp.test(tel) ) {

					if(this.form.id != '' && this.form.name != '' && this.form.tel != ''){
					} else {
						document.getElementById('resetPwd').classList.remove('grd');
					}

					this.showMsgBoxOne('휴대폰번호 형식이 올바르지 않습니다.')
				} else {
					this.form2 = true
				}
			},


			resetPassWord(){
				if(this.form.pwd.length == 0) return
				if(this.form.pwd == this.form.repwd){
					this.pwdForm.pwd = this.form.pwd
					axios
					.put(process.env.VUE_APP_BASE_URL + '/users/findPassword/', this.pwdForm, { withCredentials: true })
					.then( res => {
						this.showMsgBoxOne('비밀번호가 변경되었습니다.', 'pwdChange')
					})
					.catch( err => {
						// console.log(err)
					});
				}
			}
		},
		watch: {
			'checkedSta.passwordSta' (val){
				if(val == true){
					this.pwdForm.pwd = this.form.pwd
					document.getElementsByClassName('pwdtitle')[0].classList.add('success');
					document.getElementsByClassName('pwdtitle')[1].classList.add('success');
				}
			},

			mdl_tkn(val){
				this.lastTest()
			},
		}
	}
</script>

<style scoped="">
.from_2box{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;border-bottom:none;}
.btn.login_btn{width:100%;border-radius:0;}
.sub_text p{font-size:.75em;margin-bottom:.4rem;}
h5{text-align:center;margin-bottom:2rem;}

sign_from_input{}
.sign_input_box{}
.sign_input_box .title{font-size:1rem;margin-bottom: 5px;}
.sign_input_box .input_box{position: relative;}
.sign_input_box .input_box.focus{position:relative;}
.sign_input_box .input_box select,
.sign_input_box .input_box input{width:100%;transition:.5s;border:none;border:solid 1px #ccc;border-radius: 10px;padding:9px 10px;font-size: .87rem;line-height:1rem;}
.sign_input_box .input_box select{color:#999;}
.sign_input_box .input_box span{display:none;opacity:0;float:left;height:20px;transition:.5s;position:absolute;top:0;left:0;font-size: .87rem;color: #999;padding:7px 10px}
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
.sign_input_box .input_box .phoneDbCheck input{position:relative;z-index:1;line-height:1.3rem;}
.sign_input_box .input_box .phoneDbCheck button{height:40px;position:absolute;top:0;right:0;border:solid 1px #ccc;border-radius:10px;font-size: .7rem;z-index:11;}

.pwdtitle.success{color:#498ceb;font-weight:700;}

.btnn.bTcont.phoneBtn{margin-top:0;width:100%;}
.btnn.bTcont.bTsuccess{width:100%;}

</style>