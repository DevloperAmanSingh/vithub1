import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBS6I4bn3vj9pTZ6GDEL2zjUDhS4vtEORc",
  authDomain: "rnapp-c89e4.firebaseapp.com",
  projectId: "rnapp-c89e4",
  storageBucket: "rnapp-c89e4.appspot.com",
  messagingSenderId: "929063365529",
  appId: "1:929063365529:web:d0d4dbfb813905bc980108",
  measurementId: "G-WTHQ0KKLTE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


