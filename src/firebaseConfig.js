import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsR6DwxZY2LgLW3UcNKVA0TibG0VdrpAA",
  authDomain: "todolist-f68d6.firebaseapp.com",
  projectId: "todolist-f68d6",
  storageBucket: "todolist-f68d6.appspot.com",
  messagingSenderId: "541743629521",
  appId: "1:541743629521:web:ace9c1d51de57a33ed71f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)