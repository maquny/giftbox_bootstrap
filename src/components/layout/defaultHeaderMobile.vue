3<template>
    <div>
        <div v-if="topHistory == 'historyBack'">
            <b-container class="header_cont history_cont">
                <h5 class="top_htitle">상품권 판매 요청</h5>
                <b-icon icon="x" font-scale="2" class="close_icon" @click="$router.push({path: '/'})"></b-icon>
            </b-container>
        </div>
        
        <div v-else>
            <b-container class="header_cont mobile">
                <router-link to="/" class="logo"><img alt="Vue logo" :src="logoImg" :nametpye="this.$route.name"></router-link>
           <!--      <div class="mobile_menu">
                    <b-icon icon="list" font-scale="2"></b-icon>
                </div>
 -->
                <div>
                    <div class="mobile_menu" @click="mobile_menu_reset" v-b-toggle.sidebar-1>
                        <b-icon icon="list" font-scale="2"></b-icon>
                    </div>
                
                    <b-sidebar id="sidebar-1" sidebar-class="w-100" no-header shadow>
                        <template v-slot:default="{ hide }">
                            <div class="px-3 py-3">
                                <div class="m_head mb-4">
                                    <router-link to="/" class="menu_logo"><img alt="Vue logo" :src="logoImg"></router-link>
                                    <div class="close_btn" block @click="hide"><b-icon icon="x" font-scale="2"></b-icon></div>
                                </div>
                                <div class="m_menu_cont px-3 py-2">
                                    <div class="m_menu_a">
                                        <router-link to="/giftCardBuying" :class=" isActive == 1 ? 'active' : ''">상품권 판매요청</router-link>
                                        <template >
                                            <div class="t_menu menu1" @click="clickEvent">
                                                <div class="t_menu_btn" :class=" isActive == 2 ? 'active' : ''">마이페이지</div>
                                                <div class="t_menu_body">
                                                    <router-link to="/myPage" :class=" isSubActive == 1 ? 'active' : ''">판매거래내역</router-link>
                                                    <router-link to="/myPage/accountManageMent" :class=" isSubActive == 2 ? 'active' : ''">계좌인증 관리</router-link>
                                                    <router-link to="/myPage/privacyManageMent" :class=" isSubActive == 3 ? 'active' : ''">개인정보 관리</router-link>
                                                    <router-link to="/myPage/giftCardSaleLimitCheck" :class=" isSubActive == 4 ? 'active' : ''">판매한도 확인</router-link>
                                                </div>
                                            </div>
                                        </template>

                                        <template>
                                            <div class="t_menu menu2" @click="clickEvent">
                                                <div class="t_menu_btn" :class=" isActive == 3 ? 'active' : ''">고객센터</div>
                                                <div class="t_menu_body">
                                                    <router-link to="/board" :class=" isSubActive == 5 ? 'active' : ''">공지사항</router-link>
                                                    <router-link to="/board/frequentlyAskedQuestions" :class=" isSubActive == 6 ? 'active' : ''">FAQ</router-link>
                                                    <router-link to="/board/userInquiry" :class=" isSubActive == 7 ? 'active' : ''">1:1문의/답변</router-link>
                                                </div>
                                            </div>
                                        </template>

                                    </div>
                                    <div class="m_menu_b">
                                        <div v-if="isLogin">
                                            <router-link to="/myPage">{{userInfor}} 님</router-link>
                                            <div class="btna" @click="showMsgBoxTwo">로그아웃</div>
                                        </div>
                                        <div v-else>
                                            <router-link to="/logIn">로그인</router-link>
                                            <router-link to="/signup">회원가입</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="m_footer">Copyright © 2020 BY OOO. ALL RIGHTS RESERVED</div>
                        </template>
                    </b-sidebar>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex"
    export default {
        name: 'defaultHeaderMobile',
        props: ['reFineTarget'],
        data() {
            return{
                logoImg: require('@/assets/images/make_pin_logo.png'),
                mobileHead: this.reFineTarget,
                topHistory: '',
                activeMenu1: false,
                activeMenu2: false,
                isActive: 0,
                isSubActive: '',
            }
        },
        computed:{
            ...mapState(['isLogin', 'userInfor', 'deviceType'])
        },
        created() {
            this.isActiveFun(this.$route.name)
        },
        methods: {
            ...mapActions(["logOut"]),

            clickEvent(obj){
                var activeMenu1 = document.getElementsByClassName('menu1')[0];
                var activeMenu2 = document.getElementsByClassName('menu2')[0];
                
                if(obj.target.parentElement.className.indexOf('menu1') != -1){
                    activeMenu1.classList.add('active')
                    activeMenu2.classList.remove('active')
                } else {
                    activeMenu2.classList.add('active')
                    activeMenu1.classList.remove('active')
                }
            },

            isActiveFun(val){
                this.topHistory = ''
                switch (val){
                    case 'giftCardInput' :
                        this.topHistory = 'historyBack'
                        this.isActive = 1
                        break;
                    case 'giftCardDealHistory' :
                        this.isActive = 2
                        this.isSubActive = 1
                        break;
                    case 'giftCardDealHistoryDetail' :
                        this.isActive = 2
                        this.isSubActive = 1
                        break;
                    case 'accountManageMent' :
                        this.isActive = 2
                        this.isSubActive = 2
                        break;
                    case 'accountManageMentDetail' :
                        this.isActive = 2
                        this.isSubActive = 2
                        break;
                    case 'privacyManageMent' :
                        this.isActive = 2
                        this.isSubActive = 3
                        break;
                    case 'privacyManageMentDetail' :
                        this.isActive = 2
                        this.isSubActive = 3
                        break;
                    case 'giftCardSaleLimitCheck' :
                        this.isActive = 2
                        this.isSubActive = 4
                        break;
                    case 'noticeBoard' :
                        this.isActive = 3
                        this.isSubActive = 5
                        break
                    case 'frequentlyAskedQuestions' :
                        this.isActive = 3
                        this.isSubActive = 6
                        break
                    case 'userInquiry' :
                        this.isActive = 3
                        this.isSubActive = 7
                        break;   
                    case 'userInquiryWriting' :
                        this.isActive = 3
                        this.isSubActive = 7
                        break;       
                    default :
                        this.isActive = 0
                }
            },

            mobile_menu_reset(obj){
                document.getElementsByClassName('t_menu').forEach(obj=>obj.classList.remove("active"))
            },

            showMsgBoxTwo() {
                this.boxTwo = ''
                this.$bvModal.msgBoxConfirm('로그아웃 하시겠습니까?', {
                    okTitle: '확인',
                    cancelTitle: '취소',
                    okVariant: 'outline-dark',
                    cancelVariant: 'outline-dark',
                    footerClass: 'p-2 border-top-0',
                    hideHeaderClose: false,
                    centered: true
                })
                .then(value => {
                    this.boxTwo = value
                    if(value == true) this.logOut()
                })
                .catch(err => {
                    // console.log(err)
                })
            },
        },
        watch: {
            reFineTarget (val){
                this.mobileHead = val
            },

            $route (data){
                this.isActiveFun(this.$route.name)
            }
        }
    }
</script>

<style scoped="">
*:focus { outline:none; }
.defaultHeader{position:relative;z-index:20;}
.header_menu_cont:after{content:'';display:block;clear:both;}
.box{width:100px;height:100px;background-color:#ccc;}
.defaultHeader{}
.header_cont{margin:0 auto;padding:15px 0;}
.header_cont.history_cont{border-bottom:solid 1px #ddd;}
.header_cont.history_cont .b-icon.bi{vertical-align:middle;}
.header_cont:after{content:'';display:block;clear:both;}
.logo{float:left;}
.logo img{width:180px;}
.close_icon{position:absolute;top:50%;right:10px;margin-top:-16px;}
.top_htitle{text-align:center;margin:0;}
.user_menu{float:right;}
.user_menu:after{content:'';display:block;clear:both;}
.user_menu a{float:left;font-size:.7em;color:#777;padding:13px 10px;position:relative;}
.user_menu a:first-child:after{display:none;}
.user_menu a:after{content:'/';display:block;clear:both;font-size:1em;font-weight:400;position:absolute;top:50%;left:0;margin-top:-9px;color:#ccc;}

.menu{float:left;margin-left:50px;margin-top:7px;}
.menu > a{display:block;padding:20px;color:#444;text-decoration:none;text-align:center;}
.menu ul:after{content:'';display:block;clear:both;}
.menu li{display:block;float:left;position:relative;color:#444;min-width:150px}
.menu li > a{padding:7px;color:#444;font-size:.85em;display:block;text-align:center;}
.menu li ul{position:absolute;left:0;top:40px;margin:0;padding:0 0 10px 0;border-radius:10px;background:#fff;}
.menu li ul li{transition:background .2s}
.menu li ul li:hover{}
.fade-enter-active,.fade-leave-active{transition:opacity .2s}
.fade-enter,.fade-leave-active{opacity:0}

.mobile_menu{display:none;}
.mobile .mobile_menu{display:block;position:absolute;top:20px;right:10px;padding:5px;}
.mobile .defaultHeader .header_cont{padding:20px 0;}
.mobile .defaultHeader .header_cont .logo{float:none;display:block;text-align:center;}
.mobile .defaultHeader .header_menu_cont{display:none;}

.mobile .m_head{}
.mobile .m_head:after{content:'';display:block;clear:both;}
.mobile .menu_logo{float:left;width:130px;}
.mobile .menu_logo img{width:100%;}
.close_btn{float:right;}

.m_menu_cont{}
.m_menu_a{padding:10px 0;}
.m_menu_b{padding:10px 0;border-top:solid 1px #ccc;}
.m_menu_cont a{display:block;text-align:center;color:#444;padding:10px 0;}
.m_menu_cont a.active{font-weight:700;}
.m_menu_cont .m_menu_b a{color:#999;}
.m_menu_cont .m_menu_b .btna{display:block;text-align:center;color:#444;padding:10px 0;color:#999;}
.m_footer{text-align:center;font-size:13px;color:#666;position:absolute;bottom:0;left:0;width:100%;padding:20px 0}

.t_menu{width:100%;text-align:center;}
.t_menu_btn{text-align:center;color:#444;padding:10px 0;}
.t_menu_btn.active{font-weight:700;}
.t_menu_ui{padding:20px}
.t_menu_ui a{font-size:.87rem;color:#999;padding:5px 0;}
.t_menu.not-collapsed{text-decoration:underline;}
.t_menu .t_menu_body{display:none;padding:15px 0;}
.t_menu.active .t_menu_body{display:block;}
.t_menu .t_menu_body a{font-size:.87em;color:#777;padding:5px 0;}

</style>