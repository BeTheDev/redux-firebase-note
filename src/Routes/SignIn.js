import React from "react"
import { useFirebase } from "react-redux-firebase"
import { useHistory } from "react-router-dom"

const SignIn = () => {
  const firebase = useFirebase()
  const history = useHistory()

  const signInWithGoogle = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            return history.push("/todos")
          } else {
            firebase
              .auth()
              .signInWithPopup(provider)
              .then(() => {
                history.push("/todos")
              })
          }
        })
      })
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={(event) => {
          event.preventDefault()
          signInWithGoogle()
        }}
      >
        Sign In with Google
      </button>
    </div>
  )
}

export default SignIn
