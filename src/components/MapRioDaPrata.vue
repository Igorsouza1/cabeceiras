<template>
    <div>
      <div class="mapContainer">
        <ShapesIconRioDaPrata class="map-icon" 
                    @itemChecked="handleGeoJSONVisibility"
                    @itemUnchecked="handleGeoJSONVisibility"/>
        <div id="mapRioDaPrata"></div>
      </div>
    </div>
</template>
  
<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ShapesIconRioDaPrata from './ShapesIconRioDaPrata.vue';

// Importe os shapes (GeoJSON) que você deseja carregar para mapRioDaPrata
import SedesDasFazendasData from '../assets/geoJson/rioDaPrata/Sedes das fazendas.json';
import RioDaPrataData from '../assets/geoJson/rioDaPrata/rio da prata.json';
import ReservaLegalData from '../assets/geoJson/rioDaPrata/Reserva legal.json';
import PropriedadesData from '../assets/geoJson/rioDaPrata/Propriedades.json';
import PassivosAmbientaisData from '../assets/geoJson/rioDaPrata/Passivos ambientais (sem vegetação).json';
import NascentesData from '../assets/geoJson/rioDaPrata/Nascentes.json';
import NascenteRioDaPrataData from '../assets/geoJson/rioDaPrata/Nascente Rio da Prata.json';
import EstradasDeAcessoData from '../assets/geoJson/rioDaPrata/Estradas de acesso.json';
import BonitoEJardimData from '../assets/geoJson/rioDaPrata/Bonito e Jardim.json';
import BanhadoData from '../assets/geoJson/rioDaPrata/Banhado.json';
import App50mData from '../assets/geoJson/rioDaPrata/App 50m.json';
import AcessoNascentesData from '../assets/geoJson/rioDaPrata/Acesso nascentes.json';
import AcessoAsSedesData from '../assets/geoJson/rioDaPrata/Acesso as sedes.json';
// ... continue importando os shapes necessários

export default {
  name: 'mapRioDaPrataComponent',
  components: {
    ShapesIconRioDaPrata
  },
  data() {
    return {
      map: null,
      geojsonLayers: {},
      pointLayers: ['SedesDasFazendas', 'Nascentes', 'NascenteRioDaPrata'],
    };
  },
  methods: {
    // Função para lidar com a visibilidade do GeoJSON
    handleGeoJSONVisibility(itemName, event) {
  switch (itemName) {
    case 'SedesDasFazendas':
      this.toggleGeojsonLayer(itemName, SedesDasFazendasData, event);
      break;
    case 'RioDaPrata':
      this.toggleGeojsonLayer(itemName, RioDaPrataData, event);
      break;
    case 'ReservaLegal':
      this.toggleGeojsonLayer(itemName, ReservaLegalData, event);
      break;
    case 'Propriedades':
      this.toggleGeojsonLayer(itemName, PropriedadesData, event);
      break;
    case 'PassivosAmbientais':
      this.toggleGeojsonLayer(itemName, PassivosAmbientaisData, event);
      break;
    case 'Nascentes':
      this.toggleGeojsonLayer(itemName, NascentesData, event);
      break;
    case 'NascenteRioDaPrata':
      this.toggleGeojsonLayer(itemName, NascenteRioDaPrataData, event);
      break;
    case 'EstradasDeAcesso':
      this.toggleGeojsonLayer(itemName, EstradasDeAcessoData, event);
      break;
    case 'BonitoEJardim':
      this.toggleGeojsonLayer(itemName, BonitoEJardimData, event);
      break;
    case 'Banhado':
      this.toggleGeojsonLayer(itemName, BanhadoData, event);
      break;
    case 'App50m':
      this.toggleGeojsonLayer(itemName, App50mData, event);
      break;
    case 'AcessoNascentes':
      this.toggleGeojsonLayer(itemName, AcessoNascentesData, event);
      break;
    case 'AcessoAsSedes':
      this.toggleGeojsonLayer(itemName, AcessoAsSedesData, event);
      break;
    default:
      console.error("Unknown shape:", itemName);
  }
},
toggleGeojsonLayer(itemName, geojsonData, event) {
  if (event.target.checked) {
    const options = {
      onEachFeature: this.onEachFeature
    };

    if (this.pointLayers.includes(itemName)) {
      options.pointToLayer = this.pointToLayer;
    }

    this.geojsonLayers[itemName] = L.geoJSON(geojsonData, options).addTo(this.map);
  } else {
    if (this.geojsonLayers[itemName]) {
      this.map.removeLayer(this.geojsonLayers[itemName]);
      delete this.geojsonLayers[itemName];
    }

  }
},
pointToLayer(feature, latlng) {
  const icon = L.icon({
    iconUrl: require('../assets/images/point.png'), // Substitua pelo caminho para o seu ícone
    iconSize: [35, 35], // Substitua pelo tamanho do seu ícone
  });
  return L.marker(latlng, { icon: icon });
} 
    // ... (o restante do código é semelhante ao MapComponent, mas adaptado para os novos shapes)
  },
  mounted() {
    this.map = L.map('mapRioDaPrata', {
      zoomControl: false,
    }).setView([ -21.428188, -56.475165], 10);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 17,  
    }).addTo(this.map);

    L.control.zoom({
      position: 'topright'
    }).addTo(this.map);
  },
}
</script>
  
<style scoped>
  #mapRioDaPrata {
    position: absolute;
    width: 100%;
    height: 90vh;
    z-index: 999;
    overflow-y: hidden;
  }
</style>
