import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Home from "./Components/home/home.js"
import {Route} from "react-router-dom"
import Players from "./Components/players/players.js"
import playerForm from "./Components/playerForm/addPlayerForm.js"
import editStats from "./Components/playerForm/editStats.js"
import playerList from "./Components/playerpages/playerlist.js"


function App() {  

  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path ="/players" component={Players} />
      <Route path="/playerform" component={playerForm} />
      <Route path="/editstats" component={editStats} />
      <Route path='/playerlist' component={playerList} />
    </div>
  );
}

export default App;
