import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const countCap = capital.slice();
  const [weather, setWeather] = useState(capital);
  const [weatherData, setWeatherData] = useState([]);

  const listOfWeather = () => {
    console.log("effect");
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=584671207c2b4378bf8225143212407&q=${weather}&aqi=no`
      )
      .then((response) => {
        console.log("promise fulfilled");
        setWeatherData(response.data);
        console.log(`response.data`, response.data);
      });
  };

  useEffect(listOfWeather, [weather]);

  console.log(`weatherData`, weatherData);

  const place = weatherData.location;
  const temp = weatherData.current;

  console.log(`temp, place`, temp, place);

  return (
    <div>
      {weatherData.length === 0 ? (
        ""
      ) : (
        <div>
          <h2>
            Weather in {capital} located in the {place.region}
          </h2>
          <h3> Current time is {place.localtime}</h3>
          <p>
            <b>Current temperature in F is {temp.temp_f}</b>
          </p>
          <p>
            <b>Current temperature in C is {temp.temp_c}</b>
          </p>
          <img style={{ width: 100 }} src={temp.condition.icon} alt={""} />
        </div>
      )}
    </div>
  );
};

export default Weather;
