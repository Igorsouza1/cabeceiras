<template>
  <div class="navCategoria">
    <ul>
      <li>
        <a href="">
          <img src="../assets/images/cabeIcon.svg" alt="Cabeceiras Icon">
          <p>Cabeceiras</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="../assets/images/rioIcon.svg" alt="Rio da Prata Icon">
          <p>Rio da Prata</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>


ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2.1875rem; /* Convertido de 35px para rem */
  height: 100%;
}

ul li {
  display: flex;
  flex-direction: column;
  text-align: center;
}

ul li img {
  width: 2.5rem; /* Convertido de 50px para rem */
  border-radius: 5px;
}

ul li a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 0.4rem;
  transition: 0.4s;
}

ul li a p {
  font-size: 1rem;
}

ul li a:hover {
  transform: scale(1.2);
}
</style>
