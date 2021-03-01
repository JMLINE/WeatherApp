//still working on


import React, { useState, useEffect } from 'react';

let WEATHER_KEY = "dedeb7c6599b636ce8aa4a3e222a687f";

function WeatherAlerts(props){
    const [weatherAlert, setWeatherAlert] = useState([])

    function fetchAlert() {
        fetch(
       `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&exclude=daily,current,minutely,hourly&appid=${WEATHER_KEY}`
        )
          .then((response) => response.json())
          .then((data) => 
          setWeatherAlert(data[0]))
        }
        useEffect(() => {
            fetchAlert();
          }, []);
        
        return (
            <div>
                {weatherAlert == null ? <h4 style ={{color: 'black'}}>No Current Weather Alerts</h4> : <h4>{weatherAlert}</h4>}
            </div>
        )
    }

    export default WeatherAlerts