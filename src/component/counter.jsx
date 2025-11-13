import React, { useState } from 'react'
import './counter.css'
// import React,{usestate} from 'react'

const Counter = () => {
  const[count,setcount]=useState(0);
  return (
    <div className='counter-container'>
    <p id='para'>you have clicked{count}times</p>
    <button id='btn' onClick={()=>{setcount(count+1)}}>Click me</button>
      
     </div>
    // <div>
    //   <p>you have clicked 0 times</p>
    //   <button> click me</button>
    // </div>
  )
}

export default Counter
