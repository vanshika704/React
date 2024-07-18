import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDXB3pZqSoJlHFiC7eNjiLMgzSmlR2pUOM",
    authDomain: "moksha-17898.firebaseapp.com",
    projectId: "moksha-17898",
    storageBucket: "moksha-17898.appspot.com",
    messagingSenderId: "22897178299",
    appId: "1:22897178299:web:24b27570ed3e107f0e1b9e"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);