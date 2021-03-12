<template>
	<div>

		<div class="giftcard_progress_title" v-bind:style="{ backgroundImage: 'url(' + itemImg + ')' }">
			<div class="mb-md-5 pb-5 pt-5 container">
				<h3>1:1문의 / 답변</h3>
				<div>1:1문의도 더욱 자세히 답변 드리겠습니다.</div>
				<div class="sub_top_item"><img alt="Vue logo" src="@/assets/sub_top_item.png"></div>
			</div>
		</div>

		<b-container class="mt-md-5 mt-4 mb-md-5 mb-4">
			<div>
				<router-link to="/board/userInquiryWriting" class="bttbt">1:1문의 등록하기</router-link>
				<b-form-group class="right_btn">
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

				<div class="faq_cont_head"  v-if="$mq == 'desktop'">
					<div class="day">작성일시</div>
					<div class="title">제목</div>
					<div class="status">진행상태</div>
					<div class="updateDate">최종답변일</div>
				</div>
				<div>
					<b-card no-body class="faq_cont mb-0" v-for="list in userInquiryListData" :v-Key="userInquiryListData">
						<b-card-header header-tag="header" class="p-0" role="tab">

							<div class="vue_tbl" block v-b-toggle="'accordion-' + list.idx" v-if="$mq == 'desktop'">
								<div class="tbl_cell day">{{list.createDate}}</div>
								<div class="tbl_cell title">{{list.title}}</div>
								<div class="tbl_cell status text-center">{{list.status != 'Response_Complate' ? '접수' : '답변완료'}}</div>
								<div class="tbl_cell updateDate">{{list.responseDate != null ? list.responseDate : '-'}}</div>
							</div>

							<div class="vue_tbl" block v-b-toggle="'accordion-' + list.idx" v-else>

								<div class="tbl_user_tr">
									<div class="tbl_cell tbl_cell_th day">작성일시</div>
									<div class="tbl_cell tbl_cell_th title">제목</div>
								</div>

								<div class="tbl_user_tr">
									<div class="tbl_cell day">{{list.createDate.split(' ')[0]}}<br/>{{list.createDate.split(' ')[1]}}</div>
									<div class="tbl_cell title">{{list.title}}</div>
								</div>

								<div class="tbl_user_tr">
									<div class="tbl_cell tbl_cell_th status">진행상태</div>
									<div class="tbl_cell tbl_cell_th updateDate">최종답변일</div>
								</div>
								<div class="tbl_user_tr">
									<div class="tbl_cell status">{{list.status}}</div>
									<div class="tbl_cell updateDate">{{list.updateDate.split(' ')[0]}}<br/>{{list.updateDate.split(' ')[1]}}</div>
								</div>

							</div>
						</b-card-header>
						<b-collapse :id="'accordion-' + list.idx" accordion="my-accordion" role="tabpanel">
							<b-card-body class="tbl_tbo">
								<b-card no-body>
									<b-media>
										<div class="user_text">
											<h6 class="mt-0">문의 내용</h6>
											<div class="card_cont_text user">
												<p v-html="list.content"></p>
											</div>
										</div>
										<b-media class="admin_text">
											<h6 class="mt-0">답변내용</h6>
											<div class="card_cont_text">
												<p v-html="list.responseDate"></p>
											</div>
											<div class="card_cont_text">
												<p v-if="list.oneInquiryResponseList.length != 0">{{list.oneInquiryResponseList.length != 0 ? list.oneInquiryResponseList[0].content : '-'}}</p>
												<p v-else>아직 답변 등록 전입니다.<br/>빠르게 확인 후 처리해드리겠습니다</p>
											</div>
										</b-media>
									</b-media>
								</b-card>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>
			</div>

			<div class="pagination_cont">
				<b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="totalPages" use-router align="center"></b-pagination-nav>
			</div>
		</b-container>
	</div>
</template>
<script>
	import axios from "axios"
	export default{
		data(){
			return {
				itemImg: require('@/assets/sub_top_bg.png'),
				userInquiryListData: '',
				totalPages: 1,
				searchText: '',
				seviceTarget: '',
				userBoardFaqPage: '/users/board/faq/?page=',
				userBoardFaqSearch: '/users/board/faq/search/',
				currentPage: 1,
				startDayVal: '2020-08-01',
				startDay: '2020-08-01',
				endDay: '',
				selected: 'all',
				options: [
					{ text: '전체', value: 'all' },
					{ text: '3개월', value: '3' },
					{ text: '6개월', value: '6' },
					{ text: '1년', value: '12' }
				],
			}
		},
		name: 'frequentlyAskedQuestions',
		created() {
	        this.faqList()
	    },
	    methods: {
			faqList() {
				let today = new Date();   
				let year = today.getFullYear(); // 년도
				let month = today.getMonth() + 1;  // 월
				let date = today.getDate();  // 날짜
				let day = today.getDay();  // 요일
				this.endDay = year + '-' + month + '-' + date;
				let hours = today.getHours(); // 시
				let minutes = today.getMinutes();  // 분
				let seconds = today.getSeconds();  // 초

				axios
	            .get(process.env.VUE_APP_BASE_URL + '/users/board/OneToOne/fromDate/'+ this.startDay +' 00:00:00/toDate/'+ this.endDay +' 23:58:58/?page='+this.$route.query.page+'&size=10&sort=idx,desc', { withCredentials: true })
	            .then( res => {
	            	if(res.data.content.length == 0 ){

	            	} else {
	            		for(var i=0;res.data.content.length >i;i++){
	            			if(res.data.content[i].oneInquiryResponseList.length != 0){
		            			// console.log(res.data.content[i].oneInquiryResponseList[0].content)
	            			}
	            		}
	            		this.replaceuserInquiryList('userInquiryList', res)
	            	}
	                this.seviceTarget = 'pagination'
	            })
	            .catch( err => {
	                // console.log(err);
	            });
			},
			searchBtn() {
				
			},
			replaceuserInquiryList(obj, data){
				if(data.data.content == 0){
					this.userInquiryListData = {idx: 999, userId: "gnogun2@naver.com", title: "검색 결과가 없습니다.", content: "검색 결과가 없습니다."}
				} else {
					this.userInquiryListData = data.data.content
				}
				
				if(data.data.totalPages == 0){
					this.totalPages = 1
				} else {
					this.totalPages = data.data.totalPages
				}
			},
			linkGen(pageNum, info) {
				return {
					path: '/board/userInquiry/',
					query: {
						page: pageNum-1,
						searchText: this.searchText
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
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/board/OneToOne/fromDate/'+ this.startDay +' 00:00:00/toDate/'+ this.endDay +' 23:58:58/?page='+this.$route.query.page+'&size=10&sort=idx,desc', { withCredentials: true })
				.then( res => {

					this.replaceuserInquiryList('userInquiryList', res)
				})
				.catch( err => {
					// console.log(err);
				});
			},

			selected(data){
				let today = new Date();   
				let year = today.getFullYear(); // 년도
				let month = today.getMonth() + 1;  // 월
				let getDay = today.getDate();  // 날짜
				let monthData = '';

				if(month > data){
					monthData = this.numFormat(month-data);
				} else {
					monthData = data
					year = year-1
					getDay = getDay -1
				}

				if(data == 'all'){
					this.startDay = this.startDayVal
				} else {
					this.startDay = year + '-' + monthData + '-' + getDay
				}
				
				axios
				.get(process.env.VUE_APP_BASE_URL + '/users/board/OneToOne/fromDate/'+ this.startDay +' 00:00:00/toDate/'+ this.endDay +' 23:58:58/?page='+this.$route.query.page+'&size=10&sort=idx,desc', { withCredentials: true })
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
.giftcard_progress_title{background-color: #4c7ee1;position: relative;background-size: auto 231px;background-repeat: no-repeat;background-position: 31% center;}
.sub_top_item{width:300px;position:absolute;bottom:0;left:50%;margin-left:50px;margin-bottom:-30px;}
.sub_top_item img{width:100%;}
.giftcard_progress_title h3{color:#fff;font-weight:700;}
.giftcard_progress_title h3 + div{color:#fff;}
.mobile .giftcard_progress_title{background-size: auto 200px;}
.mobile .sub_top_item{width:150px;margin-bottom:-15px;margin-left:0}
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
.vue_tbl{display:table;width:100%;padding:0 .75rem;}
.tbl_cell{display:table-cell;vertical-align: middle;padding:10px;position:relative}
.tbl_tbo{border-top:solid 1px #eee;}
.faq_cont_head button div{display:table-cell;}

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

/*.mobile .faq_cont_head .day{display:none;}
.mobile .faq_cont_head .updateDate{display:none;}
.mobile .faq_cont_head .title{width: calc(100% - 80px);}
.mobile .faq_cont .day{display:none;}
.mobile .faq_cont .updateDate{display:none;}*/

.mobile .faq_cont_head .day{}
.mobile .faq_cont_head .updateDate{}
.mobile .faq_cont_head .title{}

.mobile .faq_cont .day{float:none;width:30%;}
.mobile .faq_cont .title{float:none;width:70%;}
.mobile .faq_cont .status{float:none;width:50%;text-align:center;}
.mobile .faq_cont .updateDate{float:none;width:50%;text-align:center;}
.mobile .tbl_cell.tbl_cell_th{background-color:#eee;padding:10px;}
/*.mobile .faq_cont .day:before{content:'작성일시';display:block;clear:both;float:left;width:100%;text-align:center;background-color:#eee;margin-bottom:10px;padding:10px;}
.mobile .faq_cont .title:before{content:'제목';display:block;clear:both;float:left;width:100%;text-align:center;background-color:#eee;margin-bottom:10px;padding:10px;}
.mobile .faq_cont .status:before{content:'진행상태';display:block;clear:both;float:left;width:100%;text-align:center;background-color:#eee;margin-bottom:10px;padding:10px;}
.mobile .faq_cont .updateDate:before{content:'최종답변일';display:block;clear:both;float:left;width:100%;text-align:center;background-color:#eee;margin-bottom:10px;padding:10px;}
.mobile .faq_cont .day:after{content:'';display:block;clear:both;margin-top:10px;}
.mobile .faq_cont .title:after{content:'';display:block;clear:both;margin-top:10px;}
.mobile .faq_cont .status:after{content:'';display:block;clear:both;margin-top:10px;}
.mobile .faq_cont .updateDate:after{content:'';display:block;clear:both;margin-top:10px;}*/

.mobile .tbl_tbo{padding:0;}
.mobile .card_cont_text.user >>> img { width:100% !important; }
.tbl_userBy{}
.tbl_user_tr{display:table-row;}
.tbl_user_tr:after{content:'';display:block;clear:both;}
.mobile .faq_cont{border:solid 1px #eee;margin-top:1rem;}
.mobile .faq_cont:first-children{margin-top:none;}
</style>​