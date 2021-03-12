<template>
	<div>
		<b-overlay :show="pinCodeShow" rounded="sm">

			<div class="giftcard_progress_title" v-bind:style="{ backgroundImage: 'url(' + itemImg + ')' }">
				<div class="mb-md-5 pb-5 pt-5 container">
					<h3>상품권 판매 요청</h3>
					<div>안전한 자동화 시스템으로 핀번호 입력 후 1분 내 판매 완료됩니다!</div>
					<div class="sub_top_item"><img alt="Vue logo" src="@/assets/sub_top_item.png"></div>
				</div>
			</div>
			<div class="mt-md-5 mt-4 mb-md-5 mb-4 container">

				<slot name="header"></slot>

				<div class="mt-3">
					<div v-b-toggle.collapse-1 class="collapse_btn"><span>※ 판매신청 전 꼭 확인해주세요</span></div>
					<b-collapse id="collapse-1" class="mt-2">
						<b-card>
							<p class="card-text">• 1회 최소 / 최대 판매 요청 금액 : 1만원 이상 / 500만원 이하</p>
							<p class="card-text">• 판매요청 가능 상품권 : 컬쳐랜드 문화상품권, 해피머니 상품권</p>
							<p class="card-text">• 1일 판매 한도 금액 : 1,000만원까지</p>
							<p class="card-text">• 1개월 판매 한도 금액 : 2,0000만원까지</p>
						</b-card>
					</b-collapse>
				</div>
				<div class="mt-5">
					<h5>상품권 선택</h5>
					<div class="s_title">판매하실 상품권 종류를 선택하세요!</div>
					<div class="checks_body mt-3">
						<div class="name">상품권 종류</div>
						<div class="checks">
							<input type="radio" @change="radioChceck" name="money" value="culture" id="culture">
							<label for="culture" :style="'background-image:url('+backgroundImage+')'">컬쳐랜드 문화상품권</label>
						</div>
						<div class="checks">
							<input type="radio" @change="radioChceck" name="money" value="happy" id="happy">
							<label for="happy" :style="'background-image:url('+backgroundImage+')'">해피머니 상품권</label>
						</div>
					</div>
				</div>

				<div class="giftcard_progress_box2 mt-5">
					<h5>핀번호 입력</h5>
					<div class="s_title">상품권 핀번호(필요시 인증번호)를 입력하세요.<br/>
					교환권의 경우, 해당 사이트에서 상품권 핀번호로 교환 후 시도해주세요.</div>
					<div class="pinnum_body mt-3">

						<div class="tab_con_r type_mobile">
							<div class="accd_lst_sms">
								<ul>
									<li class="item a_hide mb-4">
										<div class="answer">
											<div class="textareaWrap_sms">
												<div class="s_title">문자로 수신한 상품권의 경우,<br/> 내용을 복사후 ＂추출하기”를 누르면, 자동입력되며 최대 50개까지 가능합니다.</div>
												<div class="textarea_type1 mt-2" @click="pinLoock">
													<textarea rows="3" :class="{active: cultureIsActive}" v-if="selected == ''" class="normal" :disabled="giftRadio != true" placeholder="ex) 컬쳐랜드 : 1234-1234-1234-123456"></textarea>
													<textarea rows="3" :class="{active: cultureIsActive}" v-if="selected == 'culture'" :disabled="giftRadio != true" :id="'mpin_auto_'+selected" data-plugin-textarea-autosize="" placeholder="ex) 컬쳐랜드 : 1234-1234-1234-123456"></textarea>
													<textarea rows="3" :class="{active: happyIsActive}" v-if="selected == 'happy'" :disabled="giftRadio != true" :id="'mpin_auto_'+selected" data-plugin-textarea-autosize="" placeholder="ex) 해피머니 : 1234-1234-1234-1234 12345678"></textarea>
												</div>
												<div class="btn_wrap" @click="pinLoock">
													<button type="button" class="btnn grd" @click="pinAutoNum">핀번호 자동 추출</button>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div class="tab_con_l">
							<div class="input_pin">
								<ul id="c_gift_body" @click="pinLoock">
									<li class="gift_row" v-for=" inputList in listData"  :v-Key="listData">
										<div class="input_type1" :class="inputList.name">
											<span class="num c_num" >{{inputList.numBer}}</span>
											<input type="text" :disabled="giftRadio != true" class="first_contents" :class="{active: cultureIsActive, 'view_cont': firstVal}" v-mask="{mask: '9 9 9 9 - 9 9 9 9 - 9 9 9 9 - 9 9 9 9 9 9', greedy: true}" v-on:change="maskCheck" placeholder="핀(PIN)번호 입력" v-model="inputList.culturePin"/>
											<p class="first_contents" :class="{active: happyIsActive}">
												<span class="l">
													<input type="tel" name="gift_pin[]" v-mask="{mask: '9 9 9 9 - 9 9 9 9 - 9 9 9 9 - 9 9 9 9 9 9', greedy: true}" placeholder="핀(PIN)번호 입력" v-model="inputList.happyPin" :disabled="giftRadio != true">
												</span>
												<span class="r"><input type="tel" name="cert[]" :disabled="giftRadio != true" v-mask="{mask: '9 9 9 9 9 9 9 9', greedy: true}" placeholder="인증번호" v-model="inputList.happyCert"></span>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div class="tab_con_r">
							<div class="accd_lst_sms">
								<ul>
									<li class="item a_hide">
										<div class="qusetion">
											<h5>핀번호 자동 추출</h5>	
										</div>
										<div class="answer">
											<div class="textareaWrap_sms">
												<div class="s_title">문자로 수신한 상품권의 경우,<br/> 내용을 복사후 ＂추출하기”를 누르면, 자동입력되며 최대 50개까지 가능합니다.</div>
												<div class="textarea_type1 mt-2" @click="pinLoock">
													<textarea rows="3" :class="{active: cultureIsActive}" v-if="selected == ''" class="normal" :disabled="giftRadio != true" placeholder="ex) 컬쳐랜드 : 1234-1234-1234-123456"></textarea>
													<textarea rows="3" :class="{active: cultureIsActive}" v-if="selected == 'culture'" :disabled="giftRadio != true" :id="'ppin_auto_'+selected" data-plugin-textarea-autosize="" placeholder="ex) 컬쳐랜드 : 1234-1234-1234-123456"></textarea>
													<textarea rows="3" :class="{active: happyIsActive}" v-if="selected == 'happy'" :disabled="giftRadio != true" :id="'ppin_auto_'+selected" data-plugin-textarea-autosize="" placeholder="ex) 해피머니 : 1234-1234-1234-1234 12345678"></textarea>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="pinnum_body">
						<div class="tab_con_l">
							<div class="btn_wrap">
								<span><button type="button" id="btn_add" class="btnn" @click="addInput">+ 핀번호 입력 추가</button></span>
							</div>
						</div>
						<div class="tab_con_r">
							<div class="btn_wrap">
								<button type="button" class="btnn grd" @click="pinAutoNumFirst">핀번호 자동 추출</button>
							</div>
						</div>
					</div>
					<div class="checks_body type2 mt-5">
						<div class="checks">
							<input type="checkbox" @click="ckeckBoxService" name="money" value="service" id="service">
							<label for="service" :style="'background-image:url('+backgroundImage+')'">상품권 판매서비스 이용 조건 및 서비스 진행 동의</label>
						</div>
						<span class="service_more" @click="$bvModal.show('modal-scrollable2')">상세보기</span>
						<b-modal id="modal_center" centered title="상품권 판매서비스 이용 조건 및 서비스 진행 안내">
							<p class="my-4">{{itemText}}</p>
						</b-modal>
					</div>
					<div class="btn_wrap first_btn_cont">
						<button type="button" class="btnn grd" @click="giftSubmitNor">상품권 판매 요청</button>
					</div>
				</div>
			</div>

			<b-modal id="modal-scrollable" size="xl" scrollable title="은행 점검시간 안내" hide-footer>
				<div class="mb-3">지금은 은행 점검 시간입니다.<br/>안전한 이체 서비스 제공을 위해 은행 점검시간(비정기 포함) 및 전후 10분간 판매요청이 제한됩니다.<br/>아래 은행별 점검 시간 확인하시고, 이후에 다시 시도해주세요.</div>
				<b-table striped hover :items="items" :fields="fields"></b-table>
			</b-modal>
			<b-modal id="modal-scrollable2" scrollable title="상품권 판매서비스 이용 조건 및 서비스 진행 동의" title-tag="h6" hide-footer>
				<p>• 아래 항목에 동의 후, 상품권 판매 서비스를 이용할 수 있습니다.</p>
				<p>• 상품권 판매 금액은 회원가입시 인증한 본인 명의 계좌로만 입금이가능합니다.</p>
				<p>• 상품권 판매 요청 시, 회사는 일정 비율의 수수료를 차감 후 매입대금을 사용자의 계좌로 지급합니다.<br/>매입 수수료율 및 수수료 관련 사항은 공지사항 게시판을 통해 공지합니다.</p>
				<p>• 부정한 방법으로 획득한 상품권을 거래할 경우 발생하는 민, 형사상의 모든 책임은 거래 이용자 본인에게 있습니다.</p>
				<p>• 완료된 거래건은 취소나 환불이 불가하며, 판매가 완료된 핀번호는 사용완료 처리되므로, 타 서비스에서 이용이 불가합니다.</p>
				<p>• 부정한 목적 또는 방법으로 본 서비스를 이용할 경우 발생하는 민, 형사상의 모든 책임은 이용자 본인에게 있습니다.</p>
			</b-modal>
			<div>{{culturelistDataLength}}</div>
			<div>{{happylistDataLength}}</div>

		</b-overlay>
		<div @click="sdfun"> sdfsdfsdfdsf</div>
	</div>
</template>

<script>
	import { mapState } from "vuex"
	import axios from "axios"
	export default{
		name: 'giftCardInput',
		data(){
			return{
				pinCodeShow: false,
				backgroundImage: require('@/assets/ico_chk.png'),
				itemImg: require('@/assets/sub_top_bg.png'),
				cultureIsActive: false,
				happyIsActive: false,
				firstVal: true,
				cultureValue: '',
				browType: this.browType,
				happyValue: '',
				selected: '',
				postUrl: '',
				giftRadio: false,
				maxPinLength: 50,
				isShow: false,
				addInputLength: 5,
				itemText:'상품권 판매서비스 이용 조건 및 서비스 진행 안내상품권 판매서비스 이용 조건 및 서비스 진행 안내',
				inforText1: '컬쳐랜드 핀번호는 16자리 또는 18자리입니다. 12자리 핀번호는 상품권이 아닌 교환권입니다.\n컬쳐랜드 사이트에서 상품권 핀번호로 교환',
				inforText2: '해피머니는 16자리 핀번호와 8자리 인증번호로 구성되어 있습니다. 12자리 핀번호는 상품권이 아닌 교환권입니다. \n해피머니 사이트에서 상품권 핀번호로 교환 후 판매신청 해주세요.',
				inforText3: '',
				listData: [
				{name: 'num1', numBer: 1, culturePin:'', happyPin: '', happyCert:''},
				{name: 'num2', numBer: 2, culturePin:'', happyPin: '', happyCert:''},
				{name: 'num3', numBer: 3, culturePin:'', happyPin: '', happyCert:''},
				{name: 'num4', numBer: 4, culturePin:'', happyPin: '', happyCert:''},
				{name: 'num5', numBer: 5, culturePin:'', happyPin: '', happyCert:''},
				],
				culturelistDataLength: 0,
				happylistDataLength: 0,
				giftSubmitData: [],
				notGiftSubmitData: [],
				pinNum:[],
				agreeChecked: false,
				cultureSeve: true,
				happySeve: true,
				fields: ['은행', '업무시간', '정기점검시간'],
				items: [
				{ 은행: '산업은행', 업무시간: '00:30 ~ 23:30', 정기점검시간: '매주 일요일 00:00 ~ 04:00' },
				{ 은행: '기업은행', 업무시간: '00:30 ~ 24:00', 정기점검시간: '없음' },
				{ 은행: '국민은행', 업무시간: '00:30 ~ 24:00', 정기점검시간: '3주차 일요일 00:00 ~ 00:30, 05:00 ~ 05:30' },
				{ 은행: '수협', 업무시간: '없음', 정기점검시간: '없음' },
				{ 은행: '농협', 업무시간: '없음', 정기점검시간: '없음' },
				{ 은행: '우리은행', 업무시간: '00:30 ~ 23:50', 정기점검시간: '매주 금요일 00:00~00:40, 2주차 일요일 00:00 ~ 06:00' },
				{ 은행: '제일은행', 업무시간: '00:30 ~ 23:30', 정기점검시간: '없음' },
				{ 은행: '시티은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '공휴일 다음 00:00 ~ 02:00, 매일 00:00 ~ 04:30' },
				{ 은행: '대구은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '분기말에 한번 일요일 00:00 ~ 06:00' },
				{ 은행: '부산은행', 업무시간: '00:30 ~ 23:30', 정기점검시간: '월요일 00:00 ~ 04:00' },
				{ 은행: '광주은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '2주차 일요일 00:00 ~ 06:00' },
				{ 은행: '제주은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '월, 수 04:30 ~ 05:00' },
				{ 은행: '전북은행', 업무시간: '00:30 ~ 24:00', 정기점검시간: '2주차 토요일 00:00 ~ 04:00' },
				{ 은행: '경남은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '2주차 일요일 02:00 ~ 06:00' },
				{ 은행: '새마을금고', 업무시간: '00:30 ~ 23:50', 정기점검시간: '없음' },
				{ 은행: '신협', 업무시간: '00:30 ~ 23:40', 정기점검시간: '없음' },
				{ 은행: '우체국', 업무시간: '00:30 ~ 23:40', 정기점검시간: '매일 04:00 ~ 05:00' },
				{ 은행: '하나은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '없음' },
				{ 은행: '신한은행', 업무시간: '00:30 ~ 23:40', 정기점검시간: '00:00 ~ 01:00' },
				]
			}
		},
		created() {
			this.giftSeviceSta()
			this.userData()
			this.userAccountData()
			this.browType = 'desktop'
		},
		computed: {
			...mapState(["isLogin"])

		},
		mounted(){
			document.getElementsByClassName('one')[0].classList.add('active');
		},
		methods:{

			sdfun(){
				this.pinCodeShow = true
			},

			pinLoock(){
				if(this.selected == ''){
					this.showMsgBoxOne('상품권을 먼저 선택해주세요.')
				}
			},

			userAccountData(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/info/', { withCredentials: true })
				.then( res => {
					this.bankCheckData(res.data.accountCode)
				})
				.catch( err => {
					// console.log(err);
				});
			},

			numberDataCh(obj){
				if(obj == 'culture' ){
					this.cultureValue  = this.cultureValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
				}
				if(obj == 'happy' ){
					this.happyValue  = this.happyValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
				}
			},


			bankCheckData(val){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/bank/'+val+'/NA/', { withCredentials: true })
				.then( res => {
					//console.log(res)
				})
				.catch( err => {
					this.$bvModal.show('modal-scrollable')
				});
			},

			userData(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/trading/limit/', { withCredentials: true })
				.then( res => {
					if(res.data.dayCompletePrice >= dayLimit) return this.showMsgBoxOne('일 판매요청 제한금액을 초과하였습니다.')
						if(res.data.monthCompletePrice >= monthLimit) return this.showMsgBoxOne('월 판매요청 제한금액을 초과하였습니다.')
							if(res.data.nightCompletePrice >= nightLimit) return this.showMsgBoxOne('심야시간 내 판매요청 제한 금액을 초과하였습니다.')
						})
				.catch( err => {
					// console.log(err);
				});
			},

			giftSeviceSta(val){
				axios 
				.get(process.env.VUE_APP_BASE_URL + '/users/tradingMenu/', { withCredentials: true })
				.then(function (response) {
					if(response.data[0].menuName == 'culture') this.cultureSeve = response.data[0].used
						if(response.data[1].menuName == 'happy') this.happySeve = response.data[1].used
					}.bind(this))
				.catch(function (error) {
					// console.log(error);
				}.bind(this));
			},

			showMsgBoxTwo(title, text) {
				this.boxTwo = ''
				this.$bvModal.msgBoxConfirm(text, {
					title: title,
					okTitle: '확인',
					cancelTitle: '취소',
					okVariant: 'outline-dark',
					cancelVariant: 'outline-dark',
					headerClass: 'p-2 border-bottom-0',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					this.boxTwo = value
					if(value == true){
						this.giftSubmit()
					}
				})
				.catch(err => {
				})
			},

			storeSta(){
				if(this.isLogin != true){
					this.showMsgBoxOne('로그인이 필요한 서비스 입니다.')
				} else {

				}
			},

			userAccountData(){
				
			},

			giftSubmitNor(){
				if(this.selected == ''){
					return this.showMsgBoxOne('상품권을 먼저 선택해주세요.')
				}
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/info/', { withCredentials: true })
				.then( res => {
					this.giftSubmitBankCheck(res.data.accountCode)
				})
				.catch( err => {
					// console.log(err);
				});
			},

			giftSubmitNor2(){
				if(this.agreeChecked){
					
				} else {
					return this.showMsgBoxOne('판매조건 동의 후 시도해주세요.')
				}

				if(this.selected == 'culture'){
					if(this.listData[0].culturePin.length == 0){
						return this.showMsgBoxOne('핀번호 입력 후 시도해주세요')
					}
				} else {
					if(this.listData[0].happyPin == 0){
						return this.showMsgBoxOne('핀번호 입력 후 시도해주세요')
					} else {
						if(this.listData[0].happyCert == 0){
							return this.showMsgBoxOne('인증번호 입력 후 시도해주세요.')
						}
					}
				}
				this.showMsgBoxTwo('상품권 판매 진행', '상품권을 판매하시겠습니까? \n판매 후에는 취소가 불가합니다.')
			},

			giftSubmitBankCheck(val){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/bank/'+val+'/NA/', { withCredentials: true })
				.then( res => {
					this.giftSubmitNor2()
				})
				.catch( err => {
					this.showMsgBoxOne(err.response.data.message)
				});
			},

			giftSubmit(){
				//컬쳐랜드 핀번호는 16자리 또는 18자리입니다.
				//16자리 핀번호와 8자리
				var giftSubmitData = new Array();

				if(this.agreeChecked){
					for(var i=0;this.listData.length>i;i++){
						if(this.selected == 'culture'){
							if(this.listData[i].culturePin != ''){
								if(this.listData[i].culturePin.replace(/[^0-9]/g,'').length == 16 || this.listData[i].culturePin.replace(/[^0-9]/g,'').length == 18){
									giftSubmitData.push(this.listData[i].culturePin.replace(/[^0-9]/g,''))
								} else {
									return this.showMsgBoxOne('상품권의 숫자를 확인해주세요.')
								}
								//giftSubmitData.push(this.listData[i].culturePin.replace(/[^0-9]/g,''))
							} else {
								break;
							}
						} else {
							if(this.listData[i].happyPin != ''){
								giftSubmitData.push(this.listData[i].happyPin.replace(/[^0-9]/g,'') + this.listData[i].happyCert.replace(/[^0-9]/g,''))
							} else {
								break;
							}
						}
					}
					this.giftSubmitStart(giftSubmitData);
				} else {
					// console.log()
				}
			},

			serviceInspection(){
				this.showMsgBoxOne('해당 상품권 매입은 서비스 점검중입니다.공지사항을 참조하세요.')
			},

			giftSubmitStart(val){
				axios
				.post(process.env.VUE_APP_BASE_URL + this.postUrl, val, { withCredentials: true })
				.then(function (response) {
					this.showMsgBoxOne('판매 요청이 정상적으로 접수되었습니다.')
					this.$router.push({name: 'giftCardComplete', path: 'giftCardComplete' , query: {idx: response.data.idx}}, function() {
						// console.log("giftCardComplete 호출 완료");
					});
				}.bind(this))
				.catch(function (error) {
					var text=''
					if(error.response.data.message.indexOf('pinCodes duplicate') != -1){
						text= '판매완료 또는 판매불가상태의 핀코드가 있습니다. 확인 후 다시 시도해주세요.'
					} else {
						text= '상품권의 숫자를 확인해주세요.'
					}
					this.showMsgBoxOne(text)
					// console.log(error);
				}.bind(this));
			},

			pinAutoNumFirst(){

				this.pinCodeShow = true
				setTimeout(() => {
					this.pinAutoNum()
				}, 300);
			},

			pinAutoNum(pinNum){
				if(this.selected == ''){
					return this.showMsgBoxOne('상품권을 먼저 선택해 주세요.')
				}
				if(this.selected == 'culture') {
					this.culturePinAutoNum()
				} else if(this.selected == 'happy') {
					this.happyPinAutoNum()
				}
			},

			culturePinAutoNum(pinNum){
				if(this.culturelistDataLength >= this.maxPinLength){
					this.pinCodeShow = false
					return this.showMsgBoxOne('최대 '+this.maxPinLength+' 개까지 가능합니다.')
				}

				var patten = /([0-9]{16,18})|([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4,6})|([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4,6})/g;
				var pinInputName = 'ppin_auto_'+this.selected
				var auto_text = ''
				if(this.browType == 'desktop'){
					auto_text = document.getElementById('ppin_auto_'+this.selected).value.replace(/ /g, '');
				} else {
					auto_text = document.getElementById('mpin_auto_'+this.selected).value.replace(/ /g, '');
				}

				var gift_pin_array = auto_text.match(patten);
				var gift_pin_result = new Array();
				var newlistData = new Array();

				if(gift_pin_array == null){
					this.pinCodeShow = false
					return alert("핀번호 및 상품권 종류 확인 후 다시 시도해주세요.");
				}

				var value_replace = '';

				gift_pin_array.forEach(function(value, index) {
					if(index < this.maxPinLength){
						value_replace = value.replace(/(\s*)/g, "");
						value_replace = value_replace.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,"");
						gift_pin_result.push(value_replace);
					}
				}.bind(this));

				var saveCulturePin = []
				for(var i=0;this.listData.length > i;i++){
					if(this.listData[i].culturePin != ""){
						saveCulturePin.unshift(this.listData[i].culturePin)
					}
				}

				for(var i=0;saveCulturePin.length > i;i++){
					if((this.listData.length+i) >= this.maxPinLength){
						this.pinCodeShow = false
						this.showMsgBoxOne('최대 '+this.maxPinLength+' 개까지 가능합니다.')
						break
					}
					gift_pin_result.unshift(saveCulturePin[i])
				}

				gift_pin_result.forEach(function(value, index) {
					if(index <= this.maxPinLength-1){
						newlistData[index] = {culturePin: value}
						this.culturelistDataLength = index+1
					}
				}.bind(this));

				this.listData =[]
				for(var i=0;gift_pin_result.length > i;i++){
					this.listData.push({name: 'num'+i+1+'', numBer: i+1, culturePin:gift_pin_result[i], happyPin: '', happyCert: ''})
				}
				this.pinCodeShow = false
				this.showMsgBoxOne('핀번호가 정상 추출되었습니다.')
			},

			happyPinAutoNum(pinNum){
				if(this.happylistDataLength >= this.maxPinLength){
					this.pinCodeShow = false
					return this.showMsgBoxOne('최대 '+this.maxPinLength+' 개까지 가능합니다.')
				}

				var pinInputName = 'pin_auto_'+this.selected
				var auto_text = ''
				if(this.browType == 'desktop'){
					auto_text = document.getElementById('ppin_auto_'+this.selected).value
					// auto_text = document.getElementById('ppin_auto_'+this.selected).value.replace(/\n/g, ',');
				} else {
					auto_text = document.getElementById('mpin_auto_'+this.selected).value
					// auto_text = document.getElementById('mpin_auto_'+this.selected).value.replace(/\n/g, ',');
				}

				var patten = /([0-9]{16})[_/]([0-9]{8})|([0-9]{16})\s([0-9]{8})|([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})\s([0-9]{8})|([0-9]{4})-([0-9]{4})-([0-9]{4})-([0-9]{4})[_/]([0-9]{8})/g;
				var gift_pin_array = auto_text.match(patten);
				var gift_pin_result = new Array();
				var value_replace = '';
				var newlistData = new Array();

				if(gift_pin_array == null){
					this.pinCodeShow = false
					return alert("핀번호 및 상품권 종류 확인 후 다시 시도해주세요.");
				}

				gift_pin_array.forEach(function(value, index) {
					if(index < this.maxPinLength){
						value_replace = value.replace(/(\s*)/g, "");
						value_replace = value_replace.replace(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,"");
						gift_pin_result.push(value_replace);
					}
				}.bind(this));

				var saveHappyPin = []
				for(var i=0;this.listData.length > i;i++){
					if(this.listData[i].happyPin != ""){
						saveHappyPin.unshift(this.listData[i].happyPin+this.listData[i].happyCert)
					}
				}

				for(var i=0;saveHappyPin.length > i;i++){
					if((this.listData.length+i) >= this.maxPinLength){
						this.pinCodeShow = false
						this.showMsgBoxOne('최대 '+this.maxPinLength+' 개까지 가능합니다.')
						break
					}
					gift_pin_result.unshift(saveHappyPin[i])
				}

				gift_pin_result.forEach(function(value, index) {
					if(index <= this.maxPinLength-1){
						newlistData[index] = {happyPin: value.substring(0,16), happyCert: value.substring(16,24)}
						this.happylistDataLength = index+1
					}
				}.bind(this));

				this.listData =[]
				for(var i=0;newlistData.length > i;i++){
					this.listData.push({name: 'num'+i+1+'', numBer: i+1, culturePin:'', happyPin: newlistData[i].happyPin, happyCert: newlistData[i].happyCert})
				}
				this.pinCodeShow = false
				this.showMsgBoxOne('핀번호가 정상 추출되었습니다.')
			},

			addInput(target){
				if(this.isLogin != true){
					return this.showMsgBoxOne('로그인이 필요한 서비스 입니다.')
				}
				if(this.selected == ''){
					return
				}
				var numBerInput = this.listData.length
				if(numBerInput <= this.maxPinLength-1){
					for(var i=0;this.addInputLength > i;i++){
						this.listData.push({name: 'num'+ numBerInput+i+1 +'', numBer: numBerInput+i+1, culturePin:'', happyPin: '', happyCert:''})
					}
				} else {
					this.showMsgBoxOne('핀번호 추출은 최대 50개까지 가능합니다.')
				}
			},

			maskCheck: function (field){
				if (field.target.inputmask.isComplete()) {
					//console.log('is Complete');
					// console.log(this.listData);field, 
				} else {
					//console.log('is Incomplete');
					// console.log(this.listData);
				}
			},

			showMsgBoxOne(text, type) {
				var contText = ''
				var text_c = text.split('\n')
				const h = this.$createElement
				const messageVNode = h('div', { class: ['foobar'] }, [
					h('p', { class: ['mt-3'] }, [
						text_c[0],
						h('br', 'msgBoxOk'),
						text_c[1],
						]),
					])

				if(type >= 1){
					contText = [messageVNode]
				} else {
					contText = text
				}

				this.boxOne = ''
				this.$bvModal.msgBoxOk(text, {
					okTitle: '확인',
					okDisabled: true,
					buttonSize: 'sm',
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


			modalId(i) {
				this.boxOne = ''
				var contentText = '컨텐츠에 들어갈 내용 = '+i
				this.$bvModal.msgBoxOk( contentText , {
					centered: true
				})
				.then(value => {
					this.boxOne = value
				})
				.catch(err => {

				})
			},

			radioChceck(checked) {


				this.giftRadio = true
				if(this.isLogin != true) return this.showMsgBoxOne('로그인이 필요한 서비스 입니다.')
					if(checked.target.id == 'culture'){
						if(this.cultureSeve == false){
							if(this.cultureSeve == false && this.selected == ''){
								this.giftRadio = false
							}
							return this.showMsgBoxOne('컬처랜드 상품권 매입은 서비스 점검중입니다.\n공지사항을 참조하세요.', 1)
						}
					} else if(checked.target.id == 'happy'){
						if(this.happySeve == false){
							if(this.happySeve == false && this.selected == ''){
								this.giftRadio = false
							}
							return this.showMsgBoxOne('해피머니 상품권 매입은 서비스 점검중입니다.\n공지사항을 참조하세요.', 1)
						}
					}

					if(this.happySeve == false && this.selected == ''){
						this.giftRadio = false
					}

					if(document.getElementById('happy').checked){
						this.selected = 'happy'
						document.getElementById('happy').nextElementSibling.style.backgroundPosition = '0 -20px'
						document.getElementById('culture').nextElementSibling.style.backgroundPosition = '0 0'
					} else {
						this.selected = 'culture'
						document.getElementById('culture').nextElementSibling.style.backgroundPosition = '0 -20px'
						document.getElementById('happy').nextElementSibling.style.backgroundPosition = '0 0'
					}
				},

				ckeckBoxService(obj){
					if(obj.target.checked){
						this.agreeChecked = true
						document.getElementById('service').nextElementSibling.style.backgroundPosition = '0 -20px'
					} else {
						this.agreeChecked = false
						document.getElementById('service').nextElementSibling.style.backgroundPosition = '0 0'
					}
				},
			},
			watch: {
				selected(obj, prev){
					if(prev != ''){
						document.getElementById('ppin_auto_'+prev).value = ''
					}
			
					this.listData =[
						{name: 'num1', numBer: 1, culturePin:'', happyPin: '', happyCert:''},
						{name: 'num2', numBer: 2, culturePin:'', happyPin: '', happyCert:''},
						{name: 'num3', numBer: 3, culturePin:'', happyPin: '', happyCert:''},
						{name: 'num4', numBer: 4, culturePin:'', happyPin: '', happyCert:''},
						{name: 'num5', numBer: 5, culturePin:'', happyPin: '', happyCert:''},
					]

					document.getElementsByClassName('one')[0].classList.add('prev_active');
					document.getElementsByClassName('two')[0].classList.add('active');

					if( obj == 'culture' ){
						this.postUrl = '/users/trading/culture/'
						this.cultureIsActive = true
						this.happyIsActive = false
						this.firstVal = true;
					} else if( obj == 'happy' ){
						this.postUrl = '/users/trading/happy/'
						this.cultureIsActive = false
						this.happyIsActive = true
						this.firstVal = false;
					}
				},
				$mq (val){
					this.browType = val
				},
		// cultureValue(data){
		// 	this.cultureValue = this.cultureValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
		// },

		// happyValue(data){
		// 	this.happyValue = this.happyValue.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
		// }
	}
}
</script>

<style scoped="">
dl, ol, ul{margin:0;padding:0;}
.first_contents.active,
.input_type1 input.first_contents.view_cont,
.first_contents.view_cont{display:block;}
.first_contents,
.input_type1 input.first_contents{display:none;}
.input_type1 p{width:100%;height:54px;margin:0;padding:0;}
.pinnum_body:after{content:'';display:block;clear:both;}
.first_btn_cont{width:80%;margin:0 auto;margin-top:3%;}
.section.giftcard_progress_box2{border-top:0}
.giftcard_progress_box2 .sec_tit .list_txt{margin-top:18px}
.giftcard_progress_box2 .tab_navi{margin-top:40px}
.giftcard_progress_box2 .tab_con_l{width:66%;float:left;padding-right:30px}
.giftcard_progress_box2 .tab_con_l .input_pin li{margin-top:8px}
.giftcard_progress_box2 .tab_con_l .input_pin li:first-child{margin-top:0}
.giftcard_progress_box2 .tab_con_l .input_pin .input_type1 input{padding-left:70px;font-weight:300;letter-spacing:-0.05em;}
.giftcard_progress_box2 .tab_con_l .btn_wrap{margin-top:20px;text-align:right}

.input_pin ul{overflow-y:auto;max-height:470px;}
.qusetion{margin-bottom:20px;}

.giftcard_progress_box2 .tab_con_r{width:34%;float:right;padding-left:30px}
.giftcard_progress_box2 .tab_con_r h5{font-size:1.2rem;font-weight:400;color:#444;position:relative;}
.giftcard_progress_box2 .tab_con_r .desc{font-size:.87rem;padding:10px 0 20px;color:#888}
.giftcard_progress_box2 .tab_con_r .desc span{color:#222}
.giftcard_progress_box2 .tab_con_r .btn_wrap{margin-top:20px;text-align:right}

.giftcard_progress_box2 .form_bank h3{font-size:1.4rem;margin:30px 0 12px;padding-top:15px;border-top:1px solid #e4e4e4}
.giftcard_progress_box2 .form_bank ul{margin:0 -5px}
.giftcard_progress_box2 .form_bank li{width:25%;float:left;padding:0 5px}
.giftcard_progress_box2 .form_bank .btn_wrap{margin-top:20px;text-align:right}

.type_mobile{display:none;}
.mobile .giftcard_progress_box2 .type_mobile.tab_con_r{display:block;width:100%;padding:0;margin-bottom:20px;border-bottom:solid 2px #000;}

.mobile .input_type1 input{font-size:.75rem;}
.mobile .input_type1 p{height:45px;}
.mobile .input_type1 p span{width:75%;display:block;float:left;position:relative}
.mobile .input_type1 p span.r{width:25%}
.mobile .input_type1 p span.r input{padding:10px!important}
.mobile .input_type1 .num{height:45px;width:45px;line-height:45px;font-size:.8rem}
.mobile .giftcard_progress_box2 .tab_con_l .input_pin .input_type1 input{height:45px;padding: 10px 10px 10px 55px;}
.mobile .giftcard_progress_box2 .tab_con_l{width:100%;padding:0;}
.mobile .giftcard_progress_box2 .tab_con_r{display:none;}
.mobile .giftcard_progress_box2 .tab_con_r .btn_wrap{width:65%;margin-left:auto;margin-right:auto;}

.input_type1{position:relative}
.input_type1 .tit{height:18px;line-height:18px;display:inline-block;font-size:.78rem;white-space:nowrap;color:#222;margin-bottom:4px}
.input_type1 .tit .bul_req{display:inline-block;color:#f24d4d;vertical-align:text-top;font-size:.78rem;padding-left:4px}
.input_type1 .num{width:54px;height:54px;line-height:54px;border-radius:2px 0 0 2px;display:block;background:#5968d3;color:#fff;font-weight:700;font-size:.87rem;text-align:center;position:absolute;top:0;left:0;z-index:11}
.input_type1 input{width:100%;height:54px;display:block;position:relative;padding:16px 30px 16px 20px;font-size:.87rem;color:#222;line-height:22px;background:#f8f8f8;border:1px solid #e1e1e1;border-radius:2px;letter-spacing:0;font-weight:500;text-align:left;z-index:1;box-shadow:0 1px 1px 0 rgba(28,35,69,0.04);transition:box-shadow 0.2s ease,border-color 0.2s ease;-webkit-transition:box-shadow 0.2s ease,border-color 0.2s ease}
.input_type1:hover input{background:#fff;border-color:#DDDDDD;box-shadow:0 1px 5px 0 rgba(28,35,69,0.12);transition:box-shadow 0.2s ease,border-color 0.2s ease;-webkit-transition:box-shadow 0.2s ease,border-color 0.2s ease;z-index: 9}
.input_type1.focus input{background:#fff;border-color:#222 !important;box-shadow:0 1px 5px 0 rgba(28,35,69,0.12);transition:box-shadow 0.2s ease,border-color 0.2s ease;-webkit-transition:box-shadow 0.2s ease,border-color 0.2s ease;z-index: 10}
.input_type1 p span{width:75%;display:block;float:left;position:relative}
.input_type1 p span.r{width:25%}
.input_type1 p span.l:before{content:'';width:1px;background:#e1e1e1;position:absolute;right:0;top:12px;bottom:12px;z-index:10}
.input_type1.focus p span.l:before, .input_type1:hover p span.l:before{z-index:-1}
.input_type1 p span.l input{border-radius:2px 0 0 2px;border-right:1px solid #f6f6f6}
.input_type1 p span.r input{border-radius:0 2px 2px 0;border-left:0;padding-left:16px!important}

.textarea_type1 textarea{width:100%;height:190px;display:block;position:relative;padding:10px 16px;font-size:.87rem;line-height:1.5;color:#222;background:#fafafa;border:1px solid #e1e1e1;border-radius:2px;letter-spacing:0;font-weight:500;text-align:left;resize:none;z-index:1;box-shadow:0 1px 1px 0 rgba(28,35,69,.04);transition:box-shadow .2s ease,border-color .2s ease;-webkit-transition:box-shadow .2s ease,border-color .2s ease;display:none;}
.textarea_type1 textarea.normal{display:block;}
.giftcard_progress_box2 .tab_con_r h5.not-collapsed:after,
.giftcard_progress_box2 .tab_con_r h5.not-collapsed:before,
.giftcard_progress_box2 .tab_con_r h5.collapsed:after,
.giftcard_progress_box2 .tab_con_r h5.collapsed:before{display:block;position:absolute;top:50%;width:12px;height:2px;background-color:#222;content:'';-webkit-transition:all .2s ease;transition:all .2s ease}

.giftcard_progress_box2 .tab_con_r h5.not-collapsed:after,
.giftcard_progress_box2 .tab_con_r h5.collapsed:after{right:0}
.giftcard_progress_box2 .tab_con_r h5.not-collapsed:before,
.giftcard_progress_box2 .tab_con_r h5.collapsed:before{right:8px}

.giftcard_progress_box2 .tab_con_r h5.not-collapsed:after,
.giftcard_progress_box2 .tab_con_r h5.collapsed:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}

.giftcard_progress_box2 .tab_con_r h5.collapsed:after,
.giftcard_progress_box2 .tab_con_r h5.not-collapsed:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}

#pin_auto_{display:none;}
#pin_auto_:first-child{display:block;}
.textarea_type1 textarea.active{display:block;}

[class*="textarea_type"] textarea:placeholder-shown {
	color: #bbbbbb;
}

.s_title{font-size:.83rem;color:#666;}
.checks_body.type2{border-top:solid 2px #666;border-bottom:none}
.checks_body{border-bottom:solid 2px #666;border-top:solid 1px #ccc;padding:10px 0;display:table;width:100%}
.checks_body>div{display:table-cell;vertical-align:middle;padding:5px;}
.checks_body>div:first-child{width:100px;}
.checks_body .name{text-align:center;}
.checks_body .checks{position:relative;line-height:20px;display:inline-block;overflow:hidden;margin:5px 10px}
.checks_body input[type=checkbox],
.checks_body input[type=radio]{position:absolute;top:0;left:0;margin:0;padding:0;z-index:-1;width:12px;height:12px;-webkit-appearance:none;opacity:0;-moz-opacity:0}
.checks_body label{float:left;position:relative;top:0;left:0;height:20px;line-height:20px;font-size:.85rem;color:#222;padding:0 0 0 28px;background-repeat:no-repeat;background-size:20px;margin:0;z-index:10}
.checks_body input.active + label{background-position:0 -20px}
.checks_body .checks.on label{background-position:0 -20px}
.checks_body .checks label.on{background-position:0 -20px}
.checks_body label:before{content:'';display:inline-block;width:20px;height:20px;border-radius:50%;-webkit-background-size:20px 40px;background-size:20px 40px;position:absolute;left:0;top:0}
.checks_body>div.checks{width:auto}

.service_more{display:inline-block;border:solid 1px #ddd;padding:5px 10px;color:#666;font-size: .75rem;border-radius: 10px;margin-left: 10px;}
.mobile .w-75{width:100%!important}
.giftcard_progress{text-align:center;}

.giftcard_progress_title{background-color: #4c7ee1;position: relative;background-size: auto 231px;background-repeat: no-repeat;background-position: 31% center;}
.sub_top_item{width:300px;position:absolute;bottom:0;left:50%;margin-left:50px;margin-bottom:-30px;}
.sub_top_item img{width:100%;}
.giftcard_progress_title h3{color:#fff;font-weight:700;}
.giftcard_progress_title h3 + div{color:#fff;}


.mobile .giftcard_progress_title{background-size: auto 200px;}
.mobile .sub_top_item{width:150px;margin-bottom:-15px;margin-left:0;}
.collapse_btn{width:65%;margin:0 auto;height:54px;line-height:54px;text-align:center;border:solid 1px #ddd;border-radius:27px;font-size:.9rem;}
.collapse_btn span{position:relative;font-size:.8rem;}
.collapse_btn.collapsed span:after{content:'';display:block;width:0;height:0;border-top:7px solid none;border-bottom:7px solid #444;border-right:6px solid transparent;border-left:6px solid transparent;position:absolute;top:5px;right:-20px}
.not-collapsed.collapse_btn span:after{content:'';display:block;width:0;height:0;border-top:7px solid #444;border-bottom:7px solid none;border-right:6px solid transparent;border-left:6px solid transparent;position:absolute;top:6px;right:-20px}
.collapsed{}
.not-collapsed{}
.collapse .card{background-color: #5070d7;}
.collapse .card-body p{margin-bottom:0;font-size:.78rem;color:#fff;}

.mobile .giftcard_progress_box2 .tab_con_l .btn_wrap button{width:100%;margin:0;}
.mobile .btn_wrap .btnn.grd{}

.btnn{min-width:100%;height:50px;line-height:50px;display:inline-block;border-radius:2em;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 6px 0 rgba(0,0,0,.1);background:#fff;font-weight:500;color:#444;font-size:.85rem;text-align:center;vertical-align:middle;cursor:pointer;overflow:visible;white-space:nowrap}
.btnn.grd{background-color:#498ceb;background-image:linear-gradient(45deg,#498dec 0,#6729a7 95%);box-shadow:0 1px 6px 0 rgb(94 67 183);color:#fff;border:0}
.btnn.bTcont{margin-top:40px;margin:30px auto 0 auto;display:block;}

</style>