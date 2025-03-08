// import './assets/main.css';
import './assets/css/my.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'animate.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
