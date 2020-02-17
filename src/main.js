import Vue from "vue";
import App from "./App.vue";
import sorosis from 'packages/index';

Vue.use(sorosis)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
