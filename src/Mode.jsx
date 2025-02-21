import React from 'react'
import { useState } from 'react'

const Mode = () => {

    let [Mode, setMode] = useState('light')

    const changeToDark = () => {
        setMode('dark')
    }

    const changeToLight = () => {
        setMode('light')
    }

    return (
        <div style={{backgroundColor: Mode === 'light' ? 'white' : 'black', color: Mode === 'light' ? 'black' : 'white' , height: '800px' , padding: '0px',margin: '0px' , display: 'flex', justifyContent: 'center', alignItems: 'center',transition: '0.5s'}}>

            <div>            
            <h1>Hello World</h1>
            <button onClick={()=>changeToLight()}>Change to Light</button>    
            <button onClick={()=>changeToDark()}>Change to Dark</button>
            </div>
        </div>

    )
}

export default Mode
