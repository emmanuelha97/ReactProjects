import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  //value is the window size | function is to set the width
  const [size, setSize] = useState(window.innerWidth);
  
  //function to check the size invokes the function on top which
  //sets the window size to the current size
  const checkSize = () => {
    setSize(window.innerWidth) // triggers rerender
  }

  //useEffect adds a window.EventListener which checks when 
  //the window is resized and invokes the function on top
  useEffect(()=> {
    window.addEventListener('resize',checkSize);
    //will be envoked once we exit
    //clean up fucntio
    return ()=> {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  },[])


  return (<>
  <h1>window</h1>
  <h2>{size} PX</h2>
  </>);
};

export default UseEffectCleanup;
