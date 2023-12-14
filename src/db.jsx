import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXdNd1V7fdxypW3FUuZZG4XhRyssRJM3k",
  authDomain: "owlnutri.firebaseapp.com",
  projectId: "owlnutri",
  storageBucket: "owlnutri.appspot.com",
  messagingSenderId: "242458868060",
  appId: "1:242458868060:web:85a7cb90d38cea8f55e999",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const dataCollectionRef = collection(db, "messageForm");
