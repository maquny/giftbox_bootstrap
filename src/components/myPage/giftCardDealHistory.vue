<template>
	<div>
		<b-container class="mt-md-0 mt-4 mb-md-0 mb-4 mypage_cont_body">
			<slot name="header"></slot>
			<div class="mypage_container">
				<div class="mypage_container2">
					<div>
						<b-form-group class="left_btn">
							<b-form-radio-group
							id="btn-radios-2"
							v-model="selected"
							:options="options"
							buttons
							size="sm"
							button-variant="outline-primary"
							name="radio-btn-outline"
							></b-form-radio-group>
						</b-form-group>
					</div>
					<div class="faq_cont_body">

						<div class="boot_tablet">
							<b-table :fields="fields" responsive :items="userInquiryListData">
								<template #cell(createDate)="data">
									{{ data.value.substring(0,10) }}
								</template>

								<template #cell(company)="data">
									{{ data.value == 'culture' ? '컬처랜드' : '해피머니'}}
								</template>

								<template #cell(requestPrice)="data">
									<i>{{ numberWithCommas(data.value) }}</i>
								</template>

								<template #cell(status)="data">
									<i>{{ data.value }}</i>
								</template>

								<template #cell(comepletePrice)="data">
									<i>{{ numberWithCommas(data.value) }}</i>
								</template>

								<template #cell(idx)="data">
									<b-button size="sm" variant="outline-dark" @click="detailPageGo(data.value)">자세히보기</b-button>
								</template>
							</b-table>
						</div>
					</div>

					<div class="pagination_cont">
						<b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="totalPages" use-router align="center"></b-pagination-nav>
					</div>
				</div>
			</div>
		</b-container>
	</div>
</template>
<script>
	import axios from "axios"
	export default{
		name: 'giftCardDealHistory',
		data(){
			return {
				totalPages: 1,
				seviceTarget: '',
				userBoardFaqPage: '/users/board/faq/?page=',
				userBoardFaqSearch: '/users/board/faq/search/',
				currentPage: 1,
				startDayVal: '2020-08-01',
				startDay: '2020-08-01',
				endDay: '',
				endTime: '',
				fields: [
				{ key: 'createDate', label: '신청일시' },
				{ key: 'company', label: '상품권' },
				{ key: 'requestPrice', label: '판매요청금액' },
				{ key: 'status', label: '거래상태' },
				{ key: 'comepletePrice', label: '입금액' },
				{ key: 'idx', label: '세부보기'},
				],
				userInquiryListData: [],
				selected: 'all',
				options: [
				{ text: '전체', value: 'all' },
				{ text: '3개월', value: '3' },
				{ text: '6개월', value: '6' },
				{ text: '1년', value: '12' }
				]
			}
		},
		
		created() {
			this.giftCardDealHistory();
			this.currentPage = this.$route.query.page
		},

		methods: {
			numberWithCommas(data) {
				return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			},
			
			giftCardDealHistory() {
				var pageData = this.$route.query.page-1 
				let today = new Date();   
				let year = today.getFullYear(); // 년도
				let month = today.getMonth() + 1;  // 월
				let date = today.getDate();  // 날짜
				let day = today.getDay();  // 요일
				let hours = today.getHours(); // 시
				let minutes = today.getMinutes();  // 분
				let seconds = today.getSeconds();  // 초
				minutes = minutes < 10 ? `0${minutes}` : minutes;
				seconds = seconds < 10 ? `0${seconds}` : seconds;
				this.endDay = year + '-' + month + '-' + date;
				this.endTime = hours + ':' + minutes + ':' + seconds;

				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/trading/fromDate/'+ this.startDay +' 00:00:00/toDate/'+ this.endDay +' '+this.endTime+'/?page='+pageData+'&size=10&sort=idx,desc', { withCredentials: true })
				.then( res => {
					if(res.data.content.length == 0 ){

					} else {
						this.replaceuserInquiryList('userInquiryList', res)
					}
					this.seviceTarget = 'pagination'
				})
				.catch( err => {
					// console.log(err);
				});
			},

			detailPageGo(idxNum) {
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/trading/'+idxNum+'', { withCredentials: true })
				.then( res => {
					this.$router.push({name: 'giftCardDealHistoryDetail', path: 'giftCardDealHistoryDetail', query: {idx: idxNum}}, function() {
						//console.log("giftCardDealHistoryDetail 호출 완료");
					});
				})
				.catch( err => {
					// console.log(err);
				});
			},

			replaceuserInquiryList(obj, data){
				if(data.data.totalElements == 0){
					this.totalPages = 1
					this.currentPage = 1
					this.userInquiryListData = []
				} else {
					this.userInquiryListData = data.data.content
				}
				
				if(data.data.totalPages == 0){
					this.totalPages = 1
					this.currentPage = 1
				} else {
					this.totalPages = data.data.totalPages
				}
			},

			linkGen(pageNum, info) {
				return {
					path: '/myPage',
					query: {
						page: pageNum,
					}
				}
			},

			dayLength(data){
				var qs = data.substring(data.indexOf(',') + 1).split(' ');
				return qs[0]
			},

			numFormat(variable) { 
				variable = Number(variable).toString(); 
				if(Number(variable) < 10 && variable.length == 1) variable = "0" + variable; 
				return variable; 
			}

		},
		watch: {
			$route (data){
				var pageData = this.$route.query.page-1 
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/trading/fromDate/'+ this.startDay +' 00:00:00/toDate/'+ this.endDay +' 16:58:58/?page='+ pageData +'&size=10&sort=idx,desc', { withCredentials: true })
				.then( res => {
					this.replaceuserInquiryList('userInquiryList', res)
				})
				.catch( err => {
					// console.log(err);
				});
			},

			selected(data){
				var pageData = this.$route.query.page-1 
				let today2 = new Date();   
				let year2 = today2.getFullYear(); // 년도
				let month2 = today2.getMonth() + 1;  // 월
				let getDay2 = today2.getDate();  // 날짜
				let monthData2 = '';
				if(month2 > data){
					monthData2 = this.numFormat(month2-data);
				} else {
					monthData2 = data
					year2 = year2-1
					getDay2 = getDay2 -1
				}

				if(data == 'all'){
					this.startDay = this.startDayVal
				} else {
					this.startDay = year2 + '-' + monthData2 + '-' + getDay2
				}
			
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/trading/fromDate/'+ this.startDay +' 00:00:00/toDate/'+ this.endDay +' 23:58:58/?page='+pageData+'&size=10&sort=idx,desc', { withCredentials: true })
				.then( res => {
					this.replaceuserInquiryList('userInquiryList', res)
				})
				.catch( err => {
					// console.log(err);
				});
			}
		}
	}
</script>

<style scoped="">

.mobile .mypage_cont_body{padding:0;}

.giftcard_progress_title{background-color:#ededed;}
.right_btn{float:right;}
*:focus { outline:none; }
.faq_cont_body{}
.faq_cont_body:after{content:'';display:block;clear:both;}
.card{float:left;width:100%;border-radius:0;border:none;}
.card:first-child{}
.card-header{border:none;background-color:#fff;border-bottom:none}
.card-header:first-child{border-radius:0;}
.card-body:after{content:'';display:block;clear:both;}
.card-body{padding-right:0;}
.tbl_tbo{padding:1.25rem 1.25rem 1.25rem 5rem;padding-right: 0;}
.btn-secondary:hover,
.btn-secondary:focus{color:#444;border-radius:0;background-color:#fff;outline: none;}
.pagination_cont{margin-top:30px;}
.btn-secondary{color:#444;background-color:#fff;border:none;}
.faq_cont_head {float:left;width:100%;padding:1rem .75rem;font-size:1rem;line-height: 1.5;text-align:center;border-bottom:solid 2px #444;}
.faq_cont_head .btn-block{display:table;}
.card_cont_text{color:#666;}
.vue_tbl{display:table;width:100%;}
.tbl_cell{display:table-cell;vertical-align: middle;padding:10px;}
.tbl_tbo{border-top:solid 1px #eee;}
.faq_cont_head button div{display:table-cell;}

.mobile .boot_tablet >>> table{width:200%;}
.faq_cont_head .status{float:left;width:80px;}
.faq_cont_head .title{float:left;width:calc(100% - 380px);}
.faq_cont_head .day{float:left;width:150px;}
.faq_cont_head .updateDate{float:left;width:150px;}

.faq_cont{border-bottom:1px solid #ddd}
.faq_cont .status{width:80px;}
.faq_cont .title{width:calc(100% - 380px);}
.faq_cont .day{width:150px;text-align:center}
.faq_cont .updateDate{width:150px;text-align:center;}
.bttbt{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem;border:solid 1px #007bff;font-weight:400;display:inline-block}
.media{padding:10px;}
.user_text{padding:10px;}
.admin_text{border-top:solid 1px #ddd;padding:10px;padding-top:25px;}
</style>​