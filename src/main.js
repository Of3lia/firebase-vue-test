import Vue from 'vue'
import App from './App.vue'
import firebaseConfig from '../firebaseConfig.json'
console.log(firebaseConfig)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
getDatabase(fbApp)
getAnalytics(fbApp)

wroteUserData(123, 'babaaba', 'myemal@maill', 'https:myimageurl')

function wroteUserData(userId, name, email, imagerUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imagerUrl
  })
}