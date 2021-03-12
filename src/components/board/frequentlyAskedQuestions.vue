<template>
	<div>
		<div class="giftcard_progress_title" v-bind:style="{ backgroundImage: 'url(' + itemImg + ')' }">
			<div class="mb-md-5 pb-5 pt-5 container">
				<h3>FAQ</h3>
				<div>궁금하신 사항을 문의 해주세요.</div>
				<div class="sub_top_item"><img alt="Vue logo" src="@/assets/sub_top_item.png"></div>
			</div>
		</div>
		<b-container class="mt-md-5 mt-4 mb-md-5 mb-4">
			<div class="faq_cont_body">
				<div class="faq_cont_head" v-if="$mq == 'desktop'">
					<div class="num">번호</div>
					<div class="title">제목</div>
					<div class="day">등록일</div>
				</div>
				<div>
					<b-card no-body class="faq_cont mb-0" v-for="list in faqListData" :v-Key="faqListData">
						<b-card-header header-tag="header" class="p-0" role="tab">
							<div class="faqcontbox" block v-b-toggle="'accordion-' + list.idx">
								<div class="num" :idx="list.idx">
									<div v-if="$mq == 'desktop'">{{list.idx}}</div>
									<div v-else>{{list.idx}} / {{dayLength(list.createDate)}}</div>
								</div>
								<div class="title">{{list.title}}</div>
								<div class="day" v-if="$mq == 'desktop'">{{dayLength(list.createDate)}}</div>
							</div>
						</b-card-header>
						<b-collapse :id="'accordion-' + list.idx" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text v-html="list.content"></b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>
			</div>

			<div class="pagination_cont">
				<b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="totalPages" use-router align="center"></b-pagination-nav>
			</div>

			<div class="search_cont">
				<b-form-input v-model="searchText" placeholder="" @keyup.enter="searchBtn"></b-form-input>
				<b-button @click="searchBtn">검색</b-button>
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
				faqListData: '',
				totalPages: 1,
				searchText: '',
				seviceTarget: '',
				userBoardFaqPage: '/users/board/faq/?page=',
				userBoardFaqSearch: '/users/board/faq/search/',
				currentPage: 1,
			}
		},
		name: 'frequentlyAskedQuestions',
		created() {
	        this.faqList()
	    },
	    methods: {
			faqList() {
				axios
	            .get(process.env.VUE_APP_BASE_URL + this.userBoardFaqPage + this.$route.query.page+'&size=10', )
	            .then( res => {
	                this.replaceFaqList('faqList', res)
	                this.seviceTarget = 'pagination'
	            })
	            .catch( err => {
	                // console.log(err);
	            });
			},
			searchBtn() {
				if(this.searchText == ''){
					alert('검색할 단어가 없습니다.')
				} else {
					axios
		            .get(process.env.VUE_APP_BASE_URL+this.userBoardFaqSearch+this.searchText+'/?page=0&size=2&sort=idx,desc', { withCredentials: true })
		            .then( res => {
		                this.replaceFaqList('searchBtn', res)
		                this.seviceTarget = 'search'
		            })
		            .catch( err => {
		                // console.log(err);
		            });
				}
				
			},
			replaceFaqList(obj, data){
				if(data.data.content == 0){
					this.faqListData = {idx: 999, userId: "gnogun2@naver.com", title: "검색 결과가 없습니다.", content: "검색 결과가 없습니다."}
				} else {
					this.faqListData = data.data.content
				}
				
				if(data.data.totalPages == 0){
					this.totalPages = 1
				} else {
					this.totalPages = data.data.totalPages
				}
			},
			linkGen(pageNum, info) {
				return {
					path: '/board/frequentlyAskedQuestions/',
					query: {
						page: pageNum-1,
						searchText: this.searchText
					}
				}
			},

			dayLength(data){
				var qs = data.substring(data.indexOf(',') + 1).split(' ');
				return qs[0]
			}
		},
		watch: {
			$route (data){
				var linkAddress = '';
				if(this.seviceTarget == 'pagination'){
					this.searchText = ''
					linkAddress = process.env.VUE_APP_BASE_URL+this.userBoardFaqPage+ this.$route.query.page+'&size=10'
				} else {
					linkAddress = process.env.VUE_APP_BASE_URL+this.userBoardFaqSearch+this.searchText+'/?page='+ this.$route.query.page+'&size=10&sort=idx,desc'
				}
				axios
				.get(linkAddress, {withCredentials: true})
				.then( res => {
					this.replaceFaqList(this.seviceTarget, res)
				})
				.catch( err => {
					// console.log(err);
				});
			},
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
*:focus { outline:none!important; }
.faqcontbox{padding:20px;background-color: #fff;}
.faqcontbox:after{content:'';display:block;clear:both;}
.collapse .card-body{border-top:solid 1px #eee;}
.not_contents{text-align:center;padding:150px;background-color:#fff;}
.faq_cont_body{}
.faq_cont_body:after{content:'';display:block;clear:both;}
.card{float:left;width:100%;border-radius:0;border-bottom:1px solid rgba(0,0,0,.125);border-top:none;border-left:none;border-right:none;}
.card:first-child{}
.card-header{border:none;}
.card-header:first-child{border-radius:0;}
.card-header .btn{padding:1rem;font-size: 1rem;text-align:left;}
​
.card-header + div{border-top: solid 1px #eee;}
.btn-secondary:hover,
.btn-secondary:focus{color:#444;border-radius:0;background-color:#fff;outline: none;}
.pagination_cont{margin-top:30px;}
.btn-secondary{color:#444;background-color:#fff;border:none;}
.faq_cont_head {float:left;width:100%;padding:1rem;font-size: 1rem;line-height: 1.5;text-align:center;border-bottom: 2px solid #444;text-align: left;color: #666;}
.faq_cont_head > div{padding:10px;box-sizing:border-box;}
.faq_cont_head .num{float:left;width:50px;text-align:center;}
.faq_cont_head .title{float:left;width:calc(100% - 170px);}
.faq_cont_head .day{float:left;width:120px;text-align:center;}
.card-header .btn > div{padding:10px;box-sizing:border-box;}
.faq_cont .num{float:left;width:50px;text-align:center;}
.faq_cont .title{float:left;width:calc(100% - 170px);}
.faq_cont .day{float:left;width:120px;text-align:center;}
.search_cont{position:relative;width:550px;margin:0 auto;}
.search_cont .form-control{padding:1rem;}
.search_cont .btn{border:solid 1px #ccc;position:absolute;top:0;right:0;}

.mobile .faqcontbox{padding:1rem 0;}
.mobile .faq_cont_head{padding:.5rem 0}
.mobile .search_cont{margin:10%;width:80%;}
.mobile .search_cont .form-control{padding:5px;}

.mobile .faq_cont .num{width:100%;text-align:left;padding:0 1rem;box-sizing:border-box;}
.mobile .faq_cont .title{float:left;width:100%;padding:0 1rem;box-sizing:border-box;}

.mobile .faq_cont_body{border-top: 2px solid #444;}
</style>​