import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <div>
    <h1>{props.course_name}</h1>
  </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex_no}</p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
      {props.part_name} {props.ex_no}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part_name={props.name1} ex_no={props.ex1_no} />
      <Part part_name={props.name2} ex_no={props.ex2_no} />
      <Part part_name={props.name3} ex_no={props.ex3_no} />
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course_name={course} />
      <Content name1={part1} name2={part2} name3={part3}
       ex1_no={exercises1} ex2_no={exercises2} ex3_no={exercises3} />
      <Total ex_no={exercises1+exercises2+exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
