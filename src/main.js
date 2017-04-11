// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import * as reduxActionTypes from './actionTypes'
import { startAsync } from './actionCreators'

import store from './vuexStore'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

store.dispatch(startAsync(reduxActionTypes.RETRIEVE_RESOURCES))
