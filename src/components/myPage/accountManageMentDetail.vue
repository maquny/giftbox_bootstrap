<template>
	<div>
		<b-container class="mt-md-0 mt-4 mb-md-0 mb-4 mypage_cont_body">
			<slot name="header"></slot>
			<div class="mypage_container">
				<div class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
					<h5>계좌 정보 관리</h5>
					<div class="from_box">
						<div class="sign_input_box mt-4">
							<div class="input_box">
								<b-form-select v-model="from.accountCode" name="searchYear" id="searchYear" :options="options" v-if="disabledSta != true" :disabled="disabledSta == false"></b-form-select>
								<multiselect v-model="from" :options="options" :custom-label="nameWithLang" placeholder="은행을 선택해 주세." label="accountCode" track-by="accountCode" v-else :disabled="disabledSta == false" selectLabel="선택하려면 Enter 키를 누르세요." deselectLabel="제거하려면 Enter 키를 누르세요.">
									<span slot="noResult" class="notAcc">검색한 이름의 은행이 존재하지 않습니다.</span>
								</multiselect>
								<div class="phoneDbCheck mt-3">
									<b-form-input v-model="searchText" placeholder="" class="textinput" v-if="disabledSta != true" :disabled="disabledSta == false"></b-form-input>
									<input type="number" v-model="from.accountNum" @blur="inputBlur" placeholder="계좌번호 입력 후 “인증하기” 를 누르세요." v-else>
									<button class="" @click="accountCheck" v-if="checkedSta.accountSta != true">변경하기</button>
								</div>
							</div>
						</div>
						<div class="textC">
							<b-button class="check_btn" @click="accountChangeData" v-if="changeVal == false">확인</b-button>
							<b-button variant="primary" class="check_btn" @click="accountChangeData" v-else>확인</b-button>
						</div>
					</div>
				</div>
			</div>
		</b-container>

	</div>
	
</template>
<script>
	import Multiselect from 'vue-multiselect'
	import 'vue-multiselect/dist/vue-multiselect.min.css'
	import axios from "axios"
	export default{
		name: 'giftCardSaleLimitCheck',
		components: { Multiselect },
		data() {
			return {
				from: {
					accountNum: '',
					accountName: '',
					accountCode: null,
				},
				checkedSta:{
					accountSta: false,
				},
				options: [],
				agreements: [],
				searchText:'',
				changeVal: false,
				disabledSta: false,
				accountName: '',
				accountNum: '',
				name: '',
				mdl_tkn: '',
				preAccountNum: '',
			}
		},
		mounted(){
			this.bankData()
		},
		methods: {
			nameWithLang ({ accountCode, accountName}) {
				return `${accountName}`
			},

			inputBlur() {
				if(this.from.accountNum == '' || this.from.accountNum == undefined) return
				if(this.from.accountNum == this.preAccountNum){
					this.checkedSta.accountSta = false
					this.disabledSta = false
					this.changeVal = false
					this.bankData()
					this.showBoxOne('변경전 계좌와 동일 합니다.')
				} else {
					this.userCheckInfor()
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

			userCheckInfor(){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/info/',{ withCredentials: true })
				.then( res => {
					this.accountAxios(res.data.name)
				})
				.catch( err => {
					// console.log(err)
				});
			},

			accountAxios(name){
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/bank/'+this.from.accountCode+'/'+this.from.accountNum+'/'+name+'/')
				.then( res => {
					this.changeVal = true
				})
				.catch( err => {
					// console.log(err)
					this.changeVal = false
					// this.showMsgBoxOne(err.response.data.message)
					this.showMsgBoxOne('휴대폰 인증한 본인명의 계좌만 등록 가능합니다.')
				});
			},

			accountChangeData(){
				if(this.changeVal == true){
					axios
					.put(process.env.VUE_APP_BASE_URL + '/users/account/', this.from ,{ withCredentials: true })
					.then( res => {
						this.checkedSta.accountSta = false
						this.disabledSta = false
						this.changeVal = false
						this.showMsgBoxOne('완료되었습니다.', 'success')
						this.bankData()
					})
					.catch( err => {
						// this.showMsgBoxOne(err.response.data.message)
						this.showMsgBoxOne('휴대폰 인증한 본인명의 계좌만 등록 가능합니다.')
					});
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
					if(type == 'success'){
						this.$router.push({name: 'Home', path: '/'}, function() {
                            //console.log("privacyManageMent 호출 완료");
                        });
					}
				})
				.catch(err => {

				})
			},
			
			accountFrom(){
				return alert(from.accountCode)
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
					if(value){
						this.accountCheckAlert()
					}
				})
				.catch(err => {

				})
			},

			accountCheckAlert(){
				this.from.accountNum = ''
				this.from.accountName = ''
				this.from.accountCode = null
				if(this.checkedSta.accountSta == true){
					if(this.from.accountNum == null){
						this.showBoxOne('변경하려는 계좌번호를 입력해주세요.')
					} else {
						// this.getAxios()
					}
				} else {
					this.phoneCertifi()
				}
				
			},

			accountCheck(){
				this.showMsgBoxTwo()
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

			phoneCertifi(){
				this.checkedSta.accountSta = true
				this.disabledSta = true
				this.from.accountCode = null
				this.getBank()
			},

			bankData(){
				var objectList = new Array()
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/info/', { withCredentials: true })
				.then( res => {
					objectList[0] = {value: res.data.accountCode, text: res.data.accountName}
					this.from.accountCode
					this.searchText = ''+res.data.name+' / '+res.data.accountNum+''
					this.preAccountNum = res.data.accountNum
					this.from.accountCode = res.data.accountCode
					this.optionsSlice(objectList)
				})
				.catch( err => {
					// console.log(err);
				});
			},

			showBoxOne(text) {
				this.boxOne = ''
				this.$bvModal.msgBoxOk(text, {
					okTitle: '확인',
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
		},
		watch: {
			mdl_tkn(val){
				this.userCheckInfor()
			},

			'from.accountNum' (val){
				// if(this.from.accountNum == this.preAccountNum){
				// 	this.checkedSta.accountSta = false
				// 	this.disabledSta = false
				// 	this.changeVal = false
				// 	this.bankData()
				// 	this.showBoxOne('변경전 계좌와 동일 합니다.')
				// }
			},
		}
	}
</script>

<style>
.multiselect__option--highlight,
.multiselect__option--highlight:after{background:#007bff;}
.multiselect__tags{border-radius:10px;}
.multiselect__option{color:#000;}
.sign_input_box .input_box span.notAcc{display:block!important;opacity:1!important;padding:0!important;position:relative!important;font-size:.9rem!important;}
.multiselect__single{}
</style>
<style scoped="">
h5{padding:5px;}
.sign_from_input{}
.sign_input_box{}
.sign_input_box .title{font-size:1rem;margin-bottom: 5px;}
.sign_input_box .input_box{position: relative;}
.sign_input_box .input_box.focus{position:relative;}
.sign_input_box .input_box select,
.sign_input_box .input_box input{width:100%;transition:.5s;border:none;border:solid 1px #ccc;border-radius: 10px;padding:9px 10px;font-size: .87rem;line-height:1rem;}
.textinput{height:40px;}
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
.check_btn{width:100%;margin-top:1rem;}
</style>