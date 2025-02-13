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

  return (
  
    <div>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button> 
      <About data={count} />
    </div>
  )
}

export default Home