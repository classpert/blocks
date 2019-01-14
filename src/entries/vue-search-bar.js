import Vue from 'vue/dist/vue.js'
import Mounter from '../config/dom-listener'

// Components
import SearchBar from '../vue/SearchBar.vue'
Vue.component('search-bar', SearchBar)

Mounter()
