import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyCx7PMqShwQW-d8sz7dyckij5S3VwLNnrQ",
  authDomain: "tienda-be6c6.firebaseapp.com",
  databaseURL: "https://tienda-be6c6.firebaseio.com",
  projectId: "tienda-be6c6",
  storageBucket: "tienda-be6c6.appspot.com",
  messagingSenderId: "824538411116",
  appId: "1:824538411116:web:b16d78c7007ffbab276849",
  measurementId: "G-FPMXXNNMXE"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }


// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })
