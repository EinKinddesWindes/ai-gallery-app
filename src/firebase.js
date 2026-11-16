
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9dldUxoInRVQdnu_NfqAmXkryXhyXOtU",
  authDomain: "clara-kang-website.firebaseapp.com",
  projectId: "clara-kang-website",
  storageBucket: "clara-kang-website.firebasestorage.app",
  messagingSenderId: "617159310575",
  appId: "1:617159310575:web:8426e22e46ad5433702f1a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
