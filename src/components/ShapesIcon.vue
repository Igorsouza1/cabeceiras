<template>
    <div class="lateralBar">
      <div class="iconBar" @click="toggleSidebar">
        <img src="../assets/images/shapesIcon.png" alt="">
      </div>
      <!-- <div class="iconBar" @click="toggleSidebar">
        <img src="../assets/images/shapesIcon.png" alt="">
      </div>
      <div class="iconBar" @click="toggleSidebar">
        <img src="../assets/images/shapesIcon.png" alt="">
      </div> -->
      <div v-if="showSidebar" class="sidebar">
        <!-- Conteúdo da sidebar aqui -->
        <h3>Shapes</h3>
        <div class="checkbox-item">
                <input type="checkbox" id="LimiteMunicipio" name="LimiteMunicipio" onchange="toggleGeoJSON('LimiteMunicipio', './assets/Bodoquena_MS.geojson')" >
                <label for="LimiteMunicipio">Limite do Município</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="Pontos" name="Pontos" onchange="toggleGeoJSON('Pontos', './assets/Pontos_Bodoquena.geojson')" >
                <label for="Pontos">Pontos</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="ParnaSerraDaBodoquena" name="ParnaSerraDaBodoquena" onchange="toggleGeoJSON('ParnaSerraDaBodoquena', './assets/parna_serra_da_bodoquena.geojson')">
                <label for="ParnaSerraDaBodoquena">Unidades de Conservação</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="Assentamento" name="Assentamento" onchange="toggleGeoJSON('Assentamento', './assets/Assentamento_Bodoquena.geojson')">
                <label for="Assentamento">Assentamentos</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="Solo" name="Solo"  onchange="toggleGeoJSON('Solo', './assets/Solo_Bodoquena.geojson')">
                <label for="Solo">Solo</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="Geomorfologia" name="Geomorfologia" onchange="toggleGeoJSON('Geomorfologia', './assets/Geomorfologia_Bodoquena.geojson')">
                <label for="Geomorfologia">Geomorfologia</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="Rios" name="Rios" onchange="toggleGeoJSON('Rios', './assets/Rios_Bodoquena.geojson')">
                <label for="Rios">Hidrografia</label>
            </div>
            <div class="checkbox-item">
                <input type="checkbox" id="PropriedadesBacia" name="PropriedadesBacia" onchange="toggleGeoJSON('PropriedadesBacia', './assets/Propriedades_Bacia_Betione.geojson')">
                <label for="PropriedadesBacia">Propriedades Bacia Betione</label>
            </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ShapesIcon",
    data() {
      return {
        showSidebar: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar;
      },
      closeSidebar() {
        this.showSidebar = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .lateralBar {
    position: relative; /* Alterado para relative para posicionar o botão de fechar corretamente */
    max-width: 5%;
    min-width: 90px;
    padding: 10px;
    left: 0;
    top: 0;
    text-align: center;
    height: 100%;
    background-color: white;
    z-index: 1002;
    border-right: 1px solid #000000;
    border-top-right-radius: 5px;
  }
  
  .iconBar {
    padding: 10px;
    background-color: #000000;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 25px;
  }
  
  .iconBar img {
    width: 50px;
  }
  
  /* Estilos da sidebar */
  .sidebar {
    position: absolute;
    top: 0;
    left: calc(5% + 85px); /* Alterado para posicionar a sidebar corretamente */
    height: 100%;
    width: 200px;
    background: white;
    z-index: 1002;
  }

  .checkbox-item{
    padding: 5px;
    margin-left: 10px;
    font-size: 0.9rem;
    text-align: left;
  }

  .checkbox-item input{
    margin-right: 5px;
  }
  </style>
  