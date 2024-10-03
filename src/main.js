import { createApp } from "vue";
import App from "./App.vue";
// import "../bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router/index";

const app = createApp(App);
app.use(router);
app.mount("#app");
