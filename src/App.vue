<template>
  <HeaderComponent />
  <router-view />
</template>

<script>
import HeaderComponent from './components/Header.vue'
import router from './router'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  setup() {
    return { router };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>
