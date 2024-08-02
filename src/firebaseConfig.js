import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAOSfFCL4wB6hPiZtRCoz61uk91hjyxHBE",
  authDomain: "mundo-rosa-c2f1a.firebaseapp.com",
  projectId: "mundo-rosa-c2f1a",
  storageBucket: "mundo-rosa-c2f1a.appspot.com",
  messagingSenderId: "237526381000",
  appId: "1:237526381000:web:67189e936e9c0cd9fa50fd",
  measurementId: "G-PJWFYYWFF8"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);