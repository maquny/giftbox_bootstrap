import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import device from "vue-device-detector"
import VueMq from "vue-mq"
import CKEditor from '@ckeditor/ckeditor5-vue';

import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use( getAwesomeSwiper );

Vue.use( CKEditor );
Vue.use(VueMq, {
	breakpoints: {
		mobile: 460,
		table: 900,
		laptop: 1250,
		desktop: Infinity,
	}
})

Vue.use(device)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')


