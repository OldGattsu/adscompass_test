<template lang="pug">
  v-app#inspire
    Header
    Nav
    v-main
      nuxt
    Footer
</template>

<script>
import Header from '~/components/layout/Header'
import Nav from '~/components/layout/Nav'
import Footer from '~/components/layout/Footer'

export default {
  components: {
    Header,
    Nav,
    Footer,
  },

  data: () => ({
    drawerLeft: true,
  }),

}
</script>

<style lang="sass">
</style>
