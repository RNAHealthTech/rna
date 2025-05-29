import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


// put them in .env file before commiting to git
const firebaseConfig = {
  apiKey: "AIzaSyAiF68qakNhkumERR9W9Z8fMQdOUXukTVI",
  authDomain: "rna-package-builder.firebaseapp.com",
  projectId: "rna-package-builder",
  storageBucket: "rna-package-builder.firebasestorage.app",
  messagingSenderId: "1008397018562",
  appId: "1:1008397018562:web:6f6fdb25e814ea60aea25b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database firestore
export const db = getFirestore(app);