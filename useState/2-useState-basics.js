import React, { useState } from 'react'
//useState is a function 
//componet name must be uppercase
//useState must be in the function/component body
//cannot call it conditionally?? explained later


const UseStateBasics = () => {
  // console.log(useState('wrold'))
  // const value = useState(1)[0];
  // const handler = useState (1)[1]
  // console.log(value, handler);
  //Setting default value as 'random title;
  //Use staes is an array where the second position chnages the value of the first
  const[text,setText] = useState('Random Title')

  // invoke function that we named setText above
  const handleClick = () => {
    if(text === 'Random Title'){
    setText("hello world");
    } else {
      setText('Random Title');
    }
  };
  return ( <React.Fragment>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>
      Change Title
    </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
