import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX90mpsDU9cdALi36pMWjUZaRw8jw3KhI",
  authDomain: "toro-motos-merida.firebaseapp.com",
  projectId: "toro-motos-merida",
  storageBucket: "toro-motos-merida.appspot.com",
  messagingSenderId: "203008524419",
  appId: "1:203008524419:web:205e2b961e885ee0939bb6",
  measurementId: "G-YJ1FYMHV2Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);
