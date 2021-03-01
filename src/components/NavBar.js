import "./NavStyle.css"
import Weather from "../components/Weather"
import WeatherAlerts from "../components/WeatherAlerts"

const NavBar = (props) =>{

return(
    <>
    <div className = "navTitle">
    <li className="gitHub">
	    <a href="https://github.com/JMLINE/WeatherApp" target="_blank"> <i className="fab fa-github fa-2x"></i></a></li>
        <div className = "newTitle">Weather App</div>
            <div className = "current">
                {props.lat === 0 ? "" : <Weather lat = {props.lat} long = {props.long} />}</div>
                {<WeatherAlerts lat = {props.lat} long = {props.long} />}
                </div>
            
    </>
)
}

export default NavBar