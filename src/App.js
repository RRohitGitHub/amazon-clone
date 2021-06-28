import Header from './Components/Header';
import './App.css';
import React from "react"
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Home */}
      <Home/>
    </div>
  );
}

export default App;
