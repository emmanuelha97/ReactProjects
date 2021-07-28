import React from "react";

const Button = ({ countryName, show, setShow, handleShow }) => {
  return (
    <button onClick={handleShow(countryName)}>{show ? "hide" : "show"}</button>
  );
};

export default Button;
