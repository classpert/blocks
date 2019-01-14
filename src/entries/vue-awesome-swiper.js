import Vue from 'vue/dist/vue.js'
import Mounter from '../config/dom-listener'

// Vendor
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, { 
  autoHeight: true,
  slidesPerView: 1.25,
  freeMode: true,
  freeModeMomentumRatio: 0.5,
  freeModeMomentumVelocityRatio: 0.75,
  spaceBetween: 20
})

Mounter()
