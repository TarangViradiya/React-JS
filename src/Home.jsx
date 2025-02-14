import React, {  useState } from 'react'
import About from './About'

const Home = () => {

  let [count,setcount] = useState(0)

  let increment = () =>{
    setcount(count+1)
  }

  let decrement = () =>{

    setcount(count-1)
  }

  let reset = () =>{
    setcount(0)
  }

  return (
  
    <div>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button> &nbsp;
      <button onClick={reset}>Reset</button>
      <About data={count} />
    </div>
  )
}

export default Home