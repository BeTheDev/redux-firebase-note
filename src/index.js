import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import firebase from "./firebase"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"
import { createFirestoreInstance } from "redux-firestore"
import { rootReducer } from "./redux/reducers"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const initialState = {}
const store = createStore(rootReducer, initialState)

const firebaseDatabaseProps = {
  firebase,
  firebaseDatabaseConfig: {
    userProfile: "users",
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...firebaseDatabaseProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
