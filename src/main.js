import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy4oWsvxkaidyQlT9y4kusNmP9g2ZviWE",
  authDomain: "crudfirestore-c5b1c.firebaseapp.com",
  projectId: "crudfirestore-c5b1c",
  storageBucket: "crudfirestore-c5b1c.appspot.com",
  messagingSenderId: "429250865532",
  appId: "1:429250865532:web:10ae5f01b818d573565cf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
