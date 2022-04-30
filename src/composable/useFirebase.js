import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "../firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore();
