import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: "react-example-devresume",
    storageBucket: "react-example-devresume.appspot.com",
    messagingSenderId: "140880074215",
    appId: "1:140880074215:web:83ca1adedb191f4a931942"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }

























