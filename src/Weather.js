import React, {useState}from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./index.css";

export default function Weather(props){
    const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response){
    setWeatherData({
      ready:true
      coordinates: response.data.coord,
        city:response.data.name,
        date:new Date (response.data.dt*1000),
        temperature:response.data.main.temp,
        wind:response.data.wind.speed,
        humidity:response.data.main.humidity,
        description:response.data.weather[0].description,
        icon:`http//openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
}

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

    function handleCityChange(event) {
    setCity(event.target.value);
  }

function Search(){
    let apiKey="b1ad2579aaffa4376d245595812d15f0";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
}

if(weather.Data.ready){
  return(
    <div className="Weather">
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter city" className="form-control" onChange={handleCityChange} />
      </div>
     <div className="col-3">   
<input type="submit" value="Search" className="btn btn-primary" />
      </div>
    </div>
    </form>

  <WeatherInfo data={WeatherData} />
  <WeatherForecast coordinates={weatherData.coordinates}/,
  </div>
  );
}else{
  Search();
  return "Loading...";
}
}
  
