import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCBr47-HWtko-VJeObejt8zeTK-T2A2WNo",
  authDomain: "thallys-lemos.firebaseapp.com",
  projectId: "thallys-lemos",
  storageBucket: "thallys-lemos.appspot.com",
  messagingSenderId: "1034501086335",
  appId: "1:1034501086335:web:fa4b97413a30ab1c00734a",
  measurementId: "G-VR3TFJK90N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db }