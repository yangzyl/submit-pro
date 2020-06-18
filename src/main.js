import Vue from "vue";
import ElementUI from "element-ui";
import router from "./router";
import App from "./App.vue";
import API from '@/plugins/api';
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

import "@/filters";

import "@/assets/css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/fonts.scss";
import "@/assets/css/main.scss";
import vueScrollwatch from "vue-scrollwatch"


Vue.use(ElementUI);
Vue.use(API);
Vue.use(vueScrollwatch)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
