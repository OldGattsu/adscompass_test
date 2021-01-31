<template lang="pug">
  v-card
    v-card-text
      v-data-table(
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      )
        template(v-slot:item.username="{ item }")
          n-link(
            class="white--text"
            :to="`/users/${item.id}`"
          ) {{ item.username }}

</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    return { items }
  },

  data: () => ({
    headers: [
      { text: 'ID', value: 'id', width: 100 },
      { text: 'Username', value: 'username' },
      { text: 'Email', value: 'email' },
    ],
    items: [],
  }),

}
</script>

<style lang="sass">
</style>
