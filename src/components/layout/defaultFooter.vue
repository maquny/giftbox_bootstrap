<template>
    <div class="defaultFooter">

        <div class="footer_sub_infor">
            <b-container>
                <div class="footer_infor_menu">
                    <router-link to="/about">공지사항</router-link>
                    <router-link to="/about">FAQ</router-link>
                    <router-link to="/about">이메일 문의</router-link>
                </div>
            </b-container>
        </div>

        <b-container class="footer_company">
            <div class="footer_company_top after">
                <div class="f_logo"><router-link to="/about"><img alt="Vue logo" :src="logoImg"></router-link></div>
                <div class="terms_menu after">
                    <router-link to="/about">이용약관</router-link>
                    <router-link to="/about">개인정보처리방침</router-link>
                </div>
            </div>
            <div class="footer_company_bottom">
                <router-link to="/about">(주)아워펀</router-link>
                사업자등록번호 : 000-00-00000 / 통신판매업신고 : 제 2020-서울OO-0000<br/>
                경기도 성남시 분당구 000 00 0000 (주)아워펀 (대표자 : 홍길동)<br/>
                고객센터 help@abcde.fgh
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'defaultFooter',
        data() {
            return {
                logoImg: require('@/assets/images/logo.png'),
            }
        }
    }
</script>

<style scoped>footer_company
.after:after{content:'';display:block;clear:both;}
.defaultFooter{border-top:solid 1px #ccc;}
.footer_sub_infor{border-bottom:solid 1px #ccc;}
.footer_infor_menu{margin:0 auto;text-align:right;}
.footer_infor_menu a{display:inline-block;padding:10px;color:#444;font-size:.85em;}
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

@media screen and (max-width: 760px){
    .footer_company_bottom a{display:block;}
}
</style>