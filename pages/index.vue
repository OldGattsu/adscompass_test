<template lang="pug">
  section
    v-card(
      class="mx-auto my-6"
      max-width="500"
    )
      v-card-text
        p Необходимо сделать:
        ol.mb-6
          li сделать работоспособной кнопку меню сверху слева (чтобы левое меню скрывалjсь и раскрывалось по клику);
          li в разделе Posts в форме редактирования вместо поля User сделать отдельный компонент для выбора пользователя с поиском по имени и id;
          li добавить новый раздел с настройками проекта, где будет, пока, одно поле - возможность выбирать светлую или тёмную тему;
          li указать на ошибки в проекте;

        .d-flex
          v-btn(
            class="mx-2"
            link
            href="https://nuxtjs.org/"
            target="_blank"
          ) NuxtJS
          v-btn(
            class="mx-2"
            link
            href="https://vuetifyjs.com/"
            target="_blank"
          ) VuetifyJS
          v-btn(
            class="mx-2"
            link
            href="https://pugjs.org/"
            target="_blank"
          ) PugJS

</template>

<script>
export default {
}
</script>

<style lang="sass">
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center

.title
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.links
  padding-top: 15px

</style>

