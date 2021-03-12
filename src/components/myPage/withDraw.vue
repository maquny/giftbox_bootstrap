<template>
	<b-container class="mt-md-0 mt-4 mb-md-0 mb-4 mypage_cont_body">
		<slot name="header"></slot>
		<div class="mypage_container">
			<b-form-textarea
			id="textarea-no-resize"
			placeholder="Fixed height textarea"
			rows="3"
			no-resize
			v-model="withDrawText"
			></b-form-textarea>

			<div class="inputck">
				<b-form-checkbox
				id="checkbox-1"
				v-model="status"
				name="checkbox-1"
				>위 내용을 모두 확인하였습니다.
				</b-form-checkbox>
			</div>
			<div class="with_draw_box">
				<h4>탈퇴를 위해 회원 정보로 인증을 진행합니다.</h4>
				<table border="0" cellspacing="0" cellpadding="0" style="width:100%;font-size:.9rem;color: #464646;margin: 0 0 10px 0;border-top:solid 1px #e1e1e1">
					<tbody>
						<tr>
							<td style="width:23%;padding:15px;color:#464646;font-weight:bold;border-bottom:solid 1px #e1e1e1;background-color:#ededed">아이디</td>
							<td style="padding:10px;color:#464646;font-weight:bold;border-bottom:solid 1px #e1e1e1">
								<b-form-input v-model="from.userId" placeholder=""></b-form-input>
							</td>
						</tr>
						<tr>
							<td style="width:23%;padding:15px;color:#464646;font-weight:bold;border-bottom:solid 1px #e1e1e1;background-color:#ededed">이름</td>
							<td style="padding:10px;color:#464646;font-weight:bold;border-bottom:solid 1px #e1e1e1">
								<b-form-input v-model="from.name" placeholder=""></b-form-input>
							</td>
						</tr>
						<tr>
							<td style="width:23%;padding:15px;color:#464646;font-weight:bold;border-bottom:solid 1px #e1e1e1;background-color:#ededed">비밀번호</td>
							<td style="padding:10px;color:#464646;font-weight:bold;border-bottom:solid 1px #e1e1e1">
								<b-form-input v-model="from.pwd" type="password" placeholder=""></b-form-input>
							</td>
						</tr>
					</tbody>
				</table>
				<b-button variant="primary" class="withdraw_btn" @click="userIdChecked" v-if="checkedVal != true">확인</b-button>
				<div class="text-center type2" v-else>확인이 완료되었습니다.</div>
			</div>

			<div class="bTcont_body">
				<button class="btnn bTcont bTsuccess" @click="history_back">취소하기</button>
				<button id="withDrawBtn" class="btnn bTcont bTsuccess" @click="withDrawActive">회원탈퇴</button>
			</div>
		</div>
	</b-container>
</template>
<script>
	import { mapActions } from "vuex"
	import axios from "axios"
	export default{
		name: 'withDraw',
		data(){
			return {
				mdl_tkn: '',
				userCheckedPad: false,
				checkedVal: false,
				from: {
					userId: '',
					name: '',
					pwd: '',
				},
				withDrawText: '회원 탈퇴 신청에 앞서 아래의 사항을 반드시 확인하여 주시기 바랍니다.\n1. 회원탈퇴 시 처리내용\n(1) 회원 탈퇴 즉시 회원전용 서비스의 이용이 불가능합니다.\n(2) 탈퇴하신 계정의 ID와 동일한 ID로는 재 가입이 불가능합니다.\n(3) 회원 탈퇴 후 재가입 회원의 경우 신규회원 대상 이벤트에 참여하실 수 없습니다.\n(4) 소비자보호에 관한 법률 제6조(거래기록의 보전 등) 및 동법 시행령 제6조에 의거,\n* 계약 또는 청약철회 등에 관한 기록은5년, 대금결제 및 재화등의 공급에 관한 기록은5년,* 소비자의 불만 또는 분쟁처리에 관한 기록은3년동안 보관됩니다.동 개인정보는 법률에 의한 경우가 아니고서는 보유 되어지는 이외의 다른 목적으로는 이용되지않습니다.\n(5) 회원 정보: 회원탈퇴 완료 시 당사 사이트 이용 권한이 삭제되며, 기존 거래 내역에 대한 본인인증 필요성 등을 위해 회원가입에 따른 사용자정보는 6개월 동안 보관됩니다.\n2. 회원탈퇴 시 게시물 관리\n회원탈퇴 후 당사 사이트에 입력하신 게시물 및 댓글은 삭제되지 않으며, 회원정보 삭제로 인해작성자 본인을 확인할 수 없으므로 게시물 편집 및 삭제 처리가 원천적으로 불가능 합니다. 게시물 삭제를 원하시는 경우에는 먼저 해당 게시물을 삭제 하신 후, 탈퇴를 신청하시기 바랍니다.',
				status: false,
				withDrawSta: false
			}
		},
		methods: {
			...mapActions(["logOut"]),

			history_back(text, sta) {
				this.$router.go(-1)
			},

			userIdChecked(){
				axios
				.post(process.env.VUE_APP_BASE_URL + '/users/login/',this.from, { withCredentials: true })
				.then( res => {
					if(res.data.name == this.from.name){
						this.checkedVal = true
						this.withDrawSta = true
					}
				})
				.catch( err => {
					this.showMsgBoxOne('입력하신 정보가 일치하지 않습니다.')
					this.withDrawSta = false
				});
			},

			showMsgBoxOne(text) {
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

			phoneLastTest(){
				document.getElementById('withDrawBtn').classList.add('grd');
			},

			withDrawActive(){
				if(this.status != true) return this.showMsgBoxOne('내용을 확인해주세요.')

				if(this.checkedVal != true) return this.showMsgBoxOne('회원정보 인증을 진행해주세요.')

				if(this.withDrawSta == true){
					axios
					.put(process.env.VUE_APP_BASE_URL + '/users/secede/', {},{ withCredentials: true })
					.then( res => {
						this.logOut()
						this.showMsgBoxOne('회원탈퇴가 처리되었습니다.')
					})
					.catch( err => {
						if(err.response.data.message == "not complete trading remain"){
							this.showMsgBoxOne('매입요청이 진행 중입니다. 거래완료 후 탈퇴요청해주세요.')
						}
					});
				}
			},
		},
		watch: {
			mdl_tkn(val){
				this.phoneLastTest()
			},
		}
	}
</script>
​
<style scoped="">
textarea.form-control{min-height:350px;}
.inputck{padding:10px 10px 30px 10px;text-align:center;}
.withdraw_btn{width:60%;margin:1rem auto 0 auto;display:block;}
.with_draw_box{border:solid 1px #ced4da;padding:2rem;border-radius:.25rem;}

.text-center.type2{color:#777;font-weight:700;}

.btnn.bTcont.bTsuccess:hover{text-decoration:none;color:#fff;}
.btnn.bTcont.phoneBtn{margin-top:0;width:100%;}
.btnn.bTcont.bTsuccess{min-width:40%;margin:0 1%;display:inline-block;}
.bTcont_body{text-align:center;margin-top:3rem;}
.mypage_container2.sign_from{width: 550px;}
.sign_input_box .input_box .phoneDbCheck button.btn.check_btn.full{width:100%;position:relative;border:none;}
.mobile .mypage_container2.sign_from{width:100%;}
.mobile .mypage_cont_body .mypage_container{padding:1rem 0;}
.mobile .btnn.bTcont.bTsuccess{padding:0;font-size:.9rem;}
.mobile .with_draw_box{padding:1rem;}
.mobile h4{font-size:1.2rem;}
</style>

