import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// database.ref('expenses')
//   .on('child_removed', (snapshot) => {
//     console.log('child_removed')
//     console.log(snapshot.key, snapshot.val())
//   })

// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log('child_changed')
//     console.log(snapshot.key, snapshot.val())
//   })

// database.ref('expenses')
//   .on('child_added', (snapshot) => {
//     console.log('child_added')
//     console.log(snapshot.key, snapshot.val())
//   })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })
  
//     console.log(expenses)
//   })

// setTimeout(() => {
//   database.ref('expenses').push({
//     description: 'Drink',
//     note: '',
//     amount: 182384,
//     createAt: 328492793
//   })
// }, 5000)

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 1392,
//   createAt: 328492793
// })


// database.ref().set({
//   name: 'Jirachai Uraijaree',
//   age: 28,
//   job: {
//     position: 'Frontend dev',
//     company: 'Seekster'
//   },
//   stressLevel: 3,
//   location: {
//     city: 'Bangkok',
//     country: 'Thailand'
//   },
//   hasPet: false
// }).then(() => {
//   console.log('Data is saved!')
// }).catch((e) => {
//   console.log('FAILED!', e)
// })

// database.ref('age').set(33)
// database.ref('location/city').set('Udonthani')

// database.ref('attributes').set({
//   height: 168,
//   weight: 65
// }).then(() => {
//   console.log('2nd set call worked')
// }).catch((e) => {
//   console.log('FAILED!-2nd', e)
// })

// database.ref('isDev').set(null)

// database.ref('isDev').remove()
//   .then(() => {
//     console.log('Data was removed')
//   }).catch((e) => {
//     console.log('Failed to remove data!', e)
//   })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Google',
//   'location/city': 'eiei'
// })

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val()

//     console.log(val)
//   })
//   .catch((e) => {
//     console.log('error fetching data!', e)
//   })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref('age').set(43)
// }, 5000)

// setTimeout(() => {
//   database.ref().off(onValueChange)
// }, 10000)

// setTimeout(() => {
//   database.ref('age').set(53)
// }, 15000)

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const name = snapshot.val().name
//   const position = snapshot.val().job.position
//   const company = snapshot.val().job.company

//   console.log(`${name} is a ${position} at ${company}`)
// }, (e) => {
//   console.log('error with data fetching', e)
// })

// setTimeout(() => {
//   database.ref().update({
//     'job/position': 'Fullstack dev'
//   })
// }, 5000)

