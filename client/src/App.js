import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Home from "./Components/home/home.js"
import {Route} from "react-router-dom"
import Players from "./Components/players/players.js"

function App() {
  axios.get("http://localhost:5000/api/stats")
  .then(res => {
    console.log(res.data[0])
  })

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path ="/players" component={Players} />
    </div>
  );
}

export default App;
