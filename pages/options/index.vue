<template lang="pug">
  v-card(
    class="px-0"
    fluid
  )
    v-card-text
      v-switch(
        v-model="whiteTheme"
        :label="'Светлая тема'"
      )
    
</template>

<script>
export default {
  data: () => ({
    whiteTheme: false,
  }),

  watch: {
    whiteTheme: function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;  
    }
  },
}
</script>

<style lang="sass">
</style>
