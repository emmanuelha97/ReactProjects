import React, { useState } from "react";
import FoundCountry from "./FoundCountry";
import Button from "./Button";
import Weather from "./Weather";

const DisplayCountries = ({ country, countries, copyCountries }) => {
  const [show, setShow] = useState(false);
  const [showCountry, setShowCountry] = useState("");

  const handleSetShow = (value) => {
    console.log(`event.target.value`, value);
    setShow(!show);
    setShowCountry(value);
  };

  return (
    <div>
      {copyCountries.length === 1 ? (
        <FoundCountry copyCapital={copyCountries} />
      ) : country === "" ? (
        countries.map((countryy, index) => (
          <div key={index}>
            {countryy.name}
            <Button
              handleSetShow={handleSetShow}
              showCountry={showCountry}
              country={countryy.name}
              show={show}
            />
            {show === true && showCountry === countryy.name ? (
              <div>
                <h1>{countryy.name}</h1>
                <p>Capital: {countryy.capital}</p>
                <p>Population: {countryy.population}</p>
                <p>Region: {countryy.region}</p>
                <h2>Languages</h2>
                {countryy.languages.map((lang, index) => (
                  <ul key={index}>
                    <li key={index}>{lang.name}</li>
                  </ul>
                ))}
                <img style={{ width: 400 }} src={countryy.flag}></img>
                <Weather capital={countryy.name} />
              </div>
            ) : (
              ""
            )}
          </div>
        ))
      ) : copyCountries.length > 10 ? (
        "Too many matches, specify another filter"
      ) : (
        copyCountries.map((count, index) => <div key={index}>{count.name}</div>)
      )}
    </div>
  );
};

export default DisplayCountries;
