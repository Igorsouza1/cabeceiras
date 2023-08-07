<template >
    <div>
        <div class="mapContainer">
            
            <ShapesIcon class="map-icon"/>
            <div id="map">
            </div>
            
        </div>
       
    </div>
</template>
<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ShapesIcon from './ShapesIcon.vue';

export default {
    name: 'MapComponent',
    components: {
        ShapesIcon
    },
    mounted() {
    const map = L.map('map', {
        zoomControl: false,
    }).setView([-20.519, -56.7217], 10);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 17,  
    }).addTo(map);

    L.control.zoom({
            position: 'topright'
        }).addTo(map);
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