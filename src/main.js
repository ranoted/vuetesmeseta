import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";
import './index.css'


// import { BootstrapVue } from "bootstrap-vue";

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// Vue.use(BootstrapVue);

createApp(App).use(router).mount("#app");
