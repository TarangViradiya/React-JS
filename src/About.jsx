import React from 'react'
import {  useState } from 'react'

const About = () => {

  let [count,setcount] = useState(0)

  let increment = () =>{
    setcount(count+1)
  }

  let decrement = () =>{

    setcount(count-1)
  }
  return (
  
    <div>
      <h1>About</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>  
    </div>
  )
}

export default About