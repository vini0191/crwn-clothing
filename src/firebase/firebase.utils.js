import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC_eUXlgVshuChMINeIeRCk_aSdYlK9Iy4',
  authDomain: 'crwn-clothing-4ca63.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-4ca63.firebaseio.com',
  projectId: 'crwn-clothing-4ca63',
  storageBucket: 'crwn-clothing-4ca63.appspot.com',
  messagingSenderId: '460825595553',
  appId: '1:460825595553:web:8a218916b0761dd0e16ae0',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
