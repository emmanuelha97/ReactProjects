import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [coins, setCoin] = useState([]);
  const [show, setShow] = useState(true);
  const hook = () => {
    async function fetchData(url) {
      try {
        const response = await axios.get(url);
        console.log(`response.data`, response.data);
        setCoin(response.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    // fetchData("https://api.artic.edu/api/v1/artworks");
    fetchData("https://api.artic.edu/api/v1/artworks/129884");
  };

  useEffect(hook, []);

  return <div>hello world</div>;
};

export default App;

// const hook = () => {
//     axios
//       .get("http://localhost:3001/persons")
//       .then((response) => {
//         console.log(`response.data`, response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });

// axios
//   .get("http://localhost:3001/persons")
//   .then((response) => {
//     console.log(`response.data`, response.data);
//     return axios.get("http://localhost:3001/persons/1");
//   })
//   .then((response) => {
//     console.log(`response.data`, response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
