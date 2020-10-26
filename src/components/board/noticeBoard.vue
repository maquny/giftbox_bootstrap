<template>
	<div>
		<h1> FAQ </h1>
		<div class="notice_cont_body">
			<div class="notice_cont_head">
				<div class="num">번호</div>
				<div class="title">제목</div>
				<div class="day">등록일</div>
			</div>
			<div>
				<b-card no-body class="notice_cont mb-0" v-for="list in noticeFixedListData" :v-Key="noticeFixedListData">
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
			<div>
				<b-card no-body class="notice_cont mb-0" v-for="list in noticeListData" :v-Key="noticeListData">
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
			<b-pagination-nav :link-gen="linkGen" :number-of-pages="totalPages" use-router align="center"></b-pagination-nav>
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
				noticeFixedListData: '',
				noticeListData: '',
				totalPages: 1,
				searchText: '',
				seviceTarget: '',
				userBoardNoticePage: '/users/board/notice/?page=',
				userBoardNoticeSearch: '/users/board/notice/search/',
			}
		},

		name: 'noticeBoard',
		created() {
	        this.faqList()
	    },
	    methods: {
			faqList() {
				axios
	            .get(process.env.VUE_APP_BASE_URL + this.userBoardNoticePage + '0&size=2&sort=fixed,desc', process.env.VUE_APP_WITHCREDENTIALS)
	            .then( res => {
	            	this.seviceTarget = 'pagination'
	                this.replaceNoticeList('noticeList', res)
	            })
	            .catch( err => {
	                console.log(err);
	            });
			},
			searchBtn() {
				if(this.searchText == ''){
					console.log('검색할 단어가 없습니다.')
				} else {
					axios
		            .get(process.env.VUE_APP_BASE_URL + this.userBoardNoticeSearch + this.searchText +'/?page=0&size=2&sort=fixed,desc', process.env.VUE_APP_WITHCREDENTIALS)
		            .then( res => {
		            	console.log(res)
		                this.seviceTarget = 'search'
		                this.replaceNoticeList('searchBtn', res)
		            })
		            .catch( err => {
		                console.log(err);
		            });
				}
				
			},
			replaceNoticeList(obj, data){

				console.log(this.seviceTarget)
				// if(data.data.length > 1){
				// 	this.noticeFixedListData = data.data[0].content
				// 	this.noticeListData = data.data[1].content
				// } else {
				// 	this.noticeFixedListData = ''
				// 	this.noticeListData = data.data.content
				// }
				
				// if(data.data[1].totalPages == 0 || data.data.totalPages == 0){
				// 	this.totalPages = 1
				// } else {
				// 	this.totalPages = data.data[1].totalPages
				// }

			},
			linkGen(pageNum, info) {
				return {
					path: '/board/',
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
				console.log(this.seviceTarget)
				// var linkAddress = '';
				// if(this.seviceTarget == 'pagination'){
				// 	console.log('pagination')
				// 	this.searchText = ''
				// 	linkAddress = process.env.VUE_APP_BASE_URL+this.userBoardNoticePage + this.$route.query.page+'&size=2'
				// } else {
				// 	console.log('search')
				// 	linkAddress = process.env.VUE_APP_BASE_URL+this.userBoardNoticeSearch+this.searchText+'/?page='+ this.$route.query.page+'&size=2&sort=fixed,desc'
				// }
				// axios
				// .get(linkAddress, {withCredentials: true})
				// .then( res => {
				// 	console.log(res, this.seviceTarget);
				// 	this.replaceNoticeList(this.seviceTarget, res)
				// })
				// .catch( err => {
				// 	console.log(err.response.data.message);
				// });
			},
        }
	}
</script>
<style scoped="">
*:focus { outline:none; }
.notice_cont_body{}
.notice_cont_body:after{content:'';display:block;clear:both;}
.card{float:left;width:100%;border-radius:0;border: 1px solid rgba(0,0,0,.125);border-top:none;}
.card:first-child{border:1px solid rgba(0,0,0,.125);}
.card-header{border:none;}
.card-header:first-child{border-radius:0;}

.btn-secondary:hover,
.btn-secondary:focus{color:#444;border-radius:0;background-color:#fff;outline: none;}
.pagination_cont{margin-top:30px;}
.btn-secondary{color:#444;background-color:#fff;border:none;}
.notice_cont_head {float:left;width:100%;padding:.375rem .75rem;font-size: 1rem;line-height: 1.5;text-align:center;border: 1px solid rgba(0,0,0,.125);border-bottom:none;}
.notice_cont_head .num{float:left;width:30px;}
.notice_cont_head .title{float:left;width:calc(100% - 130px);}
.notice_cont_head .day{float:left;width:100px;}
.notice_cont .num{float:left;width:30px;}
.notice_cont .title{float:left;width:calc(100% - 130px);}
.notice_cont .day{float:left;width:100px;}
</style>​