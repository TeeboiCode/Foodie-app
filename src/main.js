import { createApp } from "vue";
import "./style.css";
import "./assets/scss/custom-bootstrap.scss";
import router from "./router";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

createApp(App).use(router).mount("#app");
