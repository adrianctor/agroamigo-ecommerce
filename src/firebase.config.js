import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore' ;
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC4APuNTEeEl0V54kWpWLMY8JtkgTy6MdY",
  authDomain: "agroamigo-43d3f.firebaseapp.com",
  projectId: "agroamigo-43d3f",
  storageBucket: "agroamigo-43d3f.appspot.com",
  messagingSenderId: "251295350410",
  appId: "1:251295350410:web:193517130eee38e4857773"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;