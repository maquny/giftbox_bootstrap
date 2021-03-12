<template>
	<div>
		<router-view>
			<div class="giftcard_progress gift_top_box ml-auto mr-auto" slot="header">
				<div class="giftcard_progress_box">
					<div class="gp_num one">상품권 선택</div>
					<div class="gp_num two">핀번호 입력</div>
					<div class="gp_num three">판매완료</div>
				</div>
			</div>
		</router-view>
	</div>
</template>

<script>
	export default {
		name: 'giftCardBuying',
		created() {
            
        },
        mounted(){
        },
		methods:{

		},
		watch: {
            $route (data){
                //console.log(data)
            }
        }
	}
</script>

<style scoped="">
.gift_top_box{width:75%;}
.mobile .gift_top_box{width:100%;}
.giftcard_container.col-md-4{margin:0 auto;padding:100px 0;}
.giftcard_progress{text-align:center;}
.giftcard_progress_title{background-color:#ededed;}
.giftcard_progress_box:after{content:'';display:block;clear:both;}
.gp_num{width:24%;height:50px;line-height:50px;border-radius:25px;color:#666;text-align:center;border:solid 1px #eee;margin:0 1.2%;font-size:.8rem;display:inline-block;background-image: linear-gradient(45deg,#f7f7f7,#e6e6e6 95%);box-shadow: 0 1px 6px 0 rgb(216 216 216);position:relative;overflow:hidden;}

.gp_num.active{background-color:#498ceb;background-image:linear-gradient(45deg,#498dec,#6729a7 95%);box-shadow:0 1px 6px 0 rgb(94 67 183);color:#fff;border:0}
.gp_num.active:after{color:#444}

.mobile .gp_num.one{float:left;width:50px;margin:5px 5px 5px 0}
.mobile .gp_num.two{float:left;width:50px;margin:5px 5px 5px 0}
.mobile .gp_num.three{float:left;width:50px;margin:5px 5px 5px 0;}

.mobile .gp_num.one.active,
.mobile .gp_num.two.active,
.mobile .gp_num.three.active{width: calc(100% - 115px);}

.mobile .gp_num.one.active.prev_active,
.mobile .gp_num.two.active.prev_active,
.mobile .gp_num.three.active.prev_active{width:50px;}
.mobile .gp_num.one.active.prev_active:after,
.mobile .gp_num.two.active.prev_active:after,
.mobile .gp_num.three.active.prev_active:after{background-color:#498ceb;background-image:linear-gradient(45deg,#498dec,#6729a7 95%);box-shadow:0 1px 6px 0 rgb(94 67 183);color:#fff;}

    

.gp_num.one:after,
.gp_num.two:after,
.gp_num.three:after{display:block;position:absolute;top:0;left:0;width:50px;height:50px;border-radius:25px;text-align:center;line-height:50px;font-size:.9rem;background-color:#fff;}
.gp_num.one:after{content:'1';}
.gp_num.two:after{content:'2';}
.gp_num.three:after{content:'3';}


@media (min-width: 768px){
	.col-md-3.login_container{width:450px;margin:0 auto;padding:100px 0;}
}
</style>