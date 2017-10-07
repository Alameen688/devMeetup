import Vue from 'vue'
import Vuex from 'vuex'

import { meetupModule } from './meetup'
import { userModule } from './user'
import { sharedModule } from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    meetupModule,
    userModule,
    sharedModule
  }
})
