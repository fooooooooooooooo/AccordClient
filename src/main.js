import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import scrollbar from './plugins/scrollbar'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'font-awesome/css/font-awesome.css';
import 'mdi/css/materialdesignicons.css';
import './assets/css/messages.css'
import './assets/css/ui.css'

Vue.config.productionTip = false

const app = new Vue({
  vuetify,
  router,
  scrollbar,
  render: h => h(App),
});

app.$mount('#app');