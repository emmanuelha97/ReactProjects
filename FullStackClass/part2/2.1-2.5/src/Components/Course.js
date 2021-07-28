import React from "react";
import Header from "./Header";

//Part Subcomponent of Course component
//Destructures the course props
const Part = ({ course }) => {
  return (
    <div>
      {/* utilizes the map function to iterate through the course objects array parts
      and labels each object inside as an item and grabs their values */}
      {course.parts.map((item) => {
        return (
          <h3 key={item.id}>
            {item.name} {item.exercises}
          </h3>
        );
      })}
    </div>
  );
};

const Total = ({ exercises, sum }) => {
  return (
    <div>
      <h4> total of {exercises.reduce(sum)} exercises</h4>
    </div>
  );
};

//Course component which destructures course
const Course = ({ course }) => {
  //use map to remove the exercises from the array in the object in order
  //to apply the reduce function
  const exercises = course.parts.map((exer) => exer.exercises);
  //initiate the reduce function
  const sum = (add, currentValue) => add + currentValue;

  return (
    <div>
      <h1>
        {/* Header component to pass the course names */}
        <Header heading={course.name} />
      </h1>
      {/* Part component to pass the course object */}
      <Part course={course} />
      {/* Displays the total number of exercises */}
      <Total exercises={exercises} sum={sum} />
    </div>
  );
};

export default Course;
