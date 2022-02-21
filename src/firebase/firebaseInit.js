import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAxc1m9U8d9QIkVp6zamfXJfcU-uz9cnJs",
  authDomain: "popcultureland-2a8d1.firebaseapp.com",
  projectId: "popcultureland-2a8d1",
  storageBucket: "popcultureland-2a8d1.appspot.com",
  messagingSenderId: "532288683974",
  appId: "1:532288683974:web:3d1155561636c7c919bcc7",
  measurementId: "G-ES0JGWZ7XF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
