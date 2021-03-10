import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3mDuzveURHBXmoOQvt2n31y-tIg2WO_M",
    authDomain: "slack-40c67.firebaseapp.com",
    projectId: "slack-40c67",
    storageBucket: "slack-40c67.appspot.com",
    messagingSenderId: "78909900827",
    appId: "1:78909900827:web:316f5cc85c55e8b4d650be"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db }