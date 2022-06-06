// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAltJUWqeBhU8dFEY2e5YbL8AYVAjBQzM",
  authDomain: "broderskabet-no.firebaseapp.com",
  projectId: "broderskabet-no",
  storageBucket: "broderskabet-no.appspot.com",
  messagingSenderId: "833967559376",
  appId: "1:833967559376:web:b2b2af4ed40dc0d6d804d5",
  measurementId: "G-BKXD7JP2LY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;