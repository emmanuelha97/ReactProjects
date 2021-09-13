import React from "react";

const Button = ({ handleSetShow, country, showCountry, show }) => {
  return (
    <button onClick={() => handleSetShow(country)} type="button">
      {show == true && showCountry === country ? "hide" : "show"}
    </button>
  );
};

export default Button;
