import Vue from 'vue/dist/vue.js'
import Mounter from './config/dom-listener'

// Vendor
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
const SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

// Components
import SearchBar from './vue/SearchBar.vue'
import LocaleDropdown from './vue/LocaleDropdown.vue'

Vue.component('search-bar', SearchBar)
Vue.component('locale-dropdown', LocaleDropdown)

Vue.use(VueAwesomeSwiper, { 
  preventClicks: false,
  preventClicksPropagation: false,
  autoHeight: true,
  slidesPerView: 1.25,
  freeMode: true,
  freeModeMomentumRatio: 0.5,
  freeModeMomentumVelocityRatio: 0.75,
  spaceBetween: 20
})

Mounter()
