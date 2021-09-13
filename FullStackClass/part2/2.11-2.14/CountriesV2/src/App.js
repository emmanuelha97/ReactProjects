import React, { useState, useEffect } from "react";
import axios from "axios";
// import Button from "./components/Button";
// import DisplayShow from "./components/DisplayShow";
import FindCountries from "./components/FindCountries";
import DisplayCountries from "./components/DisplayCountries";
import Weather from "./components/Weather";
<pre>{process.env.REACT_APP_SECRET_NAME}</pre>;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(`response.data`, response.data);
    });
  }, []);

  const handleCountryChange = (event) => {
    // console.log(`event.target.value`, event.target.value);
    setCountry(event.target.value);
  };

  const copy = [...countries].filter(
    (count) => count.name.toLowerCase().includes(country.toLowerCase()) === true
  );

  return (
    <div>
      <FindCountries handleCountryChange={handleCountryChange} />
      <DisplayCountries
        country={country}
        countries={countries}
        copyCountries={copy}
      />
    </div>
  );
};

export default App;
