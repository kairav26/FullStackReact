import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.p1} {props.e1}</p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.p2} {props.e2}</p>
    </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>{props.p3} {props.e3}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 p1={props.part1} e1={props.exercises1} />
      <Part2 p2={props.part2} e2={props.exercises2} />
      <Part3 p3={props.part3} e3={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p> Number of exersises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;
