<template>
  <header class="header" :on-load="teste()">
    <img class="header__image header__image--2" src="../assets/images/cabeceirasloo.svg" alt="Image 2">
    
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent',
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
  flex-wrap: wrap; /* Isso fará com que os itens se movam para a próxima linha se não houver espaço */
  justify-content: space-between;
  position: relative;
  padding: 0.8rem 0.8rem; /* Convertido de px para rem */
  background-color: #006770;
  box-shadow: 0px 0.25rem 0.5rem rgba(0, 0, 0, 0.6);
  z-index: 1000;
}

.header__image {
  width: 12rem; /* Convertido de px para rem */
  height: 2.5rem; /* Convertido de px para rem */
  align-self: center;
}


@media (max-width: 680px) {
  .category-nav {
    display: none;
  }
}

@media (max-width: 634px) {
  .header__image--1 {
    display: none;
  }
}
</style>
