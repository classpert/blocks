import Vue from 'vue/dist/vue.js'

const Mounter = () => {
  document.addEventListener('DOMContentLoaded', () => {
    var nodes = document.querySelectorAll('[data-vue-cpt]')

    for(var i = 0; i < nodes.length; ++i) {
      new Vue({el: nodes[i], template: document.getElementById(nodes[i].getAttribute('data-vue-cpt')).innerHTML})
    }

  });
}

export default Mounter
