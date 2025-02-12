import React, {  useState } from 'react'

const Home = () => {

  let [count,setcount] = useState(0)

  let click = () =>{
    setcount(count+1)
  }
  return (
  
    <div>
      {/* <h1>{count}</h1>
      <button onClick={click}>click</button>   */}
    </div>
  )
}

export default Home