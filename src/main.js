import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // ⬅️ Importation du router

const app = createApp(App);
app.use(router);  // ⬅️ Activation du router
app.mount('#app');

