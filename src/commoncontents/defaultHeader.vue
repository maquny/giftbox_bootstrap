<template>
    <div class="defaultHeader" :class="$mq">
        <div class="header_cont">
            <router-link to="/" class="logo"><img alt="Vue logo" :src="logoImg"></router-link>
            <div class="menu">
                <ul>
                    <li><router-link to="/about" exact>상품권 판매신청</router-link></li>
                    <li @mouseover="listOne = true" @mouseleave="listOne = false">
                        <router-link to="/Hello">마이페이지</router-link>
                        <transition name="fade">
                            <ul v-if="listOne" @click="listOne = false">
                                <li><router-link to="/Hello">판매123거래내역</router-link></li>
                                <li><router-link to="/Hello">계좌인증 관리</router-link></li>
                                <li><router-link to="/Hello">개인정보 관리</router-link></li>
                                <li><router-link to="/Hello">판매한도 관리</router-link></li>
                            </ul>
                        </transition>
                    </li>
                    <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
                        <router-link to="/Hello">고객센터</router-link>
                        <transition name="fade">
                            <ul v-if="listTwo" @click="listTwo = false">
                                <li><router-link to="/Hello">공지사항</router-link></li>
                                <li><router-link to="/Hello">FAQ</router-link></li>
                                <li><router-link to="/Hello">1:1 문의/답변</router-link></li>
                            </ul>
                        </transition>
                    </li>

                </ul>
            </div>
            <div class="user_menu">
                <router-link to="/login">로그인</router-link>
                <router-link to="/login">로그아웃</router-link>
                <router-link to="/Hello">회원가입</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'defaultHeader',
        data() {
            return{
                logoImg: require('@/assets/images/logo.png'),
                listOne:false,
                listTwo:false,
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
            }
        }
    }
</script>

<style scoped>
.defaultHeader{position:relative;z-index:20;}
.defaultHeader.mobile{width:100%;}
.box{width:100px;height:100px;background-color:#ccc;}
.defaultHeader{}
.header_cont{width:1200px;margin:0 auto;padding:20px 0;}
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
.menu li{display:block;float:left;position:relative;color:#444;min-width:150px}
.menu li > a{padding:7px;color:#444;font-size:.85em;display:block;text-align:center;}
.menu li ul{position:absolute;left:0;top:40px;margin:0;padding:0 0 10px 0;border-radius:10px;background:#fff;}
.menu li ul li{transition:background .2s}
.menu li ul li:hover{}
.fade-enter-active,.fade-leave-active{transition:opacity .2s}
.fade-enter,.fade-leave-active{opacity:0}

</style>
