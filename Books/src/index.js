//ES6 get module
import React from "react";
//has the render method
import ReactDom from "react-dom";
//import CSS
import "./index.css";
//import data | curly braces 
//Not importing from pacakge; since in same folder; with js no extension needed
import {books} from './books'
import Book from './Book'

/*
to make a component name first letter needs 
to be capitalzed. Also called stateless functional component. 
Always needs to return JSX.
*/

// Return a single component 
function BookList() {
  return (
    <section className="booklist">
      {/* Access each and every item in the callback function
      book refers to each and every object in the array
      Iterating with map will return all items of array */}
      {books.map((book)=>{
        // destructure and look for properties from the book/object being passed
        const {author, img, title} = book;
        return (
          // how to pass in props one by one since it was destructured in props
          // <Book img={img} ></Book>
          // book prop is going to equal to the object I am passing in which is a book
          //must change book function props to props.book to access obejct inside
          // <Book key={book.id} book={book}></Book>
          //use the spread operator to access the properties inside
          <Book key={book.id} {...book}></Book>
        )
      })}
    </section>
  );
}
/**JSX Javscript i.e using Javascript must alwas return a value
 * Accessing with props. Using props.VarName
 */


//looks for what we are going to render and where
ReactDom.render(<BookList />, document.getElementById("root"));
