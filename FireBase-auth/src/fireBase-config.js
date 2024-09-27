import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAPG9OnEYISAiOGHN6pIThVXbRAQWoZnPU",
    authDomain: "authtentication-a298b.firebaseapp.com",
    projectId: "authtentication-a298b",
    storageBucket: "authtentication-a298b.appspot.com",
    messagingSenderId: "192234971212",
    appId: "1:192234971212:web:49dd9d920b77ca81e494e9",
    measurementId: "G-XQ2E9T5Z80"
  };

  const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)