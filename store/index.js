import Vue from 'vue'
import Vuex from 'vuex'

import geo from './modules/geo'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions
// })
const store = ()=>new Vuex.Store({
    modules:{
      geo
    },

  })

export default store

