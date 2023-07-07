import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAmWQpWB3CDp0zgMac1aa0wb13RD2AiTQA",
//   authDomain: "t001-833ac.firebaseapp.com",
//   projectId: "t001-833ac",
//   storageBucket: "t001-833ac.appspot.com",
//   messagingSenderId: "76060527564",
//   appId: "1:76060527564:web:fc11d039058ab08ac92b69",
//   measurementId: "G-WV3DJXRS0N"
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
