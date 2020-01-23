import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBMsnaNMMbGbiAHiTkBJYzCCYMBGvJQgog",
    authDomain: "crwn-db-82586.firebaseapp.com",
    databaseURL: "https://crwn-db-82586.firebaseio.com",
    projectId: "crwn-db-82586",
    storageBucket: "crwn-db-82586.appspot.com",
    messagingSenderId: "118373353511",
    appId: "1:118373353511:web:720f5824773af864b7a602"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;