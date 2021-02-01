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
}
</script>

<style lang="sass">
</style>
