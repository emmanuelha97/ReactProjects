import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import personService from "./services/notes";
import "./index.css";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="added">{message}</div>;
};

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

const App = () => {
  // Multiple useStates
  // persons sets the array object with the information inside
  // newName and newNumber creates a name and number to be added to persons
  // filterW is the word that we are currently filtering
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("add new name...");
  const [newNumber, setNewNumber] = useState("add new number...");
  const [person, setPerson] = useState({
    name: "add new name...",
    number: "add new number...",
  });
  const [addedMessage, setAddedMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [filterW, setFilter] = useState("");

  //useEffect hook that calls the axios object we established to complteet the methods
  const hook = () => {
    console.log("effect");
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  };
  useEffect(hook, []);

  //add name function grabs the event
  const addPerson = (event) => {
    // since there are multiple target values we must grab and set them accordingly
    event.preventDefault(); //prevent site from reloading
    //check if that name or number exist already in the list
    if (persons.map((person) => person.name).includes(newName)) {
      //confirm with user if they would like to replace the phone number currently on the same name
      if (
        window.confirm(
          `${newName} is already addeded to phonebook, replace the old number with a new one?`
        )
      ) {
        // find the person and set their phone number to the new one
        persons.find((per) => person.name === `${newName}`).number = newNumber;
        if (persons.find((per) => person.name === newName) !== undefined) {
          setErrorMessage(
            `Information of ${newName} has already been removed from server`
          );
          setTimeout(() => {
            setErrorMessage(null);
          }, 4000);
        }
      }
    } else if (persons.map((person) => person.number).includes(newNumber)) {
      //check if that phone number is already in the list
      alert(`${newNumber} is already added to phonebook`);
    } else {
      //if they do not already exist then add them to the persons array of objects
      personService
        .create(person)
        .then((response) => {
          // setPersons as the repsonse which is the new person to be added
          setPersons(persons.concat(response.data));
          // reset the data when they go to add another person
          setNewName("");
          setNewNumber("");
          setPerson({ name: newName, number: newNumber });
        })
        .then((response) => {
          setAddedMessage(`Added ${newName}`);
          setTimeout(() => {
            setAddedMessage(null);
          }, 4000);
        })
        .catch((error) => {
          console.log(`ERROR OCCURED`);
        });
    }
  };

  //event handler for name
  const handleNameChange = (event) => {
    setNewName(event.target.value);
    setPerson({ ...person, name: event.target.value });
  };

  //event handler for number
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    setPerson({ ...person, number: event.target.value });
  };

  //event handler to change the current person
  const handlePersonChange = (event) => {
    setPerson(event.taget.value);
  };

  //event handler to filter out the list
  const handleFilterChange = (event) => {
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

  // event handler to erase a person passes the id parameter
  const handleEraseChange = (id) => {
    // create a temporary peron to display them in the window object
    const temp = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${temp.name} ?`)) {
      //axious delete method with id added to url and then set the array to
      //the new list without the id
      personService.deelete(id).then((response) => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };
  //return multiple components
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addedMessage} />
      <ErrorNotification message={errorMessage} />
      <Filter filterW={filterW} handleFilterChange={handleFilterChange} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handlePersonChange={handlePersonChange}
      />
      <h2>Numbers</h2>
      <Numbers filterArr={filterArr} handleEraseChange={handleEraseChange} />
    </div>
  );
};

export default App;
