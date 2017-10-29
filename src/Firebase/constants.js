import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBljEnVY--h_qaaRPfNfKO2LnxZGuNIorE",
  authDomain: "tcb-debug.firebaseapp.com",
  databaseURL: "https://tcb-debug.firebaseio.com",
  projectId: "tcb-debug",
  storageBucket: "tcb-debug.appspot.com",
  messagingSenderId: "39434659068"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const stgRef = firebase.storage().ref();
export const auth = firebase.auth();
export const db = firebase.database();
//export var storageRef = firebase.storage().ref();
export const google = new firebase.auth.GoogleAuthProvider();
export const github = new firebase.auth.GithubAuthProvider();

//export default firebase;
