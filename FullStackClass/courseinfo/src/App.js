import React from 'react'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header title={course.name}/>
      <Content content={course}/>
      <Total exercises={course}/>
    </div>
  )
}

const Header = (props) =>{
  return (
  <div> 
    <h1>{props.title}</h1>
    </div>
  )
}

const Content = (props) =>{
  console.log(props.content.parts)
  return (
  <div>
    <Part parts={props.content.parts[0]}/>
    <Part parts={props.content.parts[1]}/>
    <Part parts={props.content.parts[2]}/>
  </div>
  )
}
const Part = (props) =>{
  return (
  <div>
    <p>
      {props.parts.name} {props.parts.exercises}
    </p>
  </div>
  )
}

const Total = (props) =>{
  return (
  <div>
    <p>Number of exercises {props.exercises.parts[0].exercises + props.exercises.parts[1].exercises + props.exercises.parts[2].exercises}</p>
  </div>
  )
}


export default App