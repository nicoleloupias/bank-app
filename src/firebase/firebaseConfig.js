import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_CONFIG_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_CONFIG_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_CONFIG_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_CONFIG_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_CONFIG_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_CONFIG_APPID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
