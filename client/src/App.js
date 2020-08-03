import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import Test from "./Components/home/home.js"
import {Route} from "react-router-dom"

function App() {
  axios.get("http://localhost:5000/api/stats")
  .then(res => {
    console.log(res.data[0])
  })

  return (
    <div className="App">
      <Test/>
    </div>
  );
}

export default App;
