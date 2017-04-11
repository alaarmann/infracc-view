import Vue from 'vue'
import Vuex from 'vuex'

import vdxPluginCreator from 'vuedeux'
import reduxStore from './reduxStore'
import * as reduxActionTypes from './actionTypes'

const vdx = vdxPluginCreator(reduxStore, reduxActionTypes)
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    resources: [
      {key: 'key1'},
      {key: 'key2'}
    ]
  },
  plugins: [vdx]
})

export default store
