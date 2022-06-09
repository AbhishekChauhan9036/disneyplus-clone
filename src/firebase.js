import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDimhZsXgGH5iljeC-rO_ugX48kiydV4T4",
    authDomain: "disneyplus-clone-2f61d.firebaseapp.com",
    projectId: "disneyplus-clone-2f61d",
    storageBucket: "disneyplus-clone-2f61d.appspot.com",
    messagingSenderId: "421651792552",
    appId: "1:421651792552:web:5480bb5c120a5622f0789d",
    measurementId: "G-XS8CJX0Z1E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
