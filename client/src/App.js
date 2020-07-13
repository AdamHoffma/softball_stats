import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios"

function App() {
  axios.get("http://localhost:5000/api/stats")
  .then(res => {
    console.log(res.data[0])
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
