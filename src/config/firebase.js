import * as Firebase from 'firebase/app'
import 'firebase/firestore'

function initFirebase () {
  Firebase.initializeApp({
    /* your Firebase config */
    apiKey: 'AIzaSyD5Ng5aS4ht-mJb5etoePfgPcZaRh2ihPM',
    authDomain: 'scratchpad-a8062.firebaseapp.com',
    databaseURL: 'https://scratchpad-a8062.firebaseio.com',
    projectId: 'scratchpad-a8062',
    storageBucket: 'scratchpad-a8062.appspot.com',
    messagingSenderId: '730444926930',
    appId: '1:730444926930:web:e89e05335e28395f'
  })
  return new Promise((resolve, reject) => {
    Firebase.firestore().enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === 'failed-precondition') {
          reject(err)
          // Multiple tabs open, persistence can only be
          // enabled in one tab at a a time.
        } else if (err.code === 'unimplemented') {
          reject(err)
          // The current browser does not support all of
          // the features required to enable persistence
        }
      })
  })
}

export {
  Firebase,
  initFirebase
}
