import React, { useState }from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Weather from "./components/Weather"
import WeatherSearch from "./components/WeatherSearch"

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
      
    }}

  
  
  return ( 
  <div className = "App" >
{Geo()}
<NavBar lat = {lat} long = {long}/>




<WeatherSearch />
    </div>
  );
}



export default App;