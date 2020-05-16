import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Products from './Containers/Products'
import Category from "./components/Category"
import Type from "./components/Type"

const Router = () => {
    return (
            <Switch>
              <Route exact path="/"component={Home} />
              <Route path="/products/:id"component={Products} />
              <Route path="/categories/:category"component={Category} />
              <Route path="/types/:type"component={Type} />
            </Switch>
    );
};

export default Router;