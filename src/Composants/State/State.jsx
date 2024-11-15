import React from 'react'
import { useState } from 'react'

export default function State() {

    const [nom, setNom] = useState()
    

    const handleChange = (e) =>{
        setNom(e.target.value)
    }


  return (
    <div>
        <input type="text" name="nom"  placeholder='Taper un nom' onChange={handleChange}/>
        <h3>Votre nom est : {nom} </h3>
    </div>
  )
}
