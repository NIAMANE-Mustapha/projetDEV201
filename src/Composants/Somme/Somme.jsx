import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState,useEffect } from 'react'
import './somme.css'
import styled from 'styled-components'
import Multi from './Multi'

export default function Somme() {
    // Création des states : 

    const [nombre1 , setNombre1] = useState(0);
    const [nombre2 , setNombre2] = useState(0);
    const [resultat , setResultat] = useState(0);
    const [msg,setMsg]=useState('hakim')
    // Les Handles : Les Traitements 

    // const HandleNombre1 = () = > {
    //     // Traitements

    // }

    // const HandleNombre2 = () = > {
    //     // Traitements
        
    // }

    // const HandleResultat = () = > {
    //     // Traitements
        
    // }


    useEffect(()=>{
      console.log("hello")
      return function(){
        console.log('unmount')
      }
    },[])

    const Button=styled.button`
      color :red
    `
    const tab=['abc0','TOTO','NANI']
  return (
    <div className='p-2 m-2'>
        <Multi msg={msg} setmsg={setMsg} />
        <p>{msg}</p>
        {tab.map((val,i)=>{
          return <ul>
            <li key={i}>{val} </li>
          </ul>
        })}
    </div>
  )
}
