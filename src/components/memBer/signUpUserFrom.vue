<template>
	<div>
		<slot name="header"></slot>

		<div id="signFromInput" class="sign_from_input">
			
			<div class="sign_input_box">
				<div class="title"><span id="idtitle">✓ </span>아이디로 사용할 이메일주소를 입력해주세요.</div>
				<div class="input_box">
					<input type="text" id="emailName" v-model="from.userId" @focus="inputFocus" @blur="inputBlur" placeholder="본인이 실제 사용하는 이메일 주소를 입력하세요.">
					<span>{{emailText}}</span>
				</div>
			</div>

			<div class="mt-4">
				<div class="sign_input_box">
					<div class="title"><span id="pwdtitle">✓ </span>비밀번호를 입력해 주세요.</div>
					<div class="input_box">
						<input type="password" id="txtPassword1" @focus="inputFocus" @blur="inputBlur" v-model="from.pwd" placeholder="영문/숫자/특수문자 중 2가지 조합 4~15자리">
						<span>{{passwordText1}}</span>
					</div>
				</div>
				<div class="sign_input_box mt-2">
					<div class="input_box">
						<input type="password" id="txtPassword2" @focus="inputFocus" @blur="inputBlur" v-model="from.repwd" placeholder="비밀번호 확인">
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
				<div class="title"><span>✓ </span>본인 휴대폰으로 인증해주세요.</div>
				<div class="input_box">

					<button id="phoneDeptnBtn" class="btnn bTcont phoneBtn" @click="getAxios" v-if="checkedSta.phoneSta != true">휴대폰 인증하기</button>

					<div class="phoneDbCheck mt-2" v-else>
						<input type="text" v-model="phoneStaText" placeholder="">
						<button class="" @click="phoneStaCheck">변경하기</button>
					</div>
				</div>
			</div>

			<div class="sign_input_box mt-4">
				<div class="title">✓ 계좌 인증을 해주세요.</div>
				<div class="input_box">
					<!-- <b-form-select v-model="from.accountCode" name="searchYear" id="searchYear" :options="options"></b-form-select> -->
					<multiselect v-model="account" :options="options" :custom-label="nameWithLang" placeholder="은행을 선택해 주세." label="accountCode" track-by="accountCode" selectLabel="선택하려면 Enter 키를 누르세요." deselectLabel="제거하려면 Enter 키를 누르세요.">
						<span slot="noResult" class="notAcc">검색한 이름의 은행이 존재하지 않습니다.</span>
					</multiselect>
					<div class="phoneDbCheck mt-2">
						<input type="number" v-model="account.accountNum" @focus="accountNumData" placeholder="계좌번호 입력 후 “인증하기” 를 누르세요.">
						<button class="" @click="accountCheck">{{ checkedSta.accountSta ? '변경하기' : '인증하기' }}</button>
					</div>
				</div>
			</div>
		</div>
		<button id="nextDeptnBtn" class="btnn bTcont bTsuccess" @click="successSignUp">회원가입하기</button>
	</div>
</template>
<script>
	import Multiselect from 'vue-multiselect'
	import 'vue-multiselect/dist/vue-multiselect.min.css'
	import axios from "axios"
	import { mapState, mapActions } from "vuex"

	export default{
		components: { Multiselect },
		data(){
			return {
				boxTwo: '',
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
					accountNum: '',
					accountName: '',
					accountCode: '',
					agreements: []
				},
				account: {
					accountNum: '',
					accountName: '',
					accountCode: '',
				},
				checkedSta:{
					idSta: false,
					passwordSta: false,
					phoneSta: false,
					accountSta: false,
				},
				phoneStaText:'',
				lastUserDatalVal: false,
				emailText:'',
				passwordText1:'',
				passwordText2:'',
				phoneText:'',
				emailWarning1: '이메일 형식이 올바르지 않습니다',
				options: [],
				agreements: []
			}
		},
		created() {
			this.$emit('checkeddetail', {name: 'signUserFrom', sta: true, goingSignUp: true});
			this.getBank()
			this.preTerms()
		},
		computed: {
			...mapState(["userData"])
		},
		methods: {
			...mapActions(["userDataVal"]),

			sdfun(){
				this.showMsgBoxOne('이미 가입하신 계정이 존재 합니다.', 2)
			},

			nameWithLang ({ accountCode, accountName}) {
				return `${accountName}`
			},

			accountNumData(){
				return this.account.accountNum = this.account.accountNum.replace(/[^0-9]/g, '');
			},

			preTerms(){
				if(this.$route.query.idx.length == 4){
					this.from.agreements = [ {"idx": 1}, {"idx": 2}, {"idx": 3}, {"idx": 4} ]
				} else {
					this.from.agreements = [ {"idx": 1}, {"idx": 2}, {"idx": 3}, {"idx": 4}, {"idx": 5} ]
				}
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
				if(obj.target.id == 'emailName'){
					this.checkEmail(obj)
				} else if(obj.target.id == 'txtPassword1'){
					this.passwordChecked1(obj)
				} else if(obj.target.id == 'txtPassword2'){
					this.passwordChecked2(obj)
				} else {
					obj.target.parentElement.classList.remove('focus', 'dis_b')
				}
			},

			changeItem(event){
				// console.log(event)
			},

			pwdChecked: function(){
				var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
				if(!reg_email.test(this.from.pwd)) {                            
					return false;        
				} else {                      
					return true;        
				}    
			},

			checkEmail(obj){

				if(this.from.userId == ''){
					return obj.target.parentElement.classList.remove('success', 'focus', 'err', 'dis_b');
				}

				if(this.effectEmail(this.from.userId) != true){
					obj.target.parentElement.classList.remove('success')
					this.emailText = '이메일 형식이 올바르지 않습니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
					return
				}
				this.checkedSta.idSta = false;
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/checkEmailDuplicate/'+this.from.userId+'/')
				.then( res => {
					this.emailText = '사용가능한 이메일 입니다.'
					obj.target.parentElement.classList.remove('err')
					obj.target.parentElement.classList.add('dis_b');
					setTimeout(obj.target.parentElement.classList.add('focus', 'success'), 400)
					this.checkedSta.idSta = true;
					this.successDepth();
				})
				.catch( err => {
					obj.target.parentElement.classList.remove('success')
					this.emailText = '이미 사용 중인 아이디(이메일) 입니다'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
				});
			},

			effectEmail(str){
				var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
				if(!reg_email.test(str)) {
					return false;
				}
				else {
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
				this.passwordSta = false;
				obj.target.parentElement.classList.remove('success')
				if(this.from.pwd == "") return
				if(this.from.pwd == this.from.repwd){
					this.passwordText2 = '비밀번호가 일치합니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'success'), 400);
					this.checkedSta.passwordSta = true;
					this.successDepth();
				} else {
					this.passwordText2 = '비밀번호가 일치하지 않습니다.'
					obj.target.parentElement.classList.add('dis_b')
					setTimeout(obj.target.parentElement.classList.add('focus', 'err'), 400)
				}
			},

			successDepth(){
				if(this.checkedSta.idSta == true && this.checkedSta.passwordSta == true ){
					document.getElementById('phoneDeptnBtn').classList.add('grd');
				}
			},
			
			getBank(){
				var objectList = new Array()
				var objectListData = new Object()
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/bank/')
				.then( res => {
					for(var i=0;Object.keys(res.data).length>i;i++){
						objectList[i] = {accountCode: Object.keys(res.data)[i], accountName: Object.values(res.data)[i]}
					}
					this.options = objectList
					// this.optionsSlice(objectList)
				})
				.catch( err => {
					// console.log(err)
				});

			},

			optionsSlice(arrayOfObjects){
				var byDate = arrayOfObjects.slice(0);
				byDate.sort(function(a,b) {
					return a.value - b.value;
				});
				
				byDate.unshift({ value: null, text: '은행 선택' })
				this.options = byDate
			},

			getAxios(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyRequest/')
				.then( res => {
					if(this.checkedSta.idSta == true && this.checkedSta.passwordSta == true ){
						open_popup(res.data.mdl_tkn, this);
					}
				})
				.catch( err => {
					// console.log(err)
				});
			},

			phoneLastTest(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyCheck/'+this.mdl_tkn+'/')
				.then( res => {
					this.firstCheckedPhone(res)
				})
				.catch( err => {
					// console.log(err)
					this.checkedSta.phoneSta = false
				});
			},

			//ci조회로 변경 예정
			firstCheckedPhone(res){
				axios
				.post(process.env.VUE_APP_BASE_URL + '/users/checkUserDuplicate/', { "ci": res.data.ci}, { withCredentials: true })
				.then( res => {
					this.phoneLastTestNext(res)
				})
				.catch( err => {
					this.showMsgBoxOne('이미 가입하신 계정이 존재 합니다.', 2)
				});
			},

			phoneLastTestNext(res){
				if(res.data.birth.substring(0, 4) >= 2007){
					return this.showMsgBoxOne(' 14세 미만인 경우, 회원가입이 불가합니다.')
				}
				this.from.birth = res.data.birth
				this.from.ci = res.data.ci
				this.from.foreigner = res.data.foreigner
				this.from.gender = res.data.gender
				this.from.mobileOperator = res.data.mobileOperator
				this.from.name = res.data.name
				this.from.tel = res.data.tel
				this.from.email = this.from.userId
				this.checkedSta.phoneSta = true//휴대폰 인증
				this.phoneStaText = this.from.name +' / '+ this.from.tel
			},

			accountAxios(){
				//휴대폰인증을 하지 않아 이름이 없는 경우
				if('/'+this.from.name+'/' == '//') return
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/bank/'+this.account.accountCode+'/'+this.account.accountNum+'/'+this.from.name+'/')
				.then( res => {
					this.checkedSta.accountSta = true
					this.showMsgBoxOne('정상처리 되었습니다.')
				})
				.catch( err => {
					this.showMsgBoxOne(err.response.data.message)
					this.checkedSta.accountSta = false
				});
			},

			accountFrom(){
				return alert(from.accountCode)
			},

			accountCheck(){//계좌 변경
				if(this.checkedSta.idSta == true){
					this.from.accountCode = this.account.accountCode
					this.from.accountNum = this.account.accountNum
					this.from.accountName = this.account.accountName
					this.accountAxios()
				} else {
					this.showMsgBoxOne('휴대폰 본인인증 완료 후 시도해주세요.')
				}
			},

			phoneStaCheck(){//휴대폰 변경
				this.showMsgBoxTwo()
			},

			finalSuccessDepth(){
				if(this.checkedSta.idSta == true && this.checkedSta.passwordSta == true && this.checkedSta.phoneSta == true && this.checkedSta.accountSta == true ){
					document.getElementById('nextDeptnBtn').classList.add('grd');
				}
			},

			successSignUp(){//회원가입 완
				if(this.checkedSta.idSta == true && this.checkedSta.passwordSta == true && this.checkedSta.phoneSta == true && this.checkedSta.accountSta == true){
					axios
					.post(process.env.VUE_APP_BASE_URL + '/users/signin/', this.from, { withCredentials: true })
					.then(function (response) {
						this.$router.push({name: 'signUpComplete', path: 'signUpComplete'}, function() {
							// console.log("signUpComplete 호출 완료");
						});
					}.bind(this))
					.catch(err => {
						// console.log(err)
					})
				} else {
					this.showMsgBoxOne('모든 항목은 필수사항입니다.')
				}
			},

			showMsgBoxOne(text, type) {
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
					if(type == 2){
						this.$router.push({name: 'logInFrom', path: '/logIn'});
					}
				})
				.catch(err => {

				})
			},

			showMsgBoxTwo() {
				this.boxTwo = ''
				this.$bvModal.msgBoxConfirm('변경하시겠습니까?', {
					okTitle: '확인',
					cancelTitle: '취소',
					okVariant: 'outline-dark',
					cancelVariant: 'outline-dark',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					this.boxTwo = value
					if(value == true){
						this.from.birth = ''
						this.from.ci = ''
						this.from.foreigner = ''
						this.from.gender = ''
						this.from.mobileOperator = ''
						this.from.name = ''
						this.from.tel = ''
						this.checkedSta.phoneSta = false
						document.getElementById('phoneDeptnBtn').classList.add('grd');
					}
				})
				.catch(err => {

				})
			}
		},
		watch: {
			// 'from.accountCode' (val){
			// 	for(var i=0;this.options.length > i;i++){
			// 		if(this.options[i].value == val){
			// 			this.from.accountName = this.options[i].text
			// 		}
			// 	}
			// },

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

			'checkedSta.phoneSta' (val){
				if(this.checkedSta.idSta == true && this.checkedSta.passwordSta == true ){
					this.finalSuccessDepth()
				}
			},

			'checkedSta.accountSta' (val){
				if(this.checkedSta.idSta == true && this.checkedSta.passwordSta == true ){
					this.finalSuccessDepth()
				}
			},

			mdl_tkn(val){
				this.phoneLastTest()
			},
			$route (data){
				// console.log(data)
			}
		}
	}
</script>

<style scoped="">
.sign_from_input{}
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

#idtitle.success,
#pwdtitle.success{color:#498ceb;font-weight:700;}

.btnn.bTcont.phoneBtn{margin-top:0;width:100%;}
.btnn.bTcont.bTsuccess{width:100%;}
</style>