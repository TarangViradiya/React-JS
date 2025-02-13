import React from 'react'
import {  useState } from 'react'

const About = (props) => {

  console.log(props.data)

  return (
  
    <div>
      <h1>About</h1>
      <h2>{props.data}</h2> 
    </div>
  )
}

export default About