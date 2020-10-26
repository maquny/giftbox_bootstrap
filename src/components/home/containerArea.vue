<template>
	<b-container class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
		<b-row>
			<b-col md="7">
				<div class="ma_title">실시간 교환현황</div>
		        <div class="swiper_box">
		        	<div class="sell_tbl">
		        		<div class="sell_th" v-for="itemsName in itemsName">{{itemsName}}</div>
		        	</div>
		        	<div class="swiper_container_box">
		        		<div class="swiper_blind"></div>
			            <swiper ref="mySwiper" :options="swiperOptions">
			                <swiper-slide v-for="item in items" :v-Key="item">
			                	<div class="sell_tbl">
			                		<div class="sell_td" secondary>{{item.day}}</div>
				                	<div class="sell_td"><span class="brand"><img :src="item.sellerBrand"></span> {{item.name}}<span class="won">{{item.price}} 원</span></div>
				                	<div class="sell_td">{{item.priceRequest}}</div>
				                	<div class="sell_td time_num"><span>{{item.requestComplete}}</span> 초</div>
				                	<div class="sell_td"><span :class="'state_'+item.state"></span></div>
			                	</div>
			                </swiper-slide>
			            </swiper>
		        	</div>
		        </div>
			</b-col>
			<b-col md="5" class="mt-md-0 mt-3">
				<div class="ma_title">입금금액 계산기</div>
				<div class="calculator_box">
					<b-form-group class="calu_radio pt-3">
						<b-form-radio v-model="selected" name="some-radios" value="cultureland">컬쳐랜드</b-form-radio>
						<b-form-radio v-model="selected" name="some-radios" value="happymoney">해피머니</b-form-radio>
					</b-form-group>

				    <div class="calu_moneysum pt-3">
				    	<div class="line">상품권 금액 합계 :</div>
				    	<div class="line"><b-form-input v-model="moneyPrice" placeholder="" @click="zeroNum()"></b-form-input></div>
				    </div>
				    <div class="calu_tbl p-3">
				    	<div class="calu_tr p-3">
				    		<div class="calu_td">
				    			<div>판매 요청 금액 :</div>
				    			<div>{{moneyPrice}} 원</div>
				    		</div>
				    		<div class="calu_td">
				    			<div>매입 수수료율 :</div>
				    			<div>{{giftboxFees}} %</div>
				    		</div>
				    		<div class="calu_td">
				    			<div>계좌이체 수수료 :</div>
				    			<div>{{bankTransfer}} 원</div>
				    		</div>
				    		<div class="calu_td last_td">
				    			<div>입금 예정 금액 :</div>
				    			<div><span>{{endMoneyPrice}}</span> 원</div>
				    		</div>
				    	</div>
				    </div>
				  </div>
			</b-col>
		</b-row>
		<b-row class="mt-md-4">
			<b-col md="5" class="mt-md-0 mt-3">
				<div class="ma_title">이용안내</div>
				<b-button variant="primary" class="login_btn" @click="checkSession" >checkSession</b-button>
				<b-button variant="primary" class="login_btn" @click="logOut" >logOut</b-button>
				<b-button variant="primary" class="login_btn" @click="faqList" >faqList</b-button>
			</b-col>
			<b-col md="7" class="mt-md-0 mt-3">
				<div class="ma_title">
					FAQ
					<span class="more"></span>
				</div>
				<div class="faq_container">
					<div class="list" v-for="list in faqData" :v-Key="list">
						<div>{{list.title}}</div>
						<span class="day">{{list.createDate}}</span>
					</div>
				</div>
			</b-col>
		</b-row>
		{{cultureFees}}
		{{happyFees}}
	</b-container>

</template>
				
<script>
	import 'swiper/swiper-bundle.css'
	import axios from "axios"

	export default {
		name: 'containerArea',
		props: {
			msg: String
		},
		data() {
			return {
				selected: 'cultureland',
				moneyPrice: 0,
				endMoneyPrice: 0,
				cultureFees: null,
				happyFees: null,
				giftboxFees: 0,
				cultureFeesBankTransfer: 500,
				happyFeesBankTransfer: 500,
				bankTransfer: 500,
				itemsName: ['날자', '판매자신청정보', '판매요청', '입금완료', '처리상태'],
				items: [
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'B' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'B' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'B' },
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'B' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'B' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'B' },
					{ day: '09.22', sellerBrand: require('@/assets/happy.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
					{ day: '09.22', sellerBrand: require('@/assets/culture.jpg'), name: '홍*동', price: '100,000', priceRequest: '20.09.22', requestComplete: '1', state: 'A' },
				],
				swiperOptions: {
					slidesPerView: 6,
					loop: true,
					autoplay: {
						delay: 2500,
						disableOnInteraction: true
					},
					simulateTouch: false,
					direction: 'vertical',
				},
				faqData: '',
			}
		},
		created() {
			this.purchaseFeePercents();
			this.faqList();
		},
		computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
        },
        mounted() {
            //console.log('Current Swiper instance object', this.swiper)
            //this.swiper.slideTo(3, 1000, false)
            //this.giftboxFees = this.cultureFees
        },
        methods: {
        	zeroNum: function(){
				if(this.moneyPrice == 0) this.moneyPrice = ''
        	},
        	checkSession: function(){
        		axios
        		.get(process.env.VUE_APP_BASE_URL+'/users/checkCurrentAuth/', { withCredentials: true })
        		.then( res => {
					console.log(res, res.data);
				})
        		.catch( err => {
        			console.log(err.response.data.message);
        		});
        	},
        	logOut(){
        		axios
        		.get('http://dev.back.makepin.co.kr:8080/logout')
        		.then( res => {
					console.log(res.data);
				})
        		.catch( err => {
        			console.log(err.response.data.message);
        		});
        	},

        	faqList(){
        		axios
        		.get(process.env.VUE_APP_BASE_URL+'/users/board/faq/?page=0&size=10', { withCredentials: true })
        		.then( res => {
					this.faqData = res.data.content
				})
        		.catch( err => {
        			console.log(err.response.data.message);
        		});
        	},
        	
        	purchaseFeePercents(){
        		var data = ''
        		axios
        		.get(process.env.VUE_APP_BASE_URL+'/users/fee/')
        		.then( res => {
					for(var i=0;res.data.content.length>i;i++){
						if(res.data.content[i].company == "해피머니"){
							this.purchaseFeePercentData("해피머니", res.data.content[i])
						} else if(res.data.content[i].company == "컬처랜드"){
							this.purchaseFeePercentData("컬처랜드", res.data.content[i])
						}
						this.transperFees = res.data.content[i].transperFees
					}
				})
        		.catch( err => {
        			console.log(err.response.data.message);
        		});
        	},

        	purchaseFeePercentData(obj, data){
        		if(obj == "해피머니"){
					this.happyFees = data.purchaseFeePercents
				} else if(obj == "컬처랜드"){
					this.cultureFees = data.purchaseFeePercents
				}
        	}

        },

        watch: {
			selected: function (val) {
				if(val == 'cultureland'){
					this.giftboxFees = this.cultureFees
					this.bankTransfer = this.cultureFeesBankTransfer
				} else {
					this.giftboxFees = this.happyFees
					this.bankTransfer = this.happyFeesBankTransfer
				}
				if(this.endMoneyPrice != 0) this.endMoneyPrice = this.moneyPrice * (1 - this.giftboxFees / 100)
			},
			moneyPrice: function(val){
				this.endMoneyPrice = Math.floor(val * (1 - this.giftboxFees / 100))
			},
			cultureFees: function(val){
				this.giftboxFees = val
			}
		}
	}
</script>

<style>
.container_box{}
.ma_title{padding:15px;border:solid 1px #ddd;box-shadow:0 3px 6px 0 rgba(0,0,0,0.06);color:#444;font-weight:700;position:relative;}
.ma_title .more{position:absolute;top:50%;right:10px;width:21px;height:21px;margin-top:-10px;border:solid 1px #999;}
.ma_title .more:before{top:9px;right:5px;width:9px;height:1px;}
.ma_title .more:after{top:5px;right:9px;width:1px;height:9px;}
.ma_title .more:before,
.ma_title .more:after{content:'';display:block;clear:both;position:absolute;background-color:#444;}
.swiper_box{border:solid 1px #ddd;border-top:none;box-shadow:0 3px 6px 0 rgba(0,0,0,0.06);}
.swiper_container_box{height:309px;box-shadow:0 3px 6px 0 rgba(0,0,0,0.06);position:relative;}
.swiper_blind{position:absolute;top:0;left:0;bottom:0;width:100%;height:100%;z-index:100;}
.swiper-container {width:100%;height:100%;}
.swiper-slide{text-align:center;font-size:18px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}
.calculator_box{border:solid 1px #ddd;border-top:none;box-shadow:0 3px 6px 0 rgba(0,0,0,0.06);}
.calculator_box .form-group{margin-bottom:0;}
.custom-control-label{padding:2px 0;font-size:.8em;}
.calu_radio{}
.calu_radio .bv-no-focus-ring{text-align:center;padding:8px 0}
.calu_radio .bv-no-focus-ring .custom-control{display:inline-block;margin:0 10px;text-align:center;}
.calu_moneysum{padding:0 15px;}
.calu_moneysum:after{content:'';display:block;clear:both;}
.calu_moneysum .line{float:left;width:50%;text-align:left;line-height:34px;font-size:.8em;}
.calu_moneysum .line:first-child + .line{text-align:right;}
.calu_moneysum .line .form-control{font-size:.8em;text-align:right;}
.calu_tbl{}
.calu_tbl:after,
.calu_tbl .calu_tr:after{content:'';display:block;clear:both;}
.calu_tbl .calu_tr{background-color:#f3f3f3;border-radius:7px;}
.calu_tbl .calu_td{float:left;width:100%;padding:13px 0;}
.calu_tbl .calu_td div{float:left;width:50%;text-align:left;font-size:.8em;}
.calu_tbl .calu_td div:first-child + div{text-align:right;}
.calu_tbl .calu_td.last_td{margin-top:10px;border:solid 1px #eee;padding:7px;border-radius:7px;background-color: #fff;}
.calu_tbl .calu_td.last_td div:first-child + div{}
.calu_tbl .calu_td.last_td div:first-child + div span{color:#4384f3;font-weight:700;}
.sell_tbl{width:100%;font-size:.8em;}
.sell_tbl:after{content:'';display:block;clear:both;}
.sell_tbl .sell_th{float:left;width:19%;line-height:40px;text-align:center;border-bottom:solid 1px #ddd;background-color:#000;color:#fff;font-weight:700;}
.sell_tbl .sell_td{float:left;width:19%;text-align:center;color:#777;}
.sell_tbl .sell_td .brand{float:left;height:20px;margin-right:10px;}
.sell_tbl .sell_td .brand img{float:left;height:100%;}
.sell_tbl .sell_td .won{padding-left:5px;}
.sell_tbl .sell_td.time_num span{font-weight:700;}
.sell_tbl .sell_td:first-child + .sell_td{text-align:left;}
.sell_tbl .sell_th:first-child + .sell_th,
.sell_tbl .sell_td:first-child + .sell_td{width:24%;}
.state_A{}
.state_A:after{content:'처리중';background-color:#ccc;}
.state_B{}
.state_B:after{content:'입금완료';background-color:#4384f3;}
.state_A:after,
.state_B:after{display:block;clear:both;width:80px;padding:3px 0;text-align:center;color:#fff;font-size:.8em;border-radius:8px;display:inline-block}

.faq_container{padding:20px;border:solid 1px #ddd;border-top:none;box-shadow:0 3px 6px 0 rgba(0,0,0,.06)}
.faq_container:after{content:'';display:block;clear:both}
.faq_container .list{float:left;width:100%;position:relative;padding-right:90px;font-size:.8em;line-height:30px;color:#444;}
.faq_container .list div{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}
.faq_container .list .day{position:absolute;top:0;right:0}

@media screen and (max-width: 760px){
	.swiper_container_box{}
	.custom-control-label,
	.calu_moneysum .line .form-control,
	.calu_tbl .calu_td div,
	.sell_tbl,
	.faq_container .list,
	.state_A:after,
	.state_B:after,
	.calu_moneysum .line{font-size:.68em;}
	.sell_td.time_num{width:10%;}
	.sell_tbl .sell_td:first-child + .sell_td{width:33%}
	.state_A:after,
	.state_B:after{width:50px;}
}
</style>
