<template lang="pug">
  v-app-bar(
    app
    clipped-left
    color="dark"
    dark
  )
    v-app-bar-nav-icon(
      @click = "changeTheme"
      )
    v-toolbar-title
      n-link(
        class="white--text"
        to="/"
      ) Test tasks
    v-spacer

</template>

<script>
export default {
  data: () => ({
    drawerLeft: true,
  }),

  methods: {
    changeTheme() {
      this.$vuetify.theme.light = true
      console.log('this.$vuetify.theme.light')
      console.log(this.$vuetify.theme.dark)
    }
  }
}
</script>

<style lang="sass">

</style>
