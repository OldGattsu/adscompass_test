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
          v-model="data.username"
          label="Username"
        )
        v-text-field(
          v-model="data.name"
          label="Name"
        )
        v-text-field(
          v-model="data.email"
          label="Email"
        )
        v-text-field(
          v-model="data.phone"
          label="Phone"
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
    const data = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
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
