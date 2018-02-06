import Vue from 'vue'
import Vuex from 'vuex'
import Index from './index/index.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  modules: {
    Index
  }
})

export default store
