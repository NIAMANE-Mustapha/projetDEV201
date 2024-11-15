import React,{useState} from 'react'

export default function Count() {
    const [count, setCount] = useState(0);
    const handlePlus=()=>{
        setCount(count+1)
    }
    const handleMinus=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <button onClick={handlePlus}>+</button>
        <p>{count}</p>
        <button onClick={handleMinus} >-</button>
    </div>
  )
}
