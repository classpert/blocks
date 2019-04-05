<template>
  <div :class='rootClass'>
    <div :class='callerClass'>
      <a href='#' @click.prevent="openModal">
        <slot name="caller">Show Modal</slot>
      </a>
    </div>
    <modal ref="modal" :adaptive='true' :scrollable='false' :width="width" :max-width='maxWidth' :height='height' :name="name" @before-open="beforeOpen">
      <div :class='wrapperClass'>
        <div :class='dismisserClass' @click="closeModal">
          <slot name="dismisser">❌</slot>
        </div>
        <div :class='headerClass'>
          <slot name="header" :course="course"></slot>
        </div>
        <div :class='bodyClass'>
          <slot name="body" :course="course"></slot>
        </div>
        <div :class='footerClass'>
          <slot name="footer" :course="course"></slot>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>

export default {
  props: {
    width: {
      type: String,
      default: '90%'
    },
    maxWidth: {
      type: Number,
      default: 600
    },
    height: {
      type: String,
      default: 'auto'
    },
    name: {
      type: String,
      default: 'syllabus-modal'
    },
    beforeOpen: {
      type: Function,
      default: () => {}
    },
    cssClasses: {
      type: Object,
      default: {}
    },
    course: {
      type: Object,
      default: {},
      required: true
    }
  },

  computed: {
    wrapperClass: function(){
      return this.cssClasses['wrapperClass'];
    },
    rootClass: function(){
      return this.cssClasses['rootClass'];
    },
    headerClass: function(){
      return this.cssClasses['headerClass'];
    },
    bodyClass: function(){
      return this.cssClasses['bodyClass'];
    },
    footerClass: function(){
      return this.cssClasses['footerClass'];
    },
    callerClass: function(){
      return this.cssClasses['callerClass'];
    },
    dismisserClass: function(){
      return this.cssClasses['dismisserClass'];
    }
  },

  methods: {
    openModal () {
      this.$refs.modal.$modal.show(this.name);
    },
    closeModal () {
      this.$refs.modal.$modal.hide(this.name);
    }
  }
}
</script>
