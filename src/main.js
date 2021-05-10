import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/assets/scss/app.scss';
import "vue-code-highlight/themes/prism.css";
import '@/plugins/highlightjs-vue.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
