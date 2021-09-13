import React from "react";

const FindCountries = ({ handleCountryChange }) => {
  return (
    <div>
      <form onChange={handleCountryChange}>
        <p>
          find countries <input></input>
        </p>
      </form>
    </div>
  );
};

export default FindCountries;
