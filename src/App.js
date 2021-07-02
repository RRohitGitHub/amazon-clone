import Header from './Components/Header';
import './App.css';
import React, { useEffect } from "react"
import Checkout from "./Components/Checkout"
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{basket,user},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log(authUser)
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
 
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
