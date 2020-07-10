import React, { useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { isLoaded, isEmpty } from "react-redux-firebase"
import { useSelector } from "react-redux"

const PrivateRoute = ({ children, ...remainingProps }) => {
  const auth = useSelector((state) => state.firebase.auth)

  console.log(auth)
  useEffect(() => {
    const isLoggedIn = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    }, [])

    return (
      <Route
        {...remainingProps}
        render={({ location }) =>
          isLoaded(auth) && !isEmpty(auth) ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    )
  })
}

export default PrivateRoute
