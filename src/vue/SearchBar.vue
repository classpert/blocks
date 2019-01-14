<template>
  <div :id='id' :class='containerClass' >

    <form :class='formClass'
      @keyup.esc='cleanSuggestions' 
      @focusout='hideSuggestions' 
      @keyup.down='NavDown'
      @keyup.up='navUp'
      @click='expanded = true'
      :action='action'
      method='get'>

      <input v-for='(value, key) in hiddenInputs' type='hidden' :name='key' :value='value'>
      <input ref='input'
            type='text'
            :style='inputStyle'
            :class='inputClass'
            :placeholder='placeholder'
            @blur='hideSuggestions'
            @change='getSuggestions'
            @keypress='getSuggestions'
            v-model='params'
            name='q'><span ref='btn' style='display:inline-block'><slot ref='btn' name='search-btn'></slot></span>
      <ul :style='inputStyle' v-show='displaySuggestions' class='c-search__suggestions'>
        <li @keyup.enter='params = i.text' @mouseover='i.selected = true' @mouseout='i.selected = false'
        :class='i.selected ? "selected": ""' v-for='i in suggestions'>
          <slot></slot>
        </li>
      </ul>
      <a @click='hide' class='c-search__close-icon'>
        <slot name='close-icon'></slot>
      </a>
    </form>
  </div>
</template>

<script>
export default {
  props: {

    id: {
      type: String,
      default: function () {
        return ('search-' + parseInt(Math.random() * 10000000).toString());
      }
    },

    action : {
      type: String,
      default: '/search'
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

    containerClass: {
      type: String,
      default: function () {
        return this.containerName;
      }
    },

    containerName: {
      type: String,
      default: 'c-search'
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

    formClass () {
      return `${this.containerName}__form`
    },

    inputClass () {
      return `${this.containerName}__input`
    }

  },

  mounted () {
    this.inputStyle = { width: `calc(100% - ${this.$refs.btn.getBoundingClientRect().width}px)` }
  },

  methods: {

    // Using dom manipulation as this is being 
    // invoke by outside JS
    hide: function () {
      document.getElementById(this.id).classList.remove('c-search--visible')
    },

    hideSuggestions: function () {
      /*var vm = this

      setTimeout(function(){
        vm.displaySuggestions = false
        if (vm.params === '') {
          vm.expanded = false
        }
      }, 1500)*/

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
      // filter which is selected
      // set params = selected text
      // 
    },

    getSuggestions: function () {
      /*var vm = this
      this.searching = true
      if (this.params !== '') {
        this.displaySuggestions = true

        // get suggestions
        this.suggestions = [
          { content: "", selected: false },
          { content: 'Learn Ruby', selected: false },
          { content: 'Learn Whatever', selected: false }
        ]
      } else {
        this.suggestions = []
      }
      this.searching = false*/
    },

    cleanSuggestions: function () {
    /*  this.selectedIndex = 0
      this.suggestions = []*/
    }

  }
}
</script>

<style lang='scss'>

.c-search {

  position: relative;

  @media(max-width: 640px) {

    &--visible {
      display: block !important;
    }

    *[role=header-nav] & {
      position:fixed;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      padding: 1em 0.75em;
      z-index: 999;
      box-sizing: border-box;
    }
  }

  &__form {
    position:relative;
    margin-bottom: 0;
    text-align:left;
    min-width: 185px;
    width: 100%;
  }

  &__close-icon {

    display: none;
    cursor: pointer;

    @media(max-width: 540px) {
      *[role=header-nav] & {
        display: block !important;
        position: absolute;
        top: 0;
        bottom: 0;
        height: 48px;
        margin: auto;
        right: 0px;
        z-index: 999;
      }
    }

  }

  &__input {

    font-family: 'Proxima Nova', georgia, sans-serif;
    padding: 0.7em 1em;
    vertical-align: top;
    font-size: 0.875rem;
    line-height: 1em;
    border-style: solid;
    border-width: 1px;
    border-color: #eee;

    @media(max-width: 540px) {
      *[role=header-nav] & {
        padding: 1em;
      }
    }

    .c-search--large & {
      font-size: 1rem;
    }

    /*width: 80%;*/
    /*border-style: solid;
    border-width: 1px;
    border-color: #eee;*/

  }

  &__suggestions {

    list-style: none;
    position:absolute;
    z-index:9;
    font-size: 1em;

    .c-search--large & {
      font-size: 1em;
    }

    margin-top:0px;
    border-top: 0px;
    padding-left: 0px;
    border-bottom: 1px;
    border-left: 1px;
    border-right: 1px;
    border-color: #eee;
    border-style: solid;
    width: 100%;
    background-color:#FFF;
    box-sizing: border-box;

    > li {
      font-size: 0.875em;
      line-height: 1em;
      border-bottom: 1px solid #eee;
      padding: 1em;
    }
  }

}

</style>
