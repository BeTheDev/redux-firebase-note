import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyANVTGfmpIQgR77i0T4uN5WHw5Yu63NuDQ",
  authDomain: "drag-n-drop-project.firebaseapp.com",
  databaseURL: "https://drag-n-drop-project.firebaseio.com",
  projectId: "drag-n-drop-project",
  storageBucket: "drag-n-drop-project.appspot.com",
  messagingSenderId: "183769094929",
  appId: "1:183769094929:web:288953de7e70c052ed8ab0",
  measurementId: "G-F4KHZWGBF9",
}


export const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
