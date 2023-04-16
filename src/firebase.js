// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  doc, setDoc  , getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "your_app_api_key",
  authDomain: "your_app_auth_domain",
  projectId: "your_app_project_id",
  storageBucket: "your_app_store_bucket",
  messagingSenderId: "your_app_messaging_sender_id",
  appId: "your_app_app_id",
  measurementId: "your_app_mesuremnt_id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {setDoc , db , doc}