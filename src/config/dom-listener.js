import Vue from 'vue/dist/vue.js'

const Mounter = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let nodes = document.querySelectorAll('[data-vue-cpt]')

    for(let i = 0; i < nodes.length; ++i) {
      let node      = nodes[i]
      let data      = {}
      let cptName   = node.attributes['data-vue-cpt'].value
      let vueConfig = {
        el: node,
        template: document.getElementById(node.getAttribute('data-vue-cpt')).innerHTML
      }

      let props = document.querySelectorAll(`script[for="${cptName}"]`)

      for (let j = 0; j < props.length; j++){
        let propNode   = props[j]
        let propName   = propNode.attributes['name'].value
        data[propName] = JSON.parse(propNode.textContent)
      }

      if (Object.keys(data).length) {
        vueConfig.data = data
      }
      new Vue(vueConfig)
    }

  });
}

export default Mounter
