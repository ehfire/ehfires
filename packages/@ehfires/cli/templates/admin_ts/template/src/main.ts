import Vue from "vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./routers";
import store from "./stores";
import "@/styles/element-variables.scss";
import { Http } from "@/networks";

Http.init();

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
