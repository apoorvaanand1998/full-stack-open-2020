import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
  <>
    <h1>{props.course_name}</h1>
  </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.ex1_no + props.ex2_no + props.ex3_no}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1_name} {props.ex1_no}
      </p>
      <p>
        {props.part2_name} {props.ex2_no}
      </p>
      <p>
        {props.part3_name} {props.ex3_no}
      </p>
    </>
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
      <Content part1_name={part1} part2_name={part2} part3_name={part3}
       ex1_no={exercises1} ex2_no={exercises2} ex3_no={exercises3} />
      <Total ex1_no={exercises1} ex2_no={exercises2} ex3_no={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
