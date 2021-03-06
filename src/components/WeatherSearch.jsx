import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Container,
  Alert,
} from "reactstrap";

let WEATHER_KEY = "dedeb7c6599b636ce8aa4a3e222a687f";

function WeatherSearch() {
  const [weatherSearch, setWeatherSearch] = useState("NaNa");
  const [toggle, setToggle] = useState(true);
  const [cityName, setCityName] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [weatherFor, setWeatherFor] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [weatherIcon, setWeatherIcon] = useState("");

  const fetchResultsSearch = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherSearch(data.main.temp);
        setWeatherFor(data.weather[0].description);
        setWeatherIcon(data.weather[0].icon);
        setIsDisabled(true);
        setErrorMessage(false);
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage(true);
      });
  };
  let URL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  function handleToggle() {
    if (toggle === true) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  function clearData() {
    setWeatherSearch("NaNa");
    setCityName("");
    setIsDisabled(false);
  }

  return (
    <div>
      <Form onSubmit={fetchResultsSearch}>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label htmlFor="city" />
                <Input
                  name="city"
                  placeholder="Search a City"
                  required
                  disabled={isDisabled}
                  onChange={(e) => {
                    setCityName(e.target.value);
                  }}
                  value={cityName}
                />
              </FormGroup>

              <Col sm="12" md={{ size: 6, offset: 3 }}>
                {weatherSearch !== "NaNa" ? "" : <Button>Search</Button>}
              </Col>
            </Col>
          </Row>
        </Container>
      </Form>
      {errorMessage === true ? (
        <Alert color="danger">
          An Error Occured. Please Check Your Spelling and Try Again.
        </Alert>
      ) : (
        ""
      )}
      <div className="cityName"></div>

      {weatherSearch === "NaNa" ? (
        ""
      ) : (
        <>
          <h3>
            It is currently{" "}
            {toggle === true
              ? Math.floor(weatherSearch * 1.8 - 459.67) + "°F"
              : Math.floor(weatherSearch - 273.12) + "°C"}{" "}
            degrees in {cityName} with {weatherFor}.
          </h3>
          <img src={URL}></img>
        </>
      )}
      <br></br>
      {weatherSearch === "NaNa" ? (
        ""
      ) : toggle === true ? (
        <Button
          outline
          color="success"
          style={{ width: "20%" }}
          onClick={handleToggle}
        >
          Prefer Celcius?
        </Button>
      ) : (
        <Button
          outline
          color="primary"
          style={{ width: "20%" }}
          onClick={handleToggle}
        >
          Prefer Fahrenheit?
        </Button>
      )}
      <br></br>
      {weatherSearch === "NaNa" ? (
        ""
      ) : (
        <Button
          outline
          color="danger"
          type="submit"
          style={{ width: "20%" }}
          onClick={clearData}
        >
          Clear
        </Button>
      )}
    </div>
  );
}
export default WeatherSearch;
