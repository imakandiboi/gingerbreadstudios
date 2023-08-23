import { createApp } from 'vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App.vue'
import router from './router'; // This is the router configuration
createApp(App).use(router).mount('#app')
