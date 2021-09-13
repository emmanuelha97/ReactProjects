import React from "react";
import Weather from "./Weather";

const FoundCountry = ({ copyCapital }) => {
  console.log(`copyCapital`, copyCapital);
  return (
    <div>
      {copyCapital.map((place, index) => (
        <div key={index}>
          <h1>{place.name}</h1>
          <p>Capital: {place.capital}</p>
          <p>Population: {place.population}</p>
          <p>Region: {place.region}</p>
          <h2>Languages</h2>
          {place.languages.map((lang, index) => (
            <ul key={index}>
              <li key={index}>{lang.name}</li>
            </ul>
          ))}
          <img style={{ width: 400 }} src={place.flag}></img>
          <Weather capital={place.name} />
        </div>
      ))}
    </div>
  );
};

export default FoundCountry;
