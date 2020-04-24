import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// firebase
import * as firebase from 'firebase/app'
import 'firebase/auth'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/scss/bootstrap.scss'

// firebase configuracion
const firebaseconfig = {
  apiKey: "AIzaSyCtUtBZERUO9GiIbauKu-VWj9jRIMz1h-s",
  authDomain: "sports-2020.firebaseapp.com",
  databaseURL: "https://sports-2020.firebaseio.com",
  projectId: "sports-2020",
  storageBucket: "sports-2020.appspot.com",
  messagingSenderId: "620512070452",
  appId: "1:620512070452:web:0cf437998f7492c8b9b361",
  measurementId: "G-BLLPKVN3G1"
}
firebase.initializeApp(firebaseconfig);
firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
