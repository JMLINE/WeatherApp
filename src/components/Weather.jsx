import React, { useEffect, useImperativeHandle, useState } from "react";
import { Button } from 'reactstrap';

let WEATHER_KEY = "dedeb7c6599b636ce8aa4a3e222a687f";

function Weather(props) {
  const [weatherData, setWeatherData] = useState();
  const [toggle, setToggle] = useState(true);
  const  [city, setCity ] = useState('')

  
  function fetchResults2(){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.long}&appid=${WEATHER_KEY}`
      )
      .then((response) => response.json())
      .then((data) => {
      setWeatherData(data.main.temp);
      console.log(data.main.temp);
      })
    }

  function reverseGeo(){
    fetch(
      `http://api.openweathermap.org/geo/1.0/reverse?lat=${props.lat}&lon=${props.long}&limit=5&appid=${WEATHER_KEY}`)
      .then((response) =>response.json())
      .then((data) => setCity(data[0].name))
     }
    


  // useEffect(() => {
  // }, []);
  
 fetchResults2();
  reverseGeo();
  return (
    <div>
     <div className = "cityName"></div>
      <p>It is currently {Math.floor(weatherData * 1.8 - 459.67) +"°F" } degrees in {city} 
      </p>
      

    </div>
  );
}
export default Weather;