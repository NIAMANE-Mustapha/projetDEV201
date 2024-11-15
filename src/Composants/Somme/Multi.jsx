import React from 'react'

export default function Multi(props) {
  return (
    <div>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" 
        value={props.msg} 
        onChange={e=>props.setmsg(e.target.value)}
        />
    </div>
  )
}
