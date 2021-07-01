import Header from './Components/Header';
import './App.css';
import React from "react"
import Checkout from "./Components/Checkout"
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Components/Login';

function App() {
  
  return (

    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/> 
            <Checkout/>
          </Route>

          <Route path="/">
            <Header/> 
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
