import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDTKkGjQLL0vzDxDd7gtX--CSI5k0EJoAk",
  authDomain: "camera4rent-68b41.firebaseapp.com",
  projectId: "camera4rent-68b41",
  storageBucket: "camera4rent-68b41.appspot.com",
  messagingSenderId: "932235807879",
  appId: "1:932235807879:web:6ba9680656287d24193c22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);
// export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
