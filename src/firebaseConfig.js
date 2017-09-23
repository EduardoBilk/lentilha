import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyALMuMcnnD78JAPCQdP6U5DvOmRoEuKC28',
  authDomain: 'lentilha-1dd51.firebaseapp.com',
  databaseURL: 'https://lentilha-1dd51.firebaseio.com',
  projectId: 'lentilha-1dd51',
  storageBucket: '',
  messagingSenderId: '426465621583'
};
firebase.initializeApp(config);

export default firebase;
export const db = firebase.database();
