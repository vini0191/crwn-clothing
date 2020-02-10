import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC_eUXlgVshuChMINeIeRCk_aSdYlK9Iy4",
  authDomain: "crwn-clothing-4ca63.firebaseapp.com",
  databaseURL: "https://crwn-clothing-4ca63.firebaseio.com",
  projectId: "crwn-clothing-4ca63",
  storageBucket: "crwn-clothing-4ca63.appspot.com",
  messagingSenderId: "460825595553",
  appId: "1:460825595553:web:8a218916b0761dd0e16ae0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
