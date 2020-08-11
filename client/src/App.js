import React from 'react';
import './App.css';
import Home from "./Components/home/home.js"
import {Route} from "react-router-dom"
import playerForm from "./Components/playerForm/addPlayerForm.js"
import editStats from "./Components/playerForm/editStats.js"
import playerList from "./Components/playerpages/playerlist.js"
import playerPage from "./Components/playerpages/playerpage.js"
import Nav from './Components/nav/nav.js'


const App = props => {  
  
  return (
    <div>
      <Nav/>
      <Route exact path="/" component={Home} />      
      <Route path="/playerform" component={playerForm} />
      <Route path="/editstats" component={editStats} />
      <Route path='/playerlist' component={playerList} />
      <Route path="/player/:id" component={playerPage} />
    </div>
  );
}

export default App;
