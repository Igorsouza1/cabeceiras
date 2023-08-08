<template>
    <div>
      <div class="mapContainer">
        <ShapesIcon class="map-icon" 
                    @itemChecked="handleGeoJSONVisibility"
                    @itemUnchecked="handleGeoJSONVisibility"/>
        <div id="map"></div>
      </div>
    </div>
</template>
  
<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ShapesIcon from './ShapesIcon.vue';
import LimiteDoMunicipioData from '../assets/geoJson/Bodoquena_MS.json';
import PontosData from '../assets/geoJson/Pontos_Bodoquena.json'; 
import UnidadesData from '../assets/geoJson/parna_serra_da_bodoquena.json'; 
import AssentamentoData from '../assets/geoJson/Assentamento_Bodoquena.json'; 
import SoloData from '../assets/geoJson/Solo_Bodoquena.json'; 
import GeomorfologiaData from '../assets/geoJson/Geomorfologia_Bodoquena.json';
import HidrografiaData from '../assets/geoJson/Rios_Bodoquena.json';
import PropriedadesBaciaData from '../assets/geoJson/Propriedades_Bacia_Betione.json';

export default {
  name: 'MapComponent',
  components: {
    ShapesIcon
  },
  data() {
    return {
      map: null,
      geojsonLayers: {},
      colors: {
          LimiteDoMunicipio: 'black',
          Pontos: 'green',
          UnidadesDeConservacao: 'orange',
          Assentamentos: 'red',
          Solo: 'brown',
          Geomorfologia: 'purple',
          Hidrografia: 'blue',
          PropriedadesBaciaBetione: 'yellow',
          // Adicione mais cores conforme necessário
      },
    };
  },
  methods: {
    // Função para lidar com a visibilidade do GeoJSON
    handleGeoJSONVisibility(itemName, event) {
      switch (itemName) {
        case 'LimiteDoMunicipio':
          this.toggleGeojsonLayer(itemName, LimiteDoMunicipioData, event);
          break;
        case 'Pontos':
          this.toggleGeojsonLayer(itemName, PontosData, event);
          break;
        case 'UnidadesDeConservacao':
          this.toggleGeojsonLayer(itemName, UnidadesData, event);
          break;  
        case 'Assentamentos':
          this.toggleGeojsonLayer(itemName, AssentamentoData, event);
          break; 
        case 'Solo':
          this.toggleGeojsonLayer(itemName, SoloData, event);
          break;
        case 'Geomorfologia':
          this.toggleGeojsonLayer(itemName, GeomorfologiaData, event);
          break;
        case 'Hidrografia':
          this.toggleGeojsonLayer(itemName, HidrografiaData, event);
          break;
        case 'PropriedadesBaciaBetione':
          this.toggleGeojsonLayer(itemName, PropriedadesBaciaData, event);
          break;
        // Adicione mais cases conforme necessário
      }
    },
    // Função para alternar a camada GeoJSON
    toggleGeojsonLayer(itemName, data, event) {
        if (event.target.checked) {
            if (!this.geojsonLayers[itemName]) {
            const color = this.colors[itemName] || 'blue';
            this.geojsonLayers[itemName] = L.geoJSON(data, {
                style: {
                fillColor: color,
                fillOpacity: 0.6,
                color: itemName === 'Hidrografia' ? 'blue' : 'black', // Se o nome do item for 'Hidrografia', a cor da borda será azul, caso contrário será preta
                weight: itemName === 'Hidrografia' ? 3 : 1 // Aumente o peso para a hidrografia
                },
                onEachFeature: this.onEachFeature,
                pointToLayer: itemName === 'Pontos' ? this.pointToLayer : null
            }).addTo(this.map);

            // Se a camada for de hidrografia, adicione uma camada invisível mais larga para capturar eventos de clique
            if (itemName === 'Hidrografia') {
                L.geoJSON(data, {
                style: {
                    color: 'transparent', // A cor transparente torna a linha invisível
                    weight: 10 // Aumente o peso para tornar a linha mais fácil de clicar
                },
                onEachFeature: this.onEachFeature
                }).addTo(this.map);
            }
            }
        } else {
            if (this.geojsonLayers[itemName]) {
            this.map.removeLayer(this.geojsonLayers[itemName]);
            this.geojsonLayers[itemName] = null;
            }
        }
        },
    // Função para lidar com cada feature
    onEachFeature(feature, layer) {
      layer.on('click', function() {
        // Exibir informações quando o ponto for clicado
        var properties = feature.properties || properties;
        if (properties !== undefined) {
          var info = properties.NOME_AREA_ + '<br>';
          layer.bindPopup(info).openPopup();
        } else {
          console.log("Propriedades não definidas.");
        }
      });
      layer.on('popupclose', function() {
        layer.unbindPopup();
      });
    },
    // Função para lidar com pontos
    pointToLayer(feature, latlng) {
      const icon = L.icon({
        iconUrl: require('../assets/images/point.png'), // Substitua pelo caminho para o seu ícone
        iconSize: [35, 35], // Substitua pelo tamanho do seu ícone
      });
      return L.marker(latlng, { icon: icon });
    }
  },
  mounted() {
    this.map = L.map('map', {
      zoomControl: false,
    }).setView([-20.519, -56.7217], 10);

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
  #map {
    position: absolute;
    width: 100%;
    height: 90vh;
    z-index: 999;
    overflow-y: hidden;
  }
</style>
