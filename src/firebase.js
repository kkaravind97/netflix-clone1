import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDW1pPEhPvoI9NpOX9zw08CatHHT7EnTTQ",
    authDomain: "netflix-clone1-8badc.firebaseapp.com",
    projectId: "netflix-clone1-8badc",
    storageBucket: "netflix-clone1-8badc.appspot.com",
    messagingSenderId: "731488085681",
    appId: "1:731488085681:web:53d017723e2496db99a490"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;
  const auth=firebase.auth();

  export {auth};