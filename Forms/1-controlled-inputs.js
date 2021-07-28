import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  //create state value for list of people
  const [people, setPeople] = useState([]);

  // access event handler object
  const handleSubmit = (e) => {
    e.preventDefault(); //not refreshing the page once submitted
    if (firstName && email) {
      // if the key mathces the value name, object can be created as so
      const person = {
        id: new Date().getTime().toString(),
        firstName: firstName,
        email: email,
      };
      console.log(person);
      //people is current value in state
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              // access event object
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <button type="submit"> add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
