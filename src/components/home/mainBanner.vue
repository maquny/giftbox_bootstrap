<template>
	<div class="swiper_test" md="12">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide>
				<div><img alt="Vue logo" src="@/assets/main02.png"></div>
			</swiper-slide>
			<swiper-slide>
				<div><img alt="Vue logo" src="@/assets/main02.png"></div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import 'swiper/swiper-bundle.css'
	export default {
		name: 'mainBanner',
		data() {
			return {
				swiperOptions: {
					loop: true,
					spaceBetween: 0,
					autoplay: {
						delay: 5500,
						disableOnInteraction: true
					},
					pagination: {
						el: '.swiper-pagination',
					},
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.$swiper
			}
		},
		mounted() {
            //console.log('Current Swiper instance object', this.swiper)
            //this.swiper.slideTo(3, 1000, false)
        }
    }

</script>

<style scoped="">
.swiper_test{width:100%;background-color:#f9f3d0;}
.swiper-container{width:100%;height:100%}
.swiper-slide{text-align:center;font-size:18px;background-color:#4d7ce0;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}
.swiper-slide div{height:450px;}
.swiper-slide div img{height:100%;}

.mobile .swiper-slide div{height:auto;}
.mobile .swiper-slide div img{width:100%;}

</style>