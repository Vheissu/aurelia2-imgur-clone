import firebase from 'firebase/app';

import 'firebase/database';

const config = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DB,
    projectId: process.env.FIREBASE_PID,
    storageBucket: process.env.FIREBASE_SB,
    messagingSenderId: process.env.FIREBASE_SID,
    appId: process.env.FIREBASE_APPID,
    measurementId:process.env.FIREBASE_MID
};

firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const itemsRef = databaseRef.child('items');
export const usersRef = databaseRef.child('users');

export default firebase;