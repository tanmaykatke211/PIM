import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyBE_eWHsW6Fn9ZWbVgTI6rIAMMZIDYZxHE",
    authDomain: "personal-info-manager.firebaseapp.com",
    databaseURL: "https://personal-info-manager-default-rtdb.firebaseio.com",
    projectId: "personal-info-manager",
    storageBucket: "personal-info-manager.appspot.com",
    messagingSenderId: "1048266731547",
    appId: "1:1048266731547:web:2c86e2b7ea6279a0c248be"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);