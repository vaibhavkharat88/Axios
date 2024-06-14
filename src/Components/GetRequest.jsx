import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetRequest = () => {
    const [response,setResponse]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setResponse(res.data))
        .catch((e)=>console.log(e))
    })
  return (

    <>
    {
        response.map((item)=>(
        <div className="" key={item.id}>
            <h2>{item.name}</h2>

        </div>
        ))
    }
    
    </>
  )
}

export default GetRequest