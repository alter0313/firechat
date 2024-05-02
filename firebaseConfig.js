// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpskh6HbgMsnjKt5rDY2w7KHxccmy-ohI",
  authDomain: "chatapp-6e3d3.firebaseapp.com",
  projectId: "chatapp-6e3d3",
  storageBucket: "chatapp-6e3d3.appspot.com",
  messagingSenderId: "1025144877958",
  appId: "1:1025144877958:web:76245ef671d69528daf207"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app)
// export const usersRef = collection('users')
