import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyCRLYKsvQ5iVS0nNsYpadFKbBP0H_YXaHA',
  authDomain: 'simplelogin-8a1d7.firebaseapp.com',
  databaseURL: 'https://simplelogin-8a1d7.firebaseio.com',
  projectId: 'simplelogin-8a1d7',
  storageBucket: 'simplelogin-8a1d7.appspot.com',
  messagingSenderId: '599798723345',
  appID: 'app-id',
};

export const app = firebase.initializeApp(firebaseConfig);

const realTimeDb = firebase.database();
const fireStoreDb = firebase.firestore();
const fireBaseAuth = firebase.auth;
const auth = firebase.auth();
const storage = firebase.storage();


//RTDB list of refs
const userRef = realTimeDb.ref('users');

const singleUserRef = userId => userRef.child(userId);

export const register = (userInfo) => {
  const { email, password } = userInfo;
  let user = { userInfo };
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(data => {
      const { uid } = data.user;
      singleUserRef(uid).set(user);
    })
    .catch(err => {
      err.type = 'ERROR';
      console.error(err);
    });
};

//login
export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email,password);
}


// Initialize Firebase
