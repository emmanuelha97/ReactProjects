import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
//hooks cannot be in conditional vice versa they work
const UseEffectBasics = () => {
const [value,setValue] = useState(0);

  useEffect(() =>{
    if(value >= 1){
    document.title = `Sages(${value})`;
    }
  }, [value]);

useEffect(()=>{
  console.log()
})  

  return <>
  <h1>{value}</h1>
  <button className="btn" onClick={()=> setValue(value +1)}>
    click me 
  </button>
  </>
};

export default UseEffectBasics;
