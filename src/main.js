import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createAuth0 } from '@auth0/auth0-vue';
import store from './store'

const app = createApp(App);

app.use(
  createAuth0({
    domain: "dev-52b4qihk.us.auth0.com",
    clientId: "wiMRD9yaRKOS9EaGsZc508nD4h3fIMhE",
    authorizationParams: {
      redirect_uri: window.location.origin + '/map'
    }
  })
);

app.use(store)
app.use(router)

app.mount('#app');
