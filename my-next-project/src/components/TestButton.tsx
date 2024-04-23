'use client'

import { useState } from "react";

export default function TestButton() {

const [count, setCount] = useState(0);

  return (
  <div className= "bg-yellow-100 p-10">
    <input
    value="Click this bro"
    type="button"
    onClick={
      () => {setCount(count + 1)}
    }
      className='border border-black rounded-md p-1 bg-slate-200'/>
    <p>{count}</p>
  </div>
  )
}
