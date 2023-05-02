import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUpF9UCY0vSENd3fyWza3tOJicJNxQmRs",
  authDomain: "react-abhi-portfolio.firebaseapp.com",
  projectId: "react-abhi-portfolio",
  storageBucket: "react-abhi-portfolio.appspot.com",
  messagingSenderId: "734370613952",
  appId: "1:734370613952:web:f261e01c2ae6b1f5307b25"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()