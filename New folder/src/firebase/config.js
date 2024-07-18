import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqdSLnnStzeqqQ6X26ZX-yczg2GUQi7ek",
  authDomain: "genie-dbb1b.firebaseapp.com",
  databaseURL: "https://genie-dbb1b-default-rtdb.firebaseio.com",
  projectId: "genie-dbb1b",
  storageBucket: "genie-dbb1b.appspot.com",
  messagingSenderId: "695234579942",
  appId: "1:695234579942:web:6498dfbde11c7b08491a27",
  measurementId: "G-JZDMQ1N04J"
};
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);