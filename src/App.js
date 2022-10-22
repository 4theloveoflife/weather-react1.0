import './App.css';
import React from "react";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "Tokyo" />
        
       <footer>
        This project was coded by {""}
 <a 
 href="https://app.netlify.com/sites/spontaneous-horse-b79cf3/deploys/"
 target="_blank"
 rel="nooperner noreferrer">
       Tiffany Walker
       </a> {""}
       and is {""}
       <a
       href="https://github.com/4theloveoflife/weather-react1.0"
       target="_blank"
       rel="noopener noreferrer">
 open-sourced</a>
 </footer>
 </div>
 </div>
  );
}

export default App;

