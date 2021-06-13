  import firebase from 'firebase';
 
 var firebaseConfig = {
    apiKey: "AIzaSyB0MGlSLIzt44AcJ920kf1zD7U0f0DpAe0",
    authDomain: "school-attendence-app-5d679.firebaseapp.com",
    databaseURL: "https://school-attendence-app-5d679-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-5d679",
    storageBucket: "school-attendence-app-5d679.appspot.com",
    messagingSenderId: "967793268552",
    appId: "1:967793268552:web:70299e40c6ba26023f857d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.database();
