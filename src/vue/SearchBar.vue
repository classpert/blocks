<template>
  <div :class='containerClass'>

    <form :class='formClass'
      @keyup.esc='cleanSuggestions' 
      @focusout='hideSuggestions' 
      @keyup.down='NavDown'
      @keyup.up='navUp'
      @click='expanded = true'
      :action='action'
      method='get'>

      <input v-for='(value, key) in hiddenInputs' type='hidden' :name='key' :value='value'>

      <input
        type='text'
        :style='inputStyle'
        :class='inputClass'
        :placeholder='placeholder'
        @blur='hideSuggestions'
        @change='getSuggestions'
        @keypress='getSuggestions'
        v-model='params'
         name='q'>

      <slot ref='icon' name='icon'></slot>
      <template ref='btn'>
        <slot name='search-btn'></slot>
      </template>

      <a @click='hide' class='c-search__close-icon'>
        <slot name='close-icon'></slot>
      </a>

    </form>
  </div>
</template>

<script>
export default {
  props: {

    action : {
      type: String,
      default: '/search'
    },

    cssClasses: {
      type: Object,
      default: () => { return {} }
    },

    hiddenInputs: {
      type: Object,
      default: () => { return {} }
    },

    locale: {
      type: String,
      default () { return 'en' }
    },

    searchBtn: {
      type: Boolean,
      default: true
    },

    placeholder: {
      type: String,
      default: 'Search ...'
    },

    inputWidth: {
      type: String,
      default: '100%'
    },

    limitSuggestions: {
      type: Number,
      default: 5
    }

  },

  data: function () {
    return {
      params: '',
      inputStyle: {},
      expanded: false,
      icon: 'search',
      searching: false,
      displaySuggestions: false,
      selectedIndex: 0,
      suggestions: []
    }
  },

  computed: {

    containerClass () {
      return this.cssClasses['container']
    },

    formClass () {
      return this.cssClasses['form']
    },

    inputClass () {
      return this.cssClasses['input']
    }

  },

  mounted () {
    this.inputStyle = {width: `calc(100% - ${this.$refs.btn.getBoundingClientRect().width}px)` }
  },

  methods: {

    // Using dom manipulation as this is being 
    // invoke by outside JS
    hide: function () {
      document.getElementById(this.id).classList.remove('c-search--visible')
    },

    hideSuggestions: function () {
    },

    navDown: function () {
      var i = this.selectedIndex % this.suggestions.length
      this.suggestions[i].selected = true
      this.selectedIndex += 1
    },

    navUp: function () {
      var i = (this.suggestions.length - 1) - (this.selectedIndex % this.suggestions.length)
      this.suggestions[i].selected = true
      this.selectedIndex += 1
    },

    getSelected: function () {
    },

    getSuggestions: function () {
    },

    cleanSuggestions: function () {
    }

  }
}
</script>
