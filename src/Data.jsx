import React, { useEffect } from 'react'
import { useState } from 'react'


export const Data = () => {

    const [data, setData] = useState([])

    const fetchData = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => setData(json))
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div>
        <h1>Products</h1>
        {
            data.map((item)=>{
                return <div>
                    <h2>{item.title}</h2>
                    <img src={item.image} />
                </div>
            })
        }    
    </div>
  )
}
export default Data