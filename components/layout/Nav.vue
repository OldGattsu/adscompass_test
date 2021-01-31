<template lang="pug"> 
  v-navigation-drawer(
    v-model="drawer"
    app
    clipped
    left
  )
    v-list(dense)
      v-list-item(
        to="/users"
        nuxt
      )
        v-list-item-action
          v-icon mdi-account-multiple
        v-list-item-content
          v-list-item-title Users

      v-list-item(
        to="/posts"
        nuxt
      )
        v-list-item-action
          v-icon mdi-account-key
        v-list-item-content
          v-list-item-title Posts

</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),

  methods: {
    menuToggle() {
      this.drawer = !this.drawer;
    },
  }
}
</script>
