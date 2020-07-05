import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import firebase from "./config/firebase"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { createFirestoreInstance } from "redux-firestore"
import { rootReducer } from "./redux/reducers"
import { BrowserRouter } from "react-router-dom"
import { ReactReduxFirebaseProvider } from "react-redux-firebase"

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}

const initialState = {}
const store = createStore(rootReducer, initialState)

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
)
