import Vue from "vue";
import ElementUI from "element-ui";
import router from "./router";
import App from "./App.vue";
import API from '@/plugins/api';
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)


import "@/assets/css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/fonts.scss";
import "@/assets/css/main.scss";


Vue.use(ElementUI);
Vue.use(API);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
