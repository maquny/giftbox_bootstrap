<template>
	<div class="signup_container col-md-5">

		<div class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
			<div @click="showMsgBoxTwo" class="signup_logo"><img alt="Vue logo" :src="logoImg"></div>
			<h4 :class="[hiddenCont ? hideCont : 'activeClass']">회원가입</h4>
			<div class="signFromCont" :class="[hiddenCont ? activeClass : 'hideCont']">
				<div id="successShowCont" class="signFromCont not_border" :class="[hiddenCont ? activeClass : 'hideCont']">
					<h1>환영합니다.</h1>
					<h4>회원가입을 진심으로 축하합니다.</h4>
				</div>
				<router-view @checkeddetail="clickedShowDetailModal">
					<div slot="header">
						<div class="stepper_box" id="successCont" :class="[hiddenCont ? hideCont : 'activeClass']">
							<div class="steps_wrapper">
								<div id="depth1" class="step preps" :class="[depth1 ? activeClass : 'deactivated']">
									<div class="circle"><i>&nbsp;</i></div> 
									<div class="step_title">
										<p>이용동의</p> 
									</div>
								</div>
								<div id="depth2" class="step" :class="[depth2 ? activeClass : 'deactivated']">
									<div class="circle"><i>&nbsp;</i></div> 
									<div class="step_title">
										<p>회원정보입력</p> 
									</div>
								</div>
								<div id="depth3" class="step" :class="[depth3 ? activeClass : 'deactivated']">
									<div class="circle"><i>&nbsp;</i></div> 
									<div class="step_title">
										<p>가입완료</p> 
									</div>
								</div> 
							</div>
						</div>
						<div class="mb_cont_tit" id="successCont" :class="[hiddenCont ? hideCont : 'activeClass']">
							<h4>MAKEPIN에 오신 걸 환영합니다!</h4>
							<p>안전하고 편리한 서비스 이용을 위해 아래 내용을 확인 후 동의해주세요!</p>
						</div>
					</div>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'signUp',
		data(){
			return {
				depth1: false,
				depth2: false,
				depth3: false,
				depthActive: false,
				depthData: '',
				hiddenCont: false,
				hideCont: 'hideCont',
				activeClass: 'activated',
				logoImg: require('@/assets/images/make_pin_logo.png'),
			}
		},
		methods: {
			showMsgBoxOne(text) {
				this.boxOne = ''
				this.$bvModal.msgBoxOk(text, {
					okTitle: '확인',
					size: 'sm',
					okVariant: 'outline-dark',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					this.boxOne = value
				})
				.catch(err => {
				})
			},

			showMsgBoxTwo() {
				this.boxTwo = ''
				this.$bvModal.msgBoxConfirm('회원가입을 취소 하시겠습니까?', {
					okTitle: '취소',
					cancelTitle: '취소안함',
					okVariant: 'outline-dark',
					cancelVariant: 'outline-dark',
					footerClass: 'p-2 border-top-0',
					hideHeaderClose: false,
					centered: true
				})
				.then(value => {
					this.boxTwo = value
					if(value == true){
						this.$router.push({name: 'Home', path: '/'}, function() {
							console.log("Home 호출 완료");
						});
					}
				})
				.catch(err => {

				})
			},

            clickedShowDetailModal(obj){
                if(obj.name == "signUserFrom"){
                	this.depth1 = true;
                	if(obj.goingSignUp){
                		this.depthActive = obj.sta
                	}
                } else if(obj.name == "successSignUp"){
                	this.depth1 = true;
                	this.depth2 = true;
                	this.depth3 = obj.sta;
                	this.depthData = obj
                }
            }
        },
        watch: {
            depthActive (val){
                document.getElementById('depth2').classList.add('preps');
            },
            depthData(obj){
            	this.hiddenCont = obj.hiddenCont
            }
        }
	}
</script>

<style>
#successShowCont{display:none;}
#successShowCont.activated{display:block;border:none;}
#successShowCont h1,
#successShowCont h4{text-align:center;font-weight:100;}
.signup_container.col-md-5{margin:0 auto;padding:100px 0;}
.stepper_box{margin-bottom:30px;position:relative;}
.stepper_box:after{content:'';display:block;clear:both;position:absolute;top:8px;left:50%;width:64%;height:1px;margin-left:-32%;background-color:#bbb;z-index:1}
.stepper_box .top{display:flex;align-items:center;position:relative;justify-content:center}
.stepper_box .steps_wrapper{display:flex;align-items:center;justify-content:space-between;position:relative;width:95%;left:0;margin:3%}
.stepper_box .steps_wrapper .step{width:33.333%;position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;z-index:10;}

.stepper_box .steps_wrapper .step.activated .step_title p{min-height:20px;font-size:0;}
.stepper_box .steps_wrapper .step.activated + .step .step_title{opacity:1;}
.stepper_box .steps_wrapper .step.activated + .step .step_title p{color:#444;font-weight:700;}
.stepper_box .steps_wrapper .step.activated + .step + .step .step_title p{min-height:20px;font-size:0;}
.stepper_box .steps_wrapper .step.activated + .step.activated + .step.activated .step_title{opacity:1;}
.stepper_box .steps_wrapper .step.activated + .step.activated + .step.activated .step_title p{color:#444;font-weight:700;}
@media (max-width:767px){
	.stepper_box .steps_wrapper{width:100%;justify-content:center;margin:10% 0 3% 0;}
	.stepper_box .steps_wrapper .step{width:100%!important}
	.signup_container.col-md-5{margin:0 auto;padding:0 15px;}
}
.stepper_box .steps_wrapper .step.deactivated .circle i{background-color:#ddd}
.stepper_box .steps_wrapper .step.deactivated .step_title{opacity:.35}
.stepper_box .steps_wrapper .step .circle{margin-bottom:1rem;padding:0 1rem;}
.stepper_box .steps_wrapper .step .circle i{color:#fff;border-radius:2rem;width:1rem;height:1rem;background-color:#ddd;display:block}
.stepper_box .steps_wrapper .step.deactivated.preps .circle i{border:solid 2px #3383c8;background-color:#fff}

.stepper_box .steps_wrapper .step.activated .circle i{background-color:#3383c8;}
.stepper_box .steps_wrapper .step .step_title{}
.stepper_box .steps_wrapper .step .step_title p{font-size:.87rem;margin:0 0 .2rem;color:#333;}
.stepper_box .steps_wrapper .step.activated .step_title p{font-weight:700}
.signup_logo{display:block;text-align:center;margin-bottom:100px}
.signup_logo img{width:200px}
.mb_cont_tit{padding-bottom:10px;margin-bottom:20px;border-bottom:2px solid #222}
.mb_cont_tit p{padding:0;margin:0;color:#666;}
.mb_section{margin-top:10px;padding-left:20px;}
.mb_section:first-child{margin-top:25px}
fieldset{border:0}
.mb_section .agree_box{height:100px;overflow:hidden;overflow-y:auto;background:#f7f7f7;padding:15px;margin-top:6px;font-size:12px;color:#777}
.mb_section .agree_box p{white-space:pre-line}
.bv-example-row{width:550px;margin: 0 auto;}
.signFromCont{border:solid 1px #ededed;border-radius:20px;padding:50px;display:block;}
.signFromCont.activated,
.signFromCont.not_border{border:none;}
h4.hideCont,
#successCont.hideCont{display:none;}
.from_2box{padding:20px 0;border-bottom:solid 1px #ddd;margin-bottom:10px;}
.mobile .signFromCont{border:none;padding:0;}
.mobile .bv-example-row{width:auto}

.btnn{min-width:50%;height:50px;line-height:50px;display:inline-block;padding:0 50px;border-radius:2em;border:1px solid rgba(0,0,0,.08);box-shadow:0 1px 6px 0 rgba(0,0,0,.1);background:#ccc;font-weight:500;color:#fff;font-size:16px;text-align:center;vertical-align:middle;cursor:pointer;overflow:visible;white-space:nowrap}
.btnn.grd{background-color:#498ceb;background-image:linear-gradient(45deg,#498dec 0,#6729a7 95%);box-shadow:0 1px 6px 0 rgb(94 67 183);color:#fff;border:0}
.btnn.bTcont{margin-top:40px;margin:30px auto 0 auto;display:block;}
.mobile .signup_logo img{width:200px}
</style>