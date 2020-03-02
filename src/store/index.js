import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)

// import from step 1
import {
  Firebase,
  initFirebase
} from './config/firebase.js'
// import from step 3 (below)
import userinfo from './modules/index.js'

// do the magic 🧙🏻‍♂️
const easyFirestore = VuexEasyFirestore(
  [userinfo], {
    logging: true,
    FirebaseDependency: Firebase
  }
)

// include as PLUGIN in your vuex store
// please note that "myModule" should ONLY be passed via the plugin
const storeData = {
  plugins: [easyFirestore]
  // ... your other store data
}

// initialise Vuex
const store = new Vuex.Store(storeData)

// initFirebase
initFirebase()
  .catch(error => {
    console.log(error)
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

export default store

/**
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 *

export default function ( { ssrContext } ) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store

}
*/
