// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGGS2FMKTFAN09-m-l4jiic0XMLDEtDNk",
  authDomain: "expensify-fe792.firebaseapp.com",
  databaseURL: "https://expensify-fe792-default-rtdb.firebaseio.com",
  projectId: "expensify-fe792",
  storageBucket: "expensify-fe792.appspot.com",
  messagingSenderId: "42829197558",
  appId: "1:42829197558:web:08104098dd90de23197cd7",
  measurementId: "G-XCWBK09K4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
set(ref(db), {
  name: 'Sergiy Pavlyk',
  age: 27,
  isSingle: false,
  location: {
    city: 'Lviv',
    country: 'Ukraine'
  }
});

update(ref(db), { 'age': 25 });
update(ref(db), { 'location/city': 'Chervonohrad' });
set(ref(db, 'attributes'), {
  height: '523532',
  weight: '235'
});
