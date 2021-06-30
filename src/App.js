import Header from './Components/Header';
import './App.css';
import React from "react"
import Checkout from "./Components/Checkout"
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  
  return (

    <Router>
      <div className="App">
        <Header/> 
        <Switch>

          <Route path="/checkout">
            
            <Checkout/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
