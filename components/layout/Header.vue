<template lang="pug">
  v-app-bar(
    app
    clipped-left
  )
    v-app-bar-nav-icon(
      @click="menuToggle"
    )
    v-toolbar-title
      n-link(
        class="link--text"
        to="/"
      ) Test tasks
    v-spacer

</template>

<script>
export default {
  methods: {
    menuToggle() {
      this.$store.dispatch('updateSidebarStatus');
    },
  }
} 
</script>

<style lang="sass">

</style>
