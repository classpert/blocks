import Vue from 'vue/dist/vue.js'
import Mounter from '../config/dom-listener'

import LocaleDropdown from '../vue/LocaleDropdown.vue'
Vue.component('locale-dropdown', LocaleDropdown)

Mounter()
