<template>
	<div>
		<h1> FAQ </h1>
		<div class="faq_cont_body">
			<div class="faq_cont_head">
				<div class="num">번호</div>
				<div class="title">제목</div>
				<div class="day">등록일</div>
			</div>
			<div>
				<b-card no-body class="faq_cont mb-0" v-for="list in faqListData" :v-Key="faqListData">
					<b-card-header header-tag="header" class="p-0" role="tab">
						<b-button block v-b-toggle="'accordion-' + list.idx">
							<div class="num">{{list.idx}}</div>
							<div class="title">{{list.title}}</div>
							<div class="day">{{dayLength(list.createDate)}}</div>
						</b-button>
					</b-card-header>
					<b-collapse :id="'accordion-' + list.idx" accordion="my-accordion" role="tabpanel">
						<b-card-body>
							<b-card-text>{{list.content}}</b-card-text>
						</b-card-body>
					</b-collapse>
				</b-card>
			</div>
		</div>

		<div class="pagination_cont">
			<b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="totalPages" use-router align="center"></b-pagination-nav>
		</div>

		<div>
			<b-form-input v-model="searchText" placeholder=""></b-form-input>
	   		<div class="mt-2">Value: {{ searchText }}</div>
	   		<b-button @click="searchBtn">search btn</b-button>
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	export default{
		data(){
			return {
				faqListData: '',
				totalPages: 1,
				searchText: '',
				seviceTarget: '',
				userBoardFaqPage: '/users/board/faq/?page=',
				userBoardFaqSearch: '/users/board/faq/search/',
				currentPage: 1
			}
		},
		name: 'frequentlyAskedQuestions',
		created() {
	        this.faqList()
	    },
	    methods: {
			faqList() {
				axios
	            .get(process.env.VUE_APP_BASE_URL + this.userBoardFaqPage + this.$route.query.page+'&size=2', )
	            .then( res => {
	                this.replaceFaqList('faqList', res)
	                this.seviceTarget = 'pagination'
	            })
	            .catch( err => {
	                console.log(err.response.data.message);
	            });
			},
			searchBtn() {
				if(this.searchText == ''){
					console.log('검색할 단어가 없습니다.')
				} else {
					axios
		            .get(process.env.VUE_APP_BASE_URL+this.userBoardFaqSearch+this.searchText+'/?page=0&size=2&sort=idx,desc', process.env.VUE_APP_WITHCREDENTIALS)
		            .then( res => {
		                this.replaceFaqList('searchBtn', res)
		                this.seviceTarget = 'search'
		            })
		            .catch( err => {
		                console.log(err.response.data.message);
		            });
				}
				
			},
			replaceFaqList(obj, data){
				console.log(obj, data)
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
           		console.log('pagination')
           		this.searchText = ''
           		linkAddress = process.env.VUE_APP_BASE_URL+this.userBoardFaqPage+ this.$route.query.page+'&size=2'
           	} else {
           		console.log('search')
           		linkAddress = process.env.VUE_APP_BASE_URL+this.userBoardFaqSearch+this.searchText+'/?page='+ this.$route.query.page+'&size=2&sort=idx,desc'
           	}
           	axios
	            .get(linkAddress, {withCredentials: true})
	            .then( res => {
	                console.log(res, this.seviceTarget);
	                this.replaceFaqList(this.seviceTarget, res)
	            })
	            .catch( err => {
	                console.log(err.response.data.message);
	            });
           },
       }
	}
</script>
<style scoped="">
*:focus { outline:none; }
.faq_cont_body{}
.faq_cont_body:after{content:'';display:block;clear:both;}
.card{float:left;width:100%;border-radius:0;border: 1px solid rgba(0,0,0,.125);border-top:none;}
.card:first-child{border:1px solid rgba(0,0,0,.125);}
.card-header{border:none;}
.card-header:first-child{border-radius:0;}

.btn-secondary:hover,
.btn-secondary:focus{color:#444;border-radius:0;background-color:#fff;outline: none;}
.pagination_cont{margin-top:30px;}
.btn-secondary{color:#444;background-color:#fff;border:none;}
.faq_cont_head {float:left;width:100%;padding:.375rem .75rem;font-size: 1rem;line-height: 1.5;text-align:center;border: 1px solid rgba(0,0,0,.125);border-bottom:none;}
.faq_cont_head .num{float:left;width:30px;}
.faq_cont_head .title{float:left;width:calc(100% - 130px);}
.faq_cont_head .day{float:left;width:100px;}
.faq_cont .num{float:left;width:30px;}
.faq_cont .title{float:left;width:calc(100% - 130px);}
.faq_cont .day{float:left;width:100px;}
</style>​