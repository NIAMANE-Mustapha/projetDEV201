import React,{useState} from 'react'

export default function Count() {
    const [count, setCount] = useState(1);
    const handlePlus=()=>{
        setCount(count+2)
    }
    const handleMinus=()=>{
        setCount(count-2)
    }
  return (
    <div>
        <button onClick={handlePlus}>+</button>
        <p>{count}</p>
        <button onClick={handleMinus} >-</button>
    </div>
  )
}
