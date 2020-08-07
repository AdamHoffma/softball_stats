import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Home from "./Components/home/home.js"
import {Route} from "react-router-dom"
import Players from "./Components/players/players.js"
import PlayerForm from "./Components/playerForm/playerForm.js"
import playerForm from './Components/playerForm/playerForm.js';

function App() {
  axios.get("http://localhost:5000/api/stats")
  .then(res => {
    console.log(res.data[0])
  })

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path ="/players" component={Players} />
      <Route path="/playerform" component={playerForm} />
    </div>
  );
}

export default App;
