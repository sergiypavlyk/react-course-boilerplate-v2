// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, remove, onValue, push } from "firebase/database";
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

export { push, ref, set, update, remove, onValue, db as default };

// // child_removed
// onValue(ref(db, 'expenses', 'child_removed'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// onValue(ref(db, 'expenses', 'child_changed'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// onValue(ref(db, 'expenses', 'child_added'), (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// push(ref(db, 'expenses'), {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });


// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });



// onValue(ref(db, 'value'), (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// set(ref(db), {
//   name: 'Sergiy Pavlyk',
//   age: 27,
//   stressLevel: 6,
//   isSingle: false,
//   job: {
//     title: 'SE',
//     company: 'Leobit'
//   },
//   location: {
//     city: 'Lviv',
//     country: 'Ukraine'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// update(ref(db), { 'age': 25 });
// update(ref(db), { 'location/city': 'Chervonohrad' });

// set(ref(db, 'attributes'), {
//   height: '523532',
//   weight: '235'
// }).then(() => {
//   console.log('Second set call worked.');
// }).catch((e) => {
//   console.log('Things didnt for the second error', e);
// });

// remove(ref(db, 'attributes'))
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });

// update(ref(db), {
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
