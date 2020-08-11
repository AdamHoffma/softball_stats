import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Home from "./Components/home/home.js"
import {Route} from "react-router-dom"
import playerForm from "./Components/playerForm/addPlayerForm.js"
import editStats from "./Components/playerForm/editStats.js"
import playerList from "./Components/playerpages/playerlist.js"
import Nav from './Components/nav/nav.js'


function App() {  

  return (
    <div>
      <Nav/>
      <Route exact path="/" component={Home} />      
      <Route path="/playerform" component={playerForm} />
      <Route path="/editstats" component={editStats} />
      <Route path='/playerlist' component={playerList} />
    </div>
  );
}

export default App;
