import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // create useState function to grab data and pass it into the 
  // function and component
  const[people,setPeople] = useState(data);

  //remove last person in list
  const removePerson = () => {
    let newPeople = [];
    for(let i = 0; i < people.length - 1 ; i ++){
      newPeople.push(people[i])
    }
    setPeople(newPeople);
  }
  
  //add person to list
  

  return <main>
    <section className="container">
      <h3> {people.length} Birthdays Today</h3>
      {/* passing people value from function as a props to the 
      component List */}
      <List people={people}/>
      <button onClick={()=> setPeople([])}>
        clear all
      </button>
      <button onClick={()=> removePerson()}>Remove person</button>
    </section>
  </main>
}

export default App;
