import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyD_n9XqsuWGveCsLDui-Kr2Ldjnm-EFazg",
    authDomain: "buyfy-a8f27.firebaseapp.com",
    projectId: "buyfy-a8f27",
    storageBucket: "buyfy-a8f27.appspot.com",
    messagingSenderId: "268042248696",
    appId: "1:268042248696:web:2f5ddd2b2447852d9fb60d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export var auth=firebase.auth();
export var firestore=firebase.firestore();
export var serverTimeStamp=()=> firebase.firestore.FieldValue.serverTimestamp();
export var GoogleAuthProvider=new firebase.auth.GoogleAuthProvider();
export var storage=firebase.storage().ref();
export default firebase;
