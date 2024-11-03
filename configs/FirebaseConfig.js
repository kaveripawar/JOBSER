// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSDkJa-1Cb0HKaJExkz7z_iAxlWi1U0jg",
  authDomain: "jobser-959b4.firebaseapp.com",
  projectId: "jobser-959b4",
  storageBucket: "jobser-959b4.appspot.com",
  messagingSensserId: "344015392281",
  appId: "1:344015392281:web:62c5e3a5da286078c7e488",
  measurementId: "G-PVWBXJZP7Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// export {db};
//const analytics = getAnalytics(app);