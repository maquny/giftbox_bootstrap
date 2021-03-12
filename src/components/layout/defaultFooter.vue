<template>
    <div id="defaultFooter" class="defaultFooter" :class='{ hidden_cont: not_footer }'>

        <div class="footer_sub_infor">
            <b-container>
                <div class="footer_infor_menu">
                    <router-link to="/board">공지사항</router-link>
                    <router-link to="/board/frequentlyAskedQuestions">FAQ</router-link>
                    <a :href="'mailto:' + email">이메일 문의</a>
                </div>
            </b-container>
        </div>

        <b-container class="footer_company">
            <div class="footer_company_top after">
                <div class="f_logo"><router-link to="/"><img alt="Vue logo" :src="logoImg"></router-link></div>
                <div class="terms_menu after">
                    <router-link to="/terms/termsOfUse">이용약관</router-link>
                    <router-link to="/terms">개인정보처리방침</router-link>
                </div>
            </div>
            <div class="footer_company_bottom">
                사업자등록번호 : 357-86-01817 | 서울시 강남구 강남대로84길 24-4, 2층 LS68호 (역삼동)
                체육시간 주식회사 대표이사 : 공영식 | 고객센터 : cs@makepin.co.kr
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'defaultFooter',
        data() {
            return {
                logoImg: require('@/assets/images/main_pin_flogo.png'),
                not_footer: false,
                email: 'help@abcde.fgh'
            }
        },
        created() {
            this.diveceHiddenChecked()
        },
        methods: {
            diveceHiddenChecked(){
                if(this.$route.name == 'signUp' || this.$route.name == 'logInFrom' || this.$route.name == 'signUpComplete' || this.$route.name == 'signUpUserFrom' || this.$route.name == 'findId' || this.$route.name == 'resetPassWord'){
                    this.not_footer = true;
                } else {
                    this.not_footer = false;
                }
            }
        },
        watch: {
            $route (data){
                this.diveceHiddenChecked();
            },

            not_footer(params){
                this.diveceHiddenChecked();
            }
        }
    }
</script>

<style scoped>
.after:after{content:'';display:block;clear:both;}
.defaultFooter{border-top:solid 1px #eee;}
.defaultFooter.hiddenCont{display:none;}
.footer_sub_infor{border-bottom:solid 1px #eee;}
.footer_infor_menu{margin:0 auto;text-align:right;}
.footer_infor_menu a{display:inline-block;padding:10px;color:#666;font-size:.85em;position:relative;}
.footer_infor_menu a:first-child:after,
.terms_menu a:first-child:after{display:none;}
.footer_infor_menu a:after,
.terms_menu a:after{content:'';display:block;clear:both;width:1px;height:14px;background-color:#ccc;position:absolute;top:50%;left:0;margin-top:-7px;}
.terms_menu a:first-child:after{display:none;}
.footer_company{margin:0 auto;padding:25px 15px;}
.footer_company_top{}
.footer_company_top:after{content:'';display:block;clear:both;}
.f_logo{float:left;width:100px;}
.f_logo img{float:left;width:100%;padding:8px 0 9px 0;}
.terms_menu{float:left;width:calc(100% - 120px);margin-left:20px;}
.terms_menu a{float:left;padding:10px;position:relative;color:#444;font-size:.85em;}
.terms_menu a:after{content:'';display:block;clear:both;width:1px;height:14px;background-color:#ccc;position:absolute;top:50%;left:0;margin-top:-7px;}
.terms_menu a:first-child:after{display:none;}
.footer_company_bottom{font-size:.75em;color:#777;line-height:1.5em;}
.hidden_cont{display:none;}
@media screen and (max-width: 760px){
    .footer_company_bottom a{display:block;}
}
</style>