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
    fetchData("https://api.coinlore.net/api/tickers/");
  };

  useEffect(hook, []);

  const handleShow = () => {
    // console.log(`CLICEKD`);
    setShow(!show);
  };

  return (
    <div>
      <h1>Top 100 Bitcoins</h1>
      <button onClick={handleShow}>{show ? "hide all" : "show all"}</button>
      {show
        ? coins.map((coin, index) => (
            <div key={index}>
              <h1>{coin.name} </h1>
              <h2> Symbol: "{coin.symbol}"</h2>
              <h3>Current Price ${coin.price_usd}</h3>
              <p> Change in price 1 hour ago: % {coin.percent_change_1h} </p>
              <p> Change in price 24 hours ago: % {coin.percent_change_24h} </p>
              <p> Change in price 7 days ago: % {coin.percent_change_7d} </p>
              <hr></hr>
            </div>
          ))
        : ""}
    </div>
  );
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
