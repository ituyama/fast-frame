import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAhufCR0MI0rzJgBUCwCKzhaEuuQJgV9Do",
authDomain: "fast-frame.firebaseapp.com",
databaseURL: "https://fast-frame.firebaseio.com",
projectId: "fast-frame",
storageBucket: "fast-frame.appspot.com",
messagingSenderId: "20630914601",
appId: "1:20630914601:web:ec2089c24389c0cbfefe38",
measurementId: "G-8WNGR58074"

};

firebase.initializeApp(config);
