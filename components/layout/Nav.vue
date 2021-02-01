<template lang="pug"> 
  v-navigation-drawer(
    v-model="sidebar"
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
      
      v-list-item(
        to="/options"
        nuxt
      )
        v-list-item-action
          v-icon mdi-tune
        v-list-item-content
          v-list-item-title Settings

</template>

<script>
import { mapGetters } from 'vuex';

  export default {
    computed: mapGetters(["sidebar"]),  
  }
</script>
