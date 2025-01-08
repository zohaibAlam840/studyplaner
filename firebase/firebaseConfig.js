import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Replace with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyDZz-_c7aetVnpw7sGiKMRlG6Uh_dTILD0",
  authDomain: "studyplanner-f03fd.firebaseapp.com",
  projectId: "studyplanner-f03fd",
  storageBucket: "studyplanner-f03fd.appspot.com",
  messagingSenderId: "556235433419",
  appId: "1:556235433419:android:657848e17d52726a0fc24e",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Setup Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
