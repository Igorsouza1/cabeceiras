<template>
  <header class="header" :on-load="teste()">
    <img class="header__image header__image--2" src="../assets/images/cabeceirasloo.png" alt="Image 2">
    <div v-if="$store.state.isAuthenticated && $route.path === '/map'">
      <CategoryNavComponent />
    </div>
  </header>
</template>

<script>
import CategoryNavComponent from './CategoryNav.vue'

export default {
  name: 'HeaderComponent',
  components: {
    CategoryNavComponent,
  },
  methods:{
    teste(){
      console.log(this.$store.state.isAuthenticated)
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px 40px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.header__image {
  width: 240px; /* Adjust as needed */
  height: 50px;
  align-self: center;
}

@media (max-width: 634px) {
  .header__image--1 {
    display: none;
  }
}
</style>
