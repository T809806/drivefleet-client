// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6CxtTh_DXodqvAoqot_iRPy8ggqzPFI",
  authDomain: "drivefleet-b6373.firebaseapp.com",
  projectId: "drivefleet-b6373",
  storageBucket: "drivefleet-b6373.firebasestorage.app",
  messagingSenderId: "375514681787",
  appId: "1:375514681787:web:261694f2b6035a3d79f49e",
  measurementId: "G-Q0YGBNC4KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;