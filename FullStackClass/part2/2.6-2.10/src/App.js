import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";

const App = () => {
  // Multiple useStates
  // persons sets the array object with the information inside
  // newName and newNumber creates a name and number to be added to persons
  // filterW is the word that we are currently filtering
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("add new name...");
  const [newNumber, setNewNumber] = useState("add new number...");
  const [filterW, setFilter] = useState("");

  //add name function grabs the event
  const addPerson = (event) => {
    // since there are multiple target values we must grab and set them accordingly
    setNewName(event.target[0].value);
    setNewNumber(event.target[1].value);
    event.preventDefault(); //prevent site from reloading
    //create person object to be added with new name and number
    const personName = {
      name: newName,
      number: newNumber,
    };
    //check if that name or number exist already in the list
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else if (persons.map((person) => person.number).includes(newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
    } else {
      //if they do not already exist then add them to the persons array of objects
      setPersons(persons.concat(personName));
      setNewName("");
      setNewNumber(persons.concat(personName));
      setNewNumber("");
    }
  };

  //event handler for name
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  //event handler for number
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    //console.log(`event.target.value`, event.target.value);
    setFilter(event.target.value);
  };

  //create a copy of the array
  const copyArr = [...persons];
  //create an array with a ternary operatpr that is dependent on what we want to filter out
  //utilizes the filter array method on the copyArr and then makes the name and fitler word
  //case sensitive in order to match with the current names in the array and display either
  //all values or just the ones we are looking for
  const filterArr =
    filterW === ""
      ? persons
      : copyArr.filter(
          (person) =>
            person.name.toLowerCase().includes(filterW.toLowerCase()) === true
        );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterW={filterW} handleFilterChange={handleFilterChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers filterArr={filterArr} />
    </div>
  );
};

export default App;
