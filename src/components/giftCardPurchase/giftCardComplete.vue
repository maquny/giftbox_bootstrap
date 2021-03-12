<template>
	<div>
		<div class="giftcard_progress_title" v-bind:style="{ backgroundImage: 'url(' + itemImg + ')' }">
			<div class="mb-md-5 pb-5 pt-5 container">
				<h3>상품권 판매 요청</h3>
				<div>안전한 자동화 시스템으로 핀번호 입력 후 1분 내 판매 완료됩니다!</div>
				<div class="sub_top_item"><img alt="Vue logo" src="@/assets/sub_top_item.png"></div>
			</div>
		</div>

		<div class="mt-md-5 mt-4 mb-md-5 mb-4 container">

			<div class="mt-5 mb-5">
				<slot name="header"></slot>
			</div>

			<div class="bl_horizTable bl_horizTable__mdScroll">
				<table>
					<tbody>
						<tr>
							<th>구분</th>
							<td>{{giftBrand}}</td>
						</tr>
						<tr>
							<th>신청자</th>
							<td>{{userName}} / {{userId}}</td>
						</tr>
						<tr>
							<th>신청일시</th>
							<td>{{createDate}}</td>
						</tr>
						<tr>
							<th>계좌</th>
							<td> {{accountName}} / {{accountNum}}</td>
						</tr>
						<tr>
							<th>판매상태</th>
							<td> {{pripeStaText}} <b-button size="sm" variant="outline-dark" @click="usersTrading" v-if="createDateNum == true">새로고침</b-button></td>
						</tr>
						<tr v-if="comepletePrice != 0">
							<th>입금금액</th>
							<td>
								<p>-요청금액 : {{numberWithCommas(requestPrice)}} 원</p>
								<p>-송금 수수료 : {{numberWithCommas(transperFees)}} 원</p>
								<p>-판매 수수료 : {{requestPrice / purchaseFeePercents}} 원</p>
								<p>-입금금액 : {{ numberWithCommas(comepletePrice)}} 원 </p>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="sub_text">
					<h6>※ 판매상태 안내</h6>
					<p>
						-처리중 : 판매 요청 접수된 핀번호 확인 후 입금 처리 진행 중인 상태입니다.<br/>
						-판매완료 : 핀번호가 판매완료 되어 수수료 금액 제외 후 입금 완료된 상태입니다.<br/>
						-판매완료(일부) : 접수된 핀번호 중 판매불가 상태의 일부 핀번호 제외 후 판매완료된 상태입니다.<br/>
						-판매불가 : 접수된 핀번호가 판매불가 상태 입니다.
					</p>
				</div>
			</div>

			<b-overlay :show="show" rounded="sm">
				<div :aria-hidden="show ? 'true' : null">
					<table class="table table-no-more">
						<thead>
							<tr>
								<th>No.</th>
								<th>핀번호</th>
								<th>상태</th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="(item, no) in items" :v-Key="items">
								<td>{{no +1}}</td>
								<td>{{item.pinCode}}</td>
								<td>{{item.status}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</b-overlay>

			<div class="btn_wrap first_btn_cont">
				<button type="button" class="btnn grd" @click="complete">확인</button>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	export default {
		name: 'giftCardComplete',
		data() {
			return {
				show: false,
				idxNumber: this.$route.query.idx,
				itemImg: require('@/assets/sub_top_bg.png'),
				pripeStaText: '',
				items: [],
				createDateNum: false,
				userName: '',
				userId: '',
				giftBrand: '',
				createDate: '',
				withdrawStatus: '',
				requestedAmount: '',
				feeAmount: '',
				depositAmount: '',
				requestPrice: '',
				comepletePrice: '',
				transperFees:'',
				accountName: '',
				accountNum: '',
				purchaseFeePercents:'',
			}
		},
		mounted(){
			this.lastSection();
			this.usersTrading2();
			this.userData();
		},
		methods: {
			complete(){
				this.$router.push({name: 'Home', path: '/'}, function() {
					// console.log("home 호출 완료");
				});
			},

			userData(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/info/', { withCredentials: true })
				.then( res => {
					this.accountName = res.data.accountName
					this.accountNum = res.data.accountNum
				})
				.catch( err => {
					// console.log(err);
				});
			},

			usersTrading(){
				this.show = true
				setTimeout(() => {
					this.usersTrading2()
				}, 1000);
			},

			usersTrading2(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/trading/'+this.idxNumber+'', { withCredentials: true })
				.then( res => {
					this.show = false
					var user = res.data;
					this.userName = user.userName;
					this.userId = user.userId;
					this.createDate = user.createDate;
					this.withdrawStatus = user.withdrawStatus;
					this.requestPrice = user.requestPrice;
					this.comepletePrice = user.comepletePrice
					this.purchaseFeePercents = user.purchaseFeePercents
					this.items = user.pincode;

					if(user.status == '처리중'){
						this.pripeStaText = '처리중 (요청 후 최대 1분 정도 소요됩니다.)'
					} else if(user.status == '판매완료'){
						this.pripeStaText = '판매완료'
					} else if(user.status == '판매완료(일부)'){
						this.pripeStaText = '일부 판매불가 핀번호 제외 후 판매완료 되었습니다.'
					} else if(user.status == '판매불가'){
						this.pripeStaText = '판매처리가 불가한 핀번호입니다'
					}

					if(user.company == 'culture'){
						this.giftBrand = '컬쳐랜드 상품권'
						this.giftBrandFee(user.company);
					} else if(user.company == 'happy'){
						this.giftBrand = '해피머니 상품권'
						this.giftBrandFee(user.company);
					}
					setTimeout(() => {
						if(user.status != '판매완료'){
							this.createDateNum = true
						}
					}, 60000);
				})
				.catch( err => {
					this.show = false
					// console.log(err);
				});
			},
			
			giftBrandFee(brand){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/fee/', { withCredentials: true })
				.then( res => {
					if(brand == 'culture'){
						this.transperFees = res.data.content[1].transperFees
					} else if(brand == 'happy'){
						this.transperFees = res.data.content[0].transperFees
					}
				})
				.catch( err => {
        			// console.log(err);
        		});
			},

			lastSection(){
				if(this.$router.app._route.name == "giftCardComplete"){
					document.getElementsByClassName('one')[0].classList.add('prev_active');
					document.getElementsByClassName('two')[0].classList.add('prev_active');
					document.getElementsByClassName('three')[0].classList.add('active');
				}
			},

			numberWithCommas(data) {
				return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		}
	}
</script>

<style scoped="">
.giftcard_progress_title{background-color: #4c7ee1;position: relative;background-size: auto 231px;background-repeat: no-repeat;background-position: 31% center;}
.sub_top_item{width:300px;position:absolute;bottom:0;left:50%;margin-left:50px;margin-bottom:-30px;}
.sub_top_item img{width:100%;}
.giftcard_progress_title h3{color:#fff;font-weight:700;}
.giftcard_progress_title h3 + div{color:#fff;}
.mobile .giftcard_progress_title{background-size: auto 200px;}
.mobile .sub_top_item{width:150px;margin-bottom:-15px;margin-left:0}
.giftcard_progress{}
.mobile .w-75{width:100%!important}
.sub_text{margin:1rem 0 40px 0;padding:0 1rem;}
.sub_text h6{}
.sub_text p{font-size:.8rem;color:#666;}
.bl_horizTable{border-top:1px solid #ddd;border-bottom:1px solid #ddd;}
.bl_horizTable table{width:100%;border-bottom:1px solid #ddd}
.bl_horizTable th{width:30%;padding:15px;background-color:#efefef;border-bottom:1px solid #ddd;font-weight:700;vertical-align:middle}
.bl_horizTable td{padding:15px;border-bottom:1px solid #ddd}
.bl_horizTable tr:last-child td,.bl_horizTable tr:last-child th{border-bottom-width:0}

.first_btn_cont{width:80%;margin:0 auto;margin-top:3%;}
.btnn{min-width:100%;height:50px;line-height:50px;display:inline-block;border-radius:2em;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 6px 0 rgba(0,0,0,.1);background:#fff;font-weight:500;color:#444;font-size:.85rem;text-align:center;vertical-align:middle;cursor:pointer;overflow:visible;white-space:nowrap}
.btnn.grd{background-color:#498ceb;background-image:linear-gradient(45deg,#498dec 0,#6729a7 95%);box-shadow:0 1px 6px 0 rgb(94 67 183);color:#fff;border:0}
.btnn.bTcont{margin-top:40px;margin:30px auto 0 auto;display:block;}

.table{overflow:hidden}
.table>thead>tr>th{border-bottom-color:#eee}
.table>tbody>tr>td,
.table>tbody>tr>th,
.table>thead>tr>td,
.table>thead>tr>th{padding:15px;background-color:#fff;border-top-color:#eee}
table>tbody>tr:hover>td{background-color:#fafafa}

@media (max-width: 767px) {
	.table-no-more,
	.table-no-more > thead,
	.table-no-more > thead > tr,
	.table-no-more > thead > tr > th,
	.table-no-more > tbody,
	.table-no-more > tbody > tr,
	.table-no-more>tbody>tr>td{display:block}

	.table-no-more>thead{position:absolute;top:-9999px;left:-9999px;opacity:0}
	.table-no-more>tbody>tr>td{position:relative;padding-left:35%}
	.table-no-more>tbody>tr:nth-child(even)>td{background-color:#fff}
	.table-no-more>tbody>tr:nth-child(odd)>td{background-color:#fafafa}
	.table-no-more>tbody>tr>td:before{position:absolute;top:15px;left:5%;width:40%;white-space:nowrap;font-weight:700}
	.table-no-more>tbody>tr>td:after{content:"";position:absolute;top:0;left:0;width:25%;height:100%;border-right:1px solid #eee}

	.table-no-more > tbody > tr > td:nth-of-type(1):before {content: "No.";}
	.table-no-more > tbody > tr > td:nth-of-type(2):before {content: "핀번호";}
	.table-no-more > tbody > tr > td:nth-of-type(3):before {content: "인증번호";}
	.table-no-more > tbody > tr > td:nth-of-type(4):before {content: "금액";}
	.table-no-more > tbody > tr > td:nth-of-type(5):before {content: "상태";}
}

</style>