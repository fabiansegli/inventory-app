import React from 'react';
import store from './Redux/store'
import { Provider } from 'react-redux'
import './App.css';
import Router from "./Router"
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav"


function App() {
  return (
    <Provider store={store}>    
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Router />
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
