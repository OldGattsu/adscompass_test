<template lang="pug">
  v-card
    v-card-text
      v-form(@submit.prevent="onSubmit")
        v-autocomplete(
          v-model="user"
          :items="users"
          dense
          label="Name/ID"
          :filter="customFilter"
          item-text="name"
          item-value="id"
          return-object
        )
        v-text-field(
          v-model="post.title"
          label="Title"
        )
        v-textarea(
          v-model="post.body"
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
  components: {
  },

  async asyncData({ $axios, route }) {
    const post = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users/');
    return { post, users };
  },

  data: () => ({
    post: {},
    users: {},
    user: null,
  }),

  created() {
    const userData = this.initName(this.users, this.post.userId); 
    this.user = {
      id: userData.id,
      name: userData.name,
    }
  },

  methods: {
    onSubmit() {
      console.log(this.user);
    },

    customFilter (item, queryText) {
      return (
        (item.id).toString().toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > - 1
        || item.name.indexOf(queryText) > -1 
      )
    },

     initName(users, id) {
      let findedUser;
      users.forEach(user => {
        if (user.id===id) findedUser = user;
      });
      return findedUser;
    },
  },
}
</script>

<style lang="sass">
</style>
