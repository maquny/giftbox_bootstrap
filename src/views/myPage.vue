<template>
	<div class="mypage">
		<div class="giftcard_progress_title" v-bind:style="{ backgroundImage: 'url(' + itemImg + ')' }">
            <div class="mb-md-0 mb-4 pb-5 pt-5 container">
                <h3>마이페이지</h3>
                <div>마이페이지 입니다.</div>
                <div class="sub_top_item"><img alt="Vue logo" src="@/assets/sub_top_item.png"></div>
            </div>
        </div>
		<router-view>
			<div slot="header" class="mypage_sidemenu">
				<div  class="mypage_sidemenu_body">
					<router-link to="/myPage" :class=" isActive == 1 ? 'active' : ''">판매거래내역</router-link>
					<router-link to="/myPage/accountManageMent" :class=" isActive == 2 ? 'active' : ''">계좌인증 관리</router-link>
					<router-link to="/myPage/privacyManageMent" :class=" isActive == 3 ? 'active' : ''">개인정보 관리</router-link>
					<router-link to="/myPage/giftCardSaleLimitCheck" :class=" isActive == 4 ? 'active' : ''">판매한도 확인</router-link>
				</div>
			</div>
		</router-view>
	</div>
</template>

<script>
	export default {
		name: 'myPage',
		data() {
			return {
                itemImg: require('@/assets/sub_top_bg.png'),
				isActive: 1,
			}
		},
		created() {
            this.isActiveFun(this.$route.name)
        },
        methods: {
        	isActiveFun(val){
                switch (val){
                    case 'giftCardDealHistory' :
                        this.isActive = 1
                        break;
                    case 'giftCardDealHistoryDetail' :
                        this.isActive = 1
                        break;
                    case 'accountManageMent' :
                        this.isActive = 2
                        break;
                    case 'accountManageMentDetail' :
                        this.isActive = 2
                        break;
                    case 'privacyManageMent' :
                        this.isActive = 3
                        break;
                    case 'privacyManageMentDetail' :
                        this.isActive = 3
                        break;
                    case 'giftCardSaleLimitCheck' :
                        this.isActive = 4
                        break;        
                    default :
                        this.isActive = 0
                }
            },
        },
		watch: {
            $route (data){
                this.isActiveFun(data.name)
            }
        }
	}
</script>

<style>
.giftcard_progress_title{background-color: #4c7ee1;position: relative;background-size: auto 231px;background-repeat: no-repeat;background-position: 31% center;}
.sub_top_item{width:300px;position:absolute;bottom:0;left:50%;margin-left:50px;margin-bottom:-30px;}
.sub_top_item img{width:100%;}
.giftcard_progress_title h3{color:#fff;font-weight:700;}
.giftcard_progress_title h3 + div{color:#fff;min-height:24px;}

.mypage_cont_body{border-left:solid 1px #ddd;}
.mypage_cont_body:after{content:'';display:block;clear:both;}
.giftcard_progress{text-align:center;}

.mypage_sidemenu{float:left;width:180px;}
.mypage_sidemenu_body{padding:30px 15px;}
.mypage_sidemenu_body a{display:block;color:#444;line-height:1.5rem;padding:5px 0;}
.mypage_sidemenu_body a.active{font-weight:700;}
.mypage_container{float:left;width:calc(100% - 180px);min-height:500px;border-left:solid 1px #ddd;padding:30px;}

.mobile .mypage_container{width:100%;padding:1rem;border:none;}
.mobile .mypage_sidemenu{display:none;}
.mobile .mypage_cont_body{border:none;}

.mobile .giftcard_progress_title{background-size: auto 200px;}
.mobile .sub_top_item{width:150px;margin-bottom:-15px;}
</style>