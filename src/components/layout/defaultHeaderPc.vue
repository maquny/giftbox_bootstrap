<template>
    <b-container class="header_cont pc">
        <router-link to="/" class="logo"><img alt="Vue logo" :src="logoImg"></router-link>
        <div class="header_menu_cont">
            <div class="menu">
                <ul>
                    <li><router-link to="/about" exact>상품권 판매신청</router-link></li>
                    <li @mouseover="listOne = true" @mouseleave="listOne = false">
                        <router-link to="/myPage">마이페이지</router-link>
                        <transition name="fade">
                            <ul v-if="listOne" @click="listOne = false">
                                <li><router-link to="/myPage">판매거래내역</router-link></li>
                                <li><router-link to="/myPage/accountManageMent">계좌인증 관리</router-link></li>
                                <li><router-link to="/myPage/privacyManageMent">개인정보 관리</router-link></li>
                                <li><router-link to="/myPage/giftCardSaleLimitCheck">판매한도 관리</router-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
                        <router-link to="/board">고객센터</router-link>
                        <transition name="fade">
                            <ul v-if="listTwo" @click="listTwo = false">
                                <li><router-link to="/board">공지사항</router-link></li>
                                <li><router-link to="/board/frequentlyAskedQuestions">FAQ</router-link></li>
                                <li><router-link to="/board/userInquiry">1:1 문의/답변</router-link></li>
                            </ul>
                        </transition>
                    </li>
                </ul>
            </div>
            <div class="user_menu">
                <div v-if="logIn != true">
                    <router-link to="/logIn">로그인</router-link>
                    <router-link to="/signup">회원가입</router-link>
                </div>
                <div v-else>
                    <router-link to="/">{{userName}} 님</router-link>
                    <router-link to="/">로그아웃</router-link>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: 'headerPc',
        props:['logInStaVal'],
        data() {
            return{
                logoImg: require('@/assets/images/logo.png'),
                listOne:false,
                listTwo:false,
                activeMenu1: false,
                activeMenu2: false,
                userName:'',
                logIn: false
            }
        },

        methods: {
            mouseOver: function(event) {
                console.log(event.target.className)
                if(event.target.className == 'coustom'){
                    console.log(event.target.className == 'coustom')
                    this.coustomActive = !this.coustomActive;
                    this.mypageActive = false;
                } else {
                    console.log(event.target.className == 'mypage')
                    this.mypageActive = !this.mypageActive;
                    this.coustomActive = false;
                }
            },
            mouseOut: function() {
                console.log('123')
            },
            mobileMenu: function(obj){
                console.log(obj)
            }
        },
        watch: {
            logInStaVal(val){
                if(val.status == 200){
                    this.logIn = true;
                    this.userName = val.data
                }
            }
        }
    }
</script>

<style>
*:focus { outline:none; }
.defaultHeader{position:relative;z-index:20;}
.header_menu_cont:after{content:'';display:block;clear:both;}
.box{width:100px;height:100px;background-color:#ccc;}
.defaultHeader{}
.header_cont{margin:0 auto;padding:20px 0;}
.header_cont:after{content:'';display:block;clear:both;}
.logo{float:left;}
.logo img{width:180px;}

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
.m_menu_cont .m_menu_b a{color:#999;}
.m_footer{text-align:center;font-size:13px;color:#666;position:absolute;bottom:0;left:0;width:100%;padding:20px 0}

.t_menu{width:100%;text-align:center;}
.t_menu_btn{text-align:center;color:#444;padding:10px 0;}
.t_menu_ui{padding:20px}
.t_menu_ui a{font-size:.87rem;color:#999;padding:5px 0;}
.t_menu.not-collapsed{text-decoration:underline;}
.t_menu .t_menu_body{display:none;padding:15px 0;}
.t_menu.active .t_menu_body{display:block;}
.t_menu .t_menu_body a{font-size:.87em;color:#777;padding:5px 0;}

</style>