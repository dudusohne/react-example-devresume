import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBRImEGtmuJk4QbCM3ZqZp-uL8NHM1gSaw",
    authDomain: "react-example-devresume.firebaseapp.com",
    databaseURL: "https://react-example-devresume-default-rtdb.firebaseio.com",
    projectId: "react-example-devresume",
    storageBucket: "react-example-devresume.appspot.com",
    messagingSenderId: "140880074215",
    appId: "1:140880074215:web:83ca1adedb191f4a931942"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database }

























