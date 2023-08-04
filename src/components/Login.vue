<template>
  <div>
      <div class="mapContainer">
        <div id="map"></div>
      </div>

      <div class="loginAuth">

        <img id="loginIcon" src="../assets/images/loginImg.svg" alt="">
        <p>Por favor<br>Faça login para continuar</p>
        <button @click="login" v-if="!isAuthenticated">Login</button>
      </div>  
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useStore } from 'vuex';

export default {
  name: 'LoginComponent',
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
      maxZoom: 10,  
    }).addTo(map);
  },

  setup() {
    const { isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
    const store = useStore();

    const login = async () => {
      try {
        await loginWithRedirect();
        store.commit('setAuthenticated', true);
      } catch (error) {
        console.error('Failed to login:', error);
      }
    };

    return { login, logout, isAuthenticated: ref(isAuthenticated.value), isLoading };
  },
};
</script>

  
  <style scoped>
    .loginAuth {
    position: absolute;
    z-index: 999;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 30%;
    height: 55%;
    border-radius: 8px;
    }

    @media (max-width: 1104px) {
      .loginAuth {
        width: 50%; /* (1200px ÷ 16px = 75rem) */
        height: 65%; /* (1000px ÷ 16px = 62.5rem) */
    }
  }

  
  @media (max-width: 750px) {
      .loginAuth {
        width: 80%; /* (1200px ÷ 16px = 75rem) */
        height: 65%; /* (1000px ÷ 16px = 62.5rem) */
    }
  }

  @media (max-width: 500px) {
      #loginIcon {
        width: 70%; 
    }
  }

  
  .loginAuth p{
    font-size: 20px;
    margin: 25px;
  }

  #loginIcon {
      width: 230px;
  }

  
  .loginAuth .select {
    width: 200px;
    height: 40px;
    margin-bottom: 20px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    font-size: 16px;
  }
  
  .loginAuth button {
    width: 200px;
    padding: 15px;
    margin-bottom: 20px;
    background-color: #3da136;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
  }

  #map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(5px); /* Ajuste o valor do desfoque conforme necessário */
  pointer-events: none; /* Desativa todas as interações com o mapa */
  z-index: -1; /* Coloca o mapa atrás do conteúdo */
}

  </style>
  