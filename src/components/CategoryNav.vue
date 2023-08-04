<template>
    <div class="navCategoria">
      <ul>
        <li>
          <a href="">
            <img src="../assets/images/cabeIcon.png" alt="">
            <p>Cabeceiras</p>
          </a>
        </li>
        <li>
          <a href="">
            <img src="../assets/images/rioIcon.png" alt="">
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
    .navCategoria {
      /* Seus estilos para .navCategoria */
    }
  
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      gap: 35px;
      height: 100%;
      
    }
  
    ul li {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  
    ul li img {
      width: 50px;
    }
  
    ul li a {
      text-decoration: none;
      color: black;
      font-size: 0.7rem;
      transition: 0.4s;
    }
  
    ul li a p {
      font-size: 1rem;
    }
  
    ul li a:hover{
      transform: scale(1.2);
    }
  </style>
  