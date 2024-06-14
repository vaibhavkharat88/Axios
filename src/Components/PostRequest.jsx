import React, { useState } from 'react'
import axios from 'axios'
const PostRequest = () => {
    const data={fname:'',pass:''}
    const [input,setinput]=useState(data)

    function HandleClick(e){
        setinput({...input,[e.target.name]:e.target.value})
    }
    function Submit(e){
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users",input)
        .then((res)=>console.log(res))
    }

  return (
    <>
    <form action="" onSubmit={Submit} >
    Name:<input type="text" name="fname" id="" value={input.fname} onChange={HandleClick} />
    password:<input type="text" name="pass" id="" value={input.pass} onChange={HandleClick} />
    <button type='submit'>Add</button>
    </form>
    
    </>
  )
}

export default PostRequest