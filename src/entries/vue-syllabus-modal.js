import Vue from 'vue/dist/vue.js'
import Mounter from '../config/dom-listener'

// Components
import SyllabusModal from '../vue/SyllabusModal.vue'
Vue.component('syllabus-modal', SyllabusModal)

Mounter()
