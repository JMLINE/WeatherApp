import "./NavStyle.css"
import Weather from "../components/Weather"



const NavBar = (props) =>{

return(
    <>
    <div className = "navTitle">
        <div className = "newTitle">Weather App</div>
            <div className = "current">
                {props.lat === 0 ? "" : <Weather lat = {props.lat} long = {props.long} />}</div></div>
    </>
)
}

export default NavBar