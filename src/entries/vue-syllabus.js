import Vue from 'vue/dist/vue.js'
import Mounter from '../config/dom-listener'

// Components
import Syllabus from '../vue/Syllabus.vue'
Vue.component('syllabus', Syllabus)

Mounter()
