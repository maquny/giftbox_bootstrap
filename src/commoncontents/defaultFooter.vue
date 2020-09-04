<template>
    <div class="defaultFooter">

        <div class="footer_sub_infor">
            <div class="footer_infor_menu">
                <router-link to="/about">공지사항</router-link>
                <router-link to="/about">FAQ</router-link>
                <router-link to="/about">이메일 문의</router-link>
            </div>
        </div>

        <div class="footer_company">
            <div class="footer_company_top after">
                <div class="f_logo">f_logo</div>
                <div class="terms_menu after">
                    <router-link to="/about">이용약관</router-link>
                    <router-link to="/about">개인정보처리방침</router-link>
                </div>
            </div>
            <div class="footer_company_bottom">
                개인정보처리방침개인정보처리방침개인정보처리방침개인정보처리방침<br/>개인정보처리방침개인정보처리방침개인정보처리방침개인정보처리방침개인정보처리방침개인정보처리방침<br/>개인정보처리방침개인정보처리방침개인정보처리방침
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'defaultFooter'
    }
</script>

<style scoped>footer_company
.after:after{content:'';display:block;clear:both;}
.defaultFooter{border-top:solid 1px #ccc;}
.footer_sub_infor{border-bottom:solid 1px #ccc;}
.footer_infor_menu{width:1200px;margin:0 auto;text-align:right;}
.footer_infor_menu a{display:inline-block;padding:10px;color:#444;font-size:.85em;}
.footer_infor_menu a:first-child:after,
.terms_menu a:first-child:after{display:none;}
.footer_infor_menu a:after,
.terms_menu a:after{content:'';display:block;clear:both;width:1px;height:14px;background-color:#ccc;position:absolute;top:50%;left:0;margin-top:-7px;}
.terms_menu a:first-child:after{display:none;}
.footer_company{width:1200px;margin:0 auto;padding:25px 0;}
.footer_company_top{}
.f_logo{float:left;width:100px;}
.terms_menu{float:left;width:calc(100% - 120px);margin-left:20px;}
.terms_menu a{float:left;padding:10px;position:relative;color:#444;font-size:.85em;}
.terms_menu a:after{content:'';display:block;clear:both;width:1px;height:14px;background-color:#ccc;position:absolute;top:50%;left:0;margin-top:-7px;}
.terms_menu a:first-child:after{display:none;}
.footer_company_bottom{font-size:.75em;color:#777;line-height:1.5em;}
</style>