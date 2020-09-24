<template>
    <div class="swiper_test">
        <div class="swiper_test">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    import 'swiper/swiper-bundle.css'
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOptions: {
                    slidesPerView: 5,
                    loop: true,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: true
                    },
                    direction: 'vertical',
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

<style>
.swiper_test{height:200px;}

.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}


</style>