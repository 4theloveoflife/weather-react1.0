import React, {useEffect, useState} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    const [ loaded, setLoaded]=useState(false);
    const[forecast, setForecast]=useSate (null);

    useEffect(() => {
        setLoaded(false);
    },
    [props.coordinates]);

function handleResponse(response){
    setForecast (response.data.daily);
    setLoaded(true);
}

function load()
    let apiKey="b1ad2579aaffa4376d245595812d15f0";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
}

if (loaded){
    return(
        <div className="Weather Forecast">
            <div className="row">
                {forecast.map(function(dailForecast;index)
                {
                    if (index < 5){
                        return(
                            <div className="col" key={index}>
                                < WeatherForecastDay data= {dailyForecast}/>
                            </div>
                        );
                    }else{
                        return null;
                    }
                }) }
            </div>
        </div>
    );
}else {
    load();
    return null;
}
