import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertComp from './components/Shared/Alert.vue'
import EditDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('fDate', DateFilter)
Vue.component('my-alert', AlertComp)
Vue.component('my-edt-dialog', EditDialog)
Vue.component('my-edt-date-dialog', EditDateDialog)
Vue.component('my-edt-time-dialog', EditTimeDialog)
Vue.component('my-registration-dialog', RegisterDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyD4xC-0TKA2M-TztV7vt2nc3M_hNQ1GaAU',
        authDomain: 'devmeetup-tut.firebaseapp.com',
        databaseURL: 'https://devmeetup-tut.firebaseio.com',
        projectId: 'devmeetup-tut',
        storageBucket: 'gs://devmeetup-tut.appspot.com',
        messagingSenderId: '679056085917'
      }
    )
    // to check browser localstorage for token if user is already logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
