<template>
  <div class="container">
    <!-- Renderizar cada círculo com base nos dados -->
    <div 
      v-for="circle in circles" 
      :key="circle.id" 
      class="iconCircle" 
      @click="toggleSidebar(circle)"
      @mousedown.prevent.stop
    >
      <img :src="circle.icon" :alt="circle.name">
    </div>

    <!-- Sidebar com conteúdo dinâmico -->
    <div v-if="showSidebar" class="sidebar" @mousedown.prevent.stop>
      <h3>{{ currentCircleContent.title }}</h3>
      <div v-for="item in currentCircleContent.items" :key="item.id" class="checkShapes">
        <!-- Renderizar como checkbox se não tiver URL -->
        <template v-if="!item.url">
          <input type="checkbox" :name="item.name" :id="item.id" v-model="item.checked" @change="handleCheckboxChange(item.name, $event)">
          <label :for="item.id">{{ item.label }}</label>
        </template>
        <!-- Renderizar como link se tiver URL -->
        <template v-else>
          <a :href="item.url" target="_blank" class="sidebarLink">{{ item.label }}</a>
        </template>
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
      map: null,
      currentCircleContent: {},
      circles: [
        {
          id: 1,
          icon: require('../assets/images/shape.png'),
          name: 'Shapes',
          content: {
            title: 'Shapes',
            items: [
              { id: 'LimiteDoMunicipio', name: 'LimiteDoMunicipio', label: 'Limite do Municipio', checked:false },
              { id: 'Pontos', name: 'Pontos', label: 'Pontos' },
              { id: 'UnidadesDeConservacao', name: 'UnidadesDeConservacao', label: 'Unidades de Conservação' },
              { id: 'Assentamentos', name: 'Assentamentos', label: 'Assentamentos' },
              { id: 'Solo', name: 'Solo', label: 'Solo' },
              { id: 'Geomorfologia', name: 'Geomorfologia', label: 'Geomorfologia' },
              { id: 'Hidrografia', name: 'Hidrografia', label: 'Hidrografia' },
              { id: 'PropriedadesBaciaBetione', name: 'PropriedadesBaciaBetione', label: 'Propriedades Bacia Betione' },
              // ... outros itens
            ]
          }
        },
        {
          id: 2,
          icon: require('../assets/images/linkIcon.png'),
          name: 'Links',
          content: {
            title: 'Links',
            items: [
              { id: 'link1', label: 'Coleção MapBiomas', url: 'https://plataforma.brasil.mapbiomas.org/cobertura?activeBaseMap=9&layersOpacity=100&activeModule=coverage&activeModuleContent=coverage%3Acoverage_main&activeYear=2021&mapPosition=-20.537076%2C-56.699959%2C10&timelineLimitsRange=1985%2C2021&baseParams[territoryType]=4&baseParams[territory]=5154&baseParams[territories]=5154%3BBodoquena%20%28MS%29%3B4%3BMunic%C3%ADpio%3B-20.886388937999953%3B-57.01426610899995%3B-20.18696244800001%3B-56.38565226299994&baseParams[activeClassTreeOptionValue]=default&baseParams[activeClassTreeNodeIds]=1%2C7%2C8%2C9%2C10%2C2%2C11%2C12%2C13%2C14%2C15%2C16%2C3%2C17%2C18%2C27%2C37%2C38%2C39%2C40%2C41%2C28%2C42%2C43%2C44%2C19%2C20%2C4%2C21%2C22%2C23%2C24%2C5%2C25%2C26%2C6&baseParams[activeSubmodule]=coverage_main' },
              { id: 'link1', label: 'Google Earth Engine', url: 'https://earthengine.google.com/' },
              { id: 'link1', label: 'TOPODATA', url: 'http://www.webmapit.com.br/inpe/topodata/' },
              { id: 'link1', label: 'Banco de Dados INPE', url: 'http://bancodedados.cptec.inpe.br/' },
              { id: 'link1', label: 'GOES', url: 'https://www.star.nesdis.noaa.gov/GOES/sector.php?sat=G16&sector=ssa' },
              { id: 'link1', label: 'Massa de Ar', url: 'https://www.star.nesdis.noaa.gov/GOES/sector_band.php?sat=G16&sector=ssa&band=AirMass&length=24' },
              { id: 'link1', label: 'Estações Próximas de Bodoquena', url: 'https://www.wunderground.com/wundermap?renderer=2&Units=metric&zoom=8&lat=-20.519&lon=-56.7217&wxstn=1&wxstnmode=tw&aq=0&aqvalue=NaN&radar=0&radarType=NaN&radaropa=0.7&satellite=0&satelliteopa=0.8&storm-cells=0&severe=0&severeopa=0.9&sst=0&sstopa=0.8&sstanom=0&sstanomopa=0.8&fronts=0&hur=0&models=0&modelsmodel=ecmwf&modelsopa=0.8&modelstype=SURPRE&lightning=0&fire=0&fireopa=0.9&firePerimeter=0&firePerimeterOpacity=0.9&smoke=0&smokeOpacity=0.9&rep=0&surge=0&tor=0&windstr=0&windstrDensity=undefined&windstreamSpeed=undefined&windstreamSpeedFilter=undefined&windstreamPalette=undefined&hurrArch=0&hurrArchBasin=undefined&hurrArchYear=undefined&hurrArchStorm=undefined' },
              
            ]
          }
        },
        // ... outros círculos
      ]
    };
  },
  methods: {
    toggleSidebar(circle) {
      this.showSidebar = !this.showSidebar;
      this.currentCircleContent = circle.content;
    },
    handleCheckboxChange(itemName, event) {
      if (event.target.checked) {
        this.$emit('itemChecked', itemName, event);
      } else {
        this.$emit('itemUnchecked', itemName, event);
      }
    }
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 25%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  gap: 20px;
}

.iconCircle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #006770;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.iconCircle:hover {
  background-color: #003035;
}

.iconCircle img{
  width: 40px;
}

/* Estilos da sidebar */
.sidebar {
  position: absolute;
  top: 0;
  left: 65px; /* Ajuste conforme o tamanho do círculo */
  border-radius: 10px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  width: 250px;
  background: #ffffff;
  transition: 0.3s;
  padding: 15px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}

.checkShapes{
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  text-align: center;
}

.checkShapes input{
  margin-right: 5px;
}

.sidebarLink {
  text-decoration: none;
  color: #006770;
  transition: 0.3s;
}

.sidebarLink:hover {
  text-decoration: underline;
}

</style>
