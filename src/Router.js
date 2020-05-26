import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Login from './components/Login'
import Home from './Containers/Home'
import About from './components/About'
import Products from './Containers/Products'
import Category from "./Containers/Category"
import Type from "./components/Type"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}


const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/login" />}
      />
  )
}
const Router = () => {
    return (
            <Switch>
              <Route path="/login" component={Login} />
              <ProtectedRoute exact path="/home" component={Home} />
              <ProtectedRoute path="/about" component={About} />
              <ProtectedRoute path="/products/:id"component={Products} />
              <ProtectedRoute path="/categories/:category"component={Category} />
              <ProtectedRoute path="/types/:type"component={Type} />
            </Switch>
    );
};

export default Router;