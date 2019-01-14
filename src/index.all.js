import Vue from 'vue/dist/vue.js'
require('./config/dom-listener')

// Vendor
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// Components
import SearchBar from './vue/SearchBar.vue'
import LocaleDropdown from './vue/LocaleDropdown.vue'

Vue.component('search-bar', SearchBar)
Vue.component('locale-dropdown', LocaleDropdown)

Vue.use(VueAwesomeSwiper, { 
  autoHeight: true,
  slidesPerView: 1.25,
  freeMode: true,
  freeModeMomentumRatio: 0.5,
  freeModeMomentumVelocityRatio: 0.75,
  spaceBetween: 20
})
