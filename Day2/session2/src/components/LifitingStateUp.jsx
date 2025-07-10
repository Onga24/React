import React from 'react'
import { useState } from 'react'
import Greeting from './Greeting';

export default function LifitingStateUp() {
    const [name , setName] = useState("");

    function handlonchange(e) {
         setName (e.target.value);    
    }
  return (
    <>
    <br />
      <div>LifitingStateUp</div>
      <br />
        <input type="text" onChange={handlonchange} />
        <br />
      <Greeting name = {name}/>
    </>
  
  )
}
