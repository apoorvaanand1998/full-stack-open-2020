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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course_name={course} />
      <Content name1={part1.name} name2={part2.name} name3={part3.name}
       ex1_no={part1.exercises} ex2_no={part2.exercises} ex3_no={part3.exercises} />
      <Total ex_no={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
