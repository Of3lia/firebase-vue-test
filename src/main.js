import Vue from 'vue'
import App from './App.vue'
import firebaseConfig from '../firebaseConfig.json'
console.log(firebaseConfig)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database"
import store from './store'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
getDatabase(fbApp)
getAnalytics(fbApp)
