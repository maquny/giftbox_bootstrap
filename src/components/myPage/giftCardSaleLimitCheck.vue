<template>
	<div>
		<b-container class="mt-md-0 mt-4 mb-md-0 mb-4 mypage_cont_body">
			<slot name="header"></slot>
			<div class="mypage_container type2">

				<h5>판매금액 한도</h5>
				<div class="bl_horizTable bl_horizTable__mdScroll">
					

					<table class="table table-no-more">
						<tbody>
							<tr>
								<th>당일 총 판매 <br/>잔여한도</th>
								<td>
									{{usersTrading(Number(from.dayLimit - from.dayCompletePrice))}} 원<br/>
									<!-- (심야기준 : 10,000,000원) -->
								</td>
								<th>당월 총 판매<br/>잔여한도</th>
								<td>{{usersTrading(Number(from.monthLimit - from.monthCompletePrice))}} 원</td>
							</tr>
							<tr>
								<th>1회 최소/최대<br/>금액</th>
								<td colspan="3">최소 1만원 이상 / 최대 500만원 이하</td>
							</tr>
							<tr>
								<th>1일 누적<br/>매입한도</th>
								<td colspan="3">{{usersTrading(Number(from.dayLimit - from.dayCompletePrice))}} 원</td>
							</tr>
							<tr>
								<th>1개월 누적<br/>매입한도</th>
								<td colspan="3">{{usersTrading(Number(from.monthLimit - from.monthCompletePrice))}} 원</td>
							</tr>
							<!-- <tr>
								<th>심야시간<br/>매입한도</th>
								<td colspan="3">{{usersTrading(Number(from.nightLimit))}} 원</td>
							</tr> -->
						</tbody>
					</table>

				</div>
			</div>
		</b-container>
	</div>
</template>
<script>
	import axios from "axios"
	export default {
		name: 'giftCardSaleLimitCheck',
		data() {
			return {
				idxNumber: '',
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
				from:[]
			}
		},
		mounted(){
			this.idxNumber = this.$route.query.idx
			this.userData();
		},
	
		methods: {
			historyBack(){
				this.$router.go(-1)
			},

			userData(){
				axios
				.get(process.env.VUE_APP_BASE_URL+'/users/trading/limit/', { withCredentials: true })
				.then( res => {
					this.from = res.data
				})
				.catch( err => {
					// console.log(err);
				});
			},

			usersTrading(num){
				var regexp = /\B(?=(\d{3})+(?!\d))/g;
  				return num.toString().replace(regexp, ',');
			},
			
		},
		watch: {
			
		}
	}
</script>

<style scoped="">
.giftcard_progress_title{background-color:#ededed;}
.giftcard_progress{}
.mobile .w-75{width:100%!important}
.sub_text{margin:1rem 0 40px 0;padding:0 1rem;}
.sub_text h6{}
.sub_text p{font-size:.8rem;color:#666;}

.bl_horizTable{border-top:1px solid #ddd;border-bottom:1px solid #ddd;}
.bl_horizTable table{width:100%}
.bl_horizTable th{width:20%;padding:15px;background-color:#efefef;border-bottom:1px solid #ddd;font-weight:700;vertical-align:middle}
.bl_horizTable td{padding:15px;border-bottom:1px solid #ddd}
.bl_horizTable tr:last-child td,.bl_horizTable tr:last-child th{border-bottom-width:0}
.table td, .table th{vertical-align:middle}
.mobile .mypage_container

.first_btn_cont{width:80%;margin:0 auto;margin-top:5%;}
.historyBack{width:100%;}

.table{overflow:hidden}
.table>thead>tr>th{border-bottom-color:#eee}
.table>tbody>tr>td,
.table>tbody>tr>th,
.table>thead>tr>td,
.table>thead>tr>th{padding:15px;background-color:#fff;border-top-color:#eee}
table>tbody>tr:hover>td{background-color:#fafafa}

.table>tbody>tr>th{background-color:#ededed;}

.mobile .mypage_container.type2{padding:0;}

.bl_horizTable table{margin-bottom:0;}

h5{padding:5px;}
h5.mT30{margin-top:30px;}
@media (max-width: 767px) {
	.table-no-more,
	.table-no-more > thead,
	.table-no-more > thead > tr,
	.table-no-more > thead > tr > th,
	.table-no-more > tbody,
	.table-no-more > tbody > tr,
	.table-no-more>tbody>tr>td{display:block}

	.table-no-more>thead{position:absolute;top:-9999px;left:-9999px;opacity:0}
	.table-no-more>tbody>tr>td{position:relative;padding-left:5%}
	.table-no-more>tbody>tr:nth-child(even)>td{background-color:#fff}
	.table-no-more>tbody>tr:nth-child(odd)>td{background-color:#fafafa}

}

</style>