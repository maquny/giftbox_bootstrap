<template>
	<div>
		<div class="form_2box" v-if="findIdSta != true">
			<b-form-group
			id="input-group-phone"
			label="가입 당시 인증받은 휴대전화 번호를 통해 아이디를 찾을 수 있습니다."
			label-for="input-phone"
			description="본인 명의의 휴대폰으로 인증해주세요."
			>
			<b-form-input
			id="input-phone"
			v-model="form.phone"
			type="text" 
			required
			@keyup="phoneNumData"
			@blur="inputBlur"
			maxlength="11"
			placeholder="휴대폰번호 - 제외 후 입력"
			></b-form-input>
		</b-form-group>

		<b-button type="button" id="checkedPhone" variant="secondary" class="btnn" @click="firstCheckedPhone">아이디 찾기</b-button>
	</div>

	<div class="form_2box" v-else>
		<div class="form_line_box">
			<div class="form_line user_name">
				<h4 v-model="userName">{{userName}}</h4> 님이 가입하신 아이디는
			</div>
			<div class="form_line user_id">
				<h3 v-model="userId">{{userId}}</h3> 님이 가입하신 아이디는
			</div>
			<div class="form_line normal">
				<p>입니다</p>
				<p>( 가입일 : {{createDate}} )</p>
			</div>
			<div class="btn_box">
				<router-link to="/login" class="btnn grd" >로그인</router-link>
				<router-link to="/login/resetPassword" class="btnn" >비밀번호 재설정</router-link>	
			</div>
		</div>
	</div>
</div>

</template>
<script>
	import axios from "axios"

	export default{
		name: 'findId',
		data() {
			return {
				onlyNumber:'',
				findIdSta: false,
				userName: '',
				userId: '',
				createDate: '',
				logoImg: require('@/assets/images/make_pin_logo.png'),
				mdl_tkn:'',
				form: {
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
					phone:'',
				},
			}
		},

		methods: {

			showMsgBoxOne(text) {
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
					this.boxOne = value
				})
				.catch(err => {
				})
			},

			phoneNumData(){
				return this.form.phone = this.form.phone.replace(/[^0-9]/g, '');
			},

			inputBlur(){
				var regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
				var tel = this.form.phone
				if( !regExp.test(tel) ) {
					this.showMsgBoxOne('휴대폰번호 형식이 올바르지 않습니다.')
					document.getElementById('checkedPhone').classList.remove('grd');
				} else {
					document.getElementById('checkedPhone').classList.add('grd');
				}
			},

			firstCheckedPhone(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/findId/'+this.form.phone+'/')
				.then( res => {
					this.nextPhoneChecked()
				})
				.catch( err => {
					this.showMsgBoxOne('입력하신 정보와 일치하는 회원이 없습니다.')
					// console.log(err)
				});
			},

			nextPhoneChecked(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyRequest/')
				.then( res => {
					open_popup(res.data.mdl_tkn, this);
				})
				.catch( err => {
					// console.log(err)
				});
			},

			successPhone(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/mobileUserVerifyCheck/'+this.mdl_tkn+'/')
				.then( res => {
					this.findIdData(res.data.tel)
				})
				.catch( err => {
					this.showMsgBoxOne('입력하신 정보와 일치하는 회원이 없습니다.')
					// console.log(err)
				});
			},

			findIdData(phoneNum){
				var phoneNumTest = phoneNum
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/findId/'+phoneNumTest+'/')
				.then( res => {
					this.userName = res.data.name
					this.userId = res.data.email
					var createDay = res.data.createDate.split(" ")[0].split("-")
					this.createDate = ''+createDay[0]+'년'+createDay[1]+'월'+createDay[2]+'일'
					this.findIdSta = true
				})
				.catch( err => {
					// console.log(err)
				});
			}
		},
		watch: {
			mdl_tkn(val){
				this.successPhone()
			},

			'form.phone'(val){
				// console.log(val)
			}
		}
	}
</script>

<style scoped="">
.form_line_box{text-align:center;}
.form_line{display:block;}
.form_line h4,
.form_line h3 {display:inline-block;}
.form_line.user_id{color:#5077dc;}
.form_line_box .btn_box{}
.form_line_box .btn_box .btnn{display:inline-block;min-width:40%;}
.form_line_box .btn_box .btnn:first-child{margin-right:2%;}
.form_2box{border-bottom:none;}
.btnn{min-width:100%;height:50px;line-height:50px;display:inline-block;padding:0 50px;border-radius:2em;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 6px 0 rgba(0,0,0,.1);background:#ccc;font-weight:500;color:#fff;font-size:16px;text-align:center;vertical-align:middle;cursor:pointer;overflow:visible;white-space:nowrap;margin-top:40px;margin:30px auto 0 auto;display:block}
.btnn.grd{background-color:#498ceb;background-image:linear-gradient(45deg,#498dec 0,#6729a7 95%);box-shadow:0 1px 6px 0 rgb(94 67 183);color:#fff;border:0}
.sub_text p{font-size:.75em;margin-bottom:.4rem;}
</style>