import React from 'react'

const Book = ({img, title, author, children}) => { 
    /*destructure in passing parameters 
    also can add children to destructure optional
    */
    //const Book = (props) => {
      //props.books is now going to be an object with a book object and we access the object
      //console.log(props)b
     // const { img, title, author} = props; // destructure book not props
    
     //Working with events
     //we need an attribute and eventhandler | onClick and onMouseOver
    const clickHandler = (e) => {
      console.log(e)
      console.log(e.target);
    alert('Hello World');
    };
    const complexExample = (author) =>{
    console.log(author)
    }
      return (
        <article className="book" onMouseOver={()=>{
          console.log(title);
        }}>
          <img src={img} alt="" />
          <h1 onClick={() => console.log(title)}>{title}</h1>
          <h4>{author}</h4>
          <button type="button" onClick={clickHandler}> Reference Example</button>
          <button type="button" onClick={() => complexExample(author)}> more complex example</button>
        </article>
      );
    };
    //css styling values must go in quotation marks
    
    // //arrow function (NOT RECOMMENED)
    // const Greeting = () => {
    //   /**Three parameters React.createElement(), type of element
    //    * in quotations, props object, and then the children */
    //   return React.createElement('h1',{},'hello world');
    // }
    

export default Book
