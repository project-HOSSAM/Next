import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyBAnLveflTIIhIviwn6gFWm0PoVL5ebZrY',
    authDomain: 'next-43619.firebaseapp.com',
    databaseURL: 'https://next-43619.firebaseio.com',
    projectId: 'next-43619',
    storageBucket: 'next-43619.appspot.com',
    messagingSenderId: '917559222766',
    appId: '1:917559222766:web:35da7ba17e67fdbcacaeff',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
