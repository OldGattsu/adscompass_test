<template lang="pug">
  v-card
    v-card-text
      v-data-table(
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      )
        template(v-slot:item.title="{ item }")
          n-link(
            class="white--text"
            :to="`/posts/${item.id}`"
          ) {{ item.title }}

</template>

<script>
export default {
  async asyncData({ $axios }) {
    const items = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return { items }
  },

  data: () => ({
    headers: [
      { text: 'ID', value: 'id', width: 100 },
      { text: 'Title', value: 'title' },
      { text: 'User ID', value: 'userId' },
    ],
    items: [],
  }),

}
</script>

<style lang="sass">
</style>
