import "./NavStyle.css"
import Weather from "../components/Weather"



const NavBar = (props) =>{

return(
    <>
    	
    <div className = "navTitle">
    <li class="gitHub">
	    <a href="https://github.com/JMLINE/WeatherApp" target="_blank"> <i class="fab fa-github fa-2x"></i></a></li>
        <div className = "newTitle">Weather App</div>
            <div className = "current">
                {props.lat === 0 ? "" : <Weather lat = {props.lat} long = {props.long} />}</div></div>
    {/* <i class="fab fa-github-square"></i> */}
    </>
)
}

export default NavBar