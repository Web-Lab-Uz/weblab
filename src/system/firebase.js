import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW5uWeOH-o3P1IHCx32KPT8IGkkjPEqVc",
    authDomain: "web-lab-b1a15.firebaseapp.com",
    projectId: "web-lab-b1a15",
    storageBucket: "web-lab-b1a15.appspot.com",
    messagingSenderId: "141783610031",
    appId: "1:141783610031:web:4ff3f9776196cb430eda5a",
    measurementId: "G-EQCMYRH2KW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();
export default  database;