<template>
  <form ref='form' @change='submit' method='GET' class='lang-dropdown'>
    <select v-model='locale' name='locale'>
      <option value='en'>EN</option>
      <option value='pt-BR'>PT</option>
    </select>
  </form>
</template>

<script>

  export default {

    props: {
      defLocale: {
        type: String,
        default: 'en'
      }
    },

    data () {
      return {
        locale: this.defLocale
      }
    },

    methods: {
      submit () {
        this.$refs.form.submit()
      }
    }

  }

</script>

<style scoped lang='scss'>
  .lang-dropdown {
    margin-bottom: 0;
  }
</style>
