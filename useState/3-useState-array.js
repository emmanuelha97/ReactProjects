import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  // possible to use React.useState inste of of importing at top of file
  const [people, setPeople] = React.useState(data)
  
  const removeItem = (id) => {
    // create new variable where it access people and uses filter array method
    // and then access each "person" and their id and see if it matches
    let newPeople = people.filter((person)=>person.id !== id)
    //use the function to set the new array after it is filtered
    setPeople(newPeople)

  }
  return <>
  {
    people.map((person)=>{
      const {id,name} = person;
      return (<div key={id} className='item'>
      <h4>{name}</h4>
      <button onClick={()=> removeItem(id)}> remove</button>
      </div>
      );
    })
  }
  {/* you can call the function directly but you need to call it in an arrow function */}
  <button className="btn" onClick={() => setPeople([])}> clear items</button>
  </>;
};

export default UseStateArray;
