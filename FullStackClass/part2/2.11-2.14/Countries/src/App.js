import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/Button";
import DisplayShow from "./components/DisplayShow";
import Weather from "./components/Weather";
<pre>{process.env.REACT_APP_SECRET_NAME}</pre>;

const App = () => {
  // Multiple useStates
  // persons sets the array object with the information inside
  // newName and newNumber creates a name and number to be added to persons
  // filterW is the word that we are currently filtering
  const [countries, setCountries] = useState([]);

  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("");

  // const [filterC, setFilter] = useState("");

  const listOfCountries = () => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  };
  useEffect(listOfCountries, []);

  // console.log(`weather`, weather);
  const handleCountryChange = (event) => {
    // console.log(`event.target.value`, event.target.value);
    setCountry(event.target.value);
  };

  const handleShow = (value) => () => {
    setDisplay(value);
    setShow(!show);
  };

  const copyCountries = [...countries];

  const filteredCountries = ""
    ? copyCountries
    : copyCountries.filter(
        (countryy) =>
          countryy.name.toLowerCase().includes(country.toLowerCase()) === true
      );

  return (
    <div>
      <p>Find countries </p>
      <input value={country} onChange={handleCountryChange} />
      <div>
        {filteredCountries.length > 10 && country !== ""
          ? "Too many matches, specify another filter"
          : filteredCountries.map((countries, index) => (
              <div key={index}>
                {countries.name}
                {filteredCountries.length === 1 ? (
                  " "
                ) : (
                  <Button
                    countryName={countries.name}
                    show={show}
                    setShow={setShow}
                    handleShow={handleShow}
                  />
                )}
                <DisplayShow
                  show={show}
                  countryName={countries.name}
                  name={display}
                />
              </div>
            ))}
      </div>

      <div>
        {filteredCountries.length === 1 &&
          filteredCountries.map((country, index) => (
            <div key={index}>
              <h2>{country.name}</h2>
              <p> Capital {country.capital}</p>
              <p> Population {country.population}</p>
              <h3>Languages</h3>
              <ul>
                {country.languages.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
              <img style={{ width: 80 }} alt={"flag"} src={country.flag} />
              <Weather capital={country.capital} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
