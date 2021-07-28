import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  // states: loading before it loads, and setting a tour
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //asyn to fetch the data
  //fetch only handles network errors
  const fetchTours = async () => {
    setLoading(true);

    try {
      //create a response with fetch
      const response = await fetch(url);
      //grab the json data
      const tours = await response.json();
      //setLoading to false as we were able to grab the data
      setLoading(false);
      //setTours to equal the array of the data from the json
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div>
          <h2>no tours left</h2>
          <button onClick={fetchTours} className="btn">
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <mian>
      <Tours tours={tours} removeTour={removeTour} />
    </mian>
  );
}

export default App;
