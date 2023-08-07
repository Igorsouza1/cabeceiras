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
  import geojsonData from '../assets/geoJson/Bodoquena_MS.json';
  
  export default {
    name: 'MapComponent',
    components: {
      ShapesIcon
    },
    data() {
      return {
        map: null,
        geojsonLayer: null
      };
    },
    methods: {
      handleGeoJSONVisibility(itemName, event) {
        if (itemName === 'LimiteDoMunicipio') {
          if (event.target.checked) {
            if (!this.geojsonLayer) {
              this.geojsonLayer = L.geoJSON(geojsonData).addTo(this.map);
            }
          } else {
            if (this.geojsonLayer) {
              this.map.removeLayer(this.geojsonLayer);
              this.geojsonLayer = null;
            }
          }
        }
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
    }
  </style>
  