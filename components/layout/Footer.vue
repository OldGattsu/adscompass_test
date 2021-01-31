<template lang="pug">
  v-footer(
    app
    color="dark"
    class="white--text"
  )
    span Copyright
    v-spacer
    span &copy; {{ new Date().getFullYear() }}

</template>