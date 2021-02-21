import React, { useState, useEffect }from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"
import WeatherSearch from "./components/WeatherSearch"
import WeatherAlerts from "./components/WeatherAlerts"


function App() {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
 
  let Geo = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }

    function getPosition(position) {
      setLat(position.coords.latitude.toFixed(2));
      setLong(position.coords.longitude.toFixed(2));
      localStorage.setItem("lat", lat)
      localStorage.setItem("long", long)

      
      
    }}
 Geo()
  return ( 
  <div className = "App" >


   
<NavBar lat = {lat} long = {long}/>
<WeatherSearch />

    </div>
  );
}



export default App;