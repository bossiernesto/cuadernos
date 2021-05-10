import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/scss/app.scss';
import "vue-code-highlight/themes/prism.css";

import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";

Vue.component('code-highlight', CodeHighlight)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
