import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity= "Tokyo" />
        
       <footer>
        This project was coded by {""}
 <a 
 href=""
 target="_blank"
 rel="nooperner noreferrer">
       Tiffany Walker</a> {""}
       and is {""}<a
       href="https://"
       target="_blank"
       rel="noopener noreferrer">
 open-sourced</a>
 </a>
 </footer>
 </div>
 </div>
  );
}

export default App;
