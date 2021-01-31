<template lang="pug">
  v-card
    v-card-text
      v-form(@submit.prevent="onSubmit")
        v-text-field(
          :value="data.id"
          label="ID"
          readonly
        )
        v-text-field(
          v-model="data.userId"
          label="User"
        )
        v-text-field(
          v-model="data.title"
          label="Title"
        )
        v-textarea(
          v-model="data.body"
          label="Text"
        )
        v-btn(
          color="purple"
          large
          type="submit"
        ) Save

</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    const data = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    return { data }
  },

  data: () => ({
    data: {},
  }),

  methods: {
    onSubmit() {
      console.log(this.data)    
    },
  },
}
</script>

<style lang="sass">
</style>
