import Header from './Components/Header';
import './App.css';
import React, { useEffect } from "react"
import Checkout from "./Components/Checkout"
import Payments from "./Components/Payments"
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

function App() {
  const [{basket,user},dispatch] = useStateValue();

  const promise = loadStripe("pk_test_51JAyOISHvMVahfmk5AMRdgqVUyyEKfGzYzmVnH1xgTokNLaRzsk8XlUeK2eYqKCSJ6xsGTsIiUOa2iYxdgfGpjvs00Y6Q9XKFm")

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

          <Route path="/payments">
            <Header/>
            <Elements stripe={promise}>
              <Payments/>
            </Elements>
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
