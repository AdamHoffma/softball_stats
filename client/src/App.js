import React from 'react';
import './App.css';
import Home from "./Components/home/home.js"
import {Route} from "react-router-dom"
import playerForm from "./Components/playerForm/addPlayerForm.js"
import editStats from "./Components/playerForm/editStats.js"
import playerList from "./Components/playerpages/playerlist.js"
import playerPage from "./Components/playerpages/playerpage.js"
import Nav from './Components/nav/nav.js'
import Contact from './Components/contact/contact.js'
import Calendar from './Components/calendar/calendar';
import addToCalendar from "./Components/calendar/addToCalendar.js"
import LoginPage from "./Components/login/login.js"
import AdminNav from "./Components/admin/adminNav.js"


const App = props => {  
  
  return (
    <div>
      <Nav/>
      <Route exact path="/" component={Home} />
      <Route path="/adminnav" component={AdminNav}></Route>
      <Route path="/login" component={LoginPage} />      
      <Route path="/addplayer" component={playerForm} />
      <Route path="/editstats" component={editStats} />
      <Route path='/playerlist' component={playerList} />
      <Route path="/player/:id" component={playerPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/addevent" component={addToCalendar} />
    </div>
  );
}

export default App;
