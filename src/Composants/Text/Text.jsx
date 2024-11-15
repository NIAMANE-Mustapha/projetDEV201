import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default class Text extends Component {
  
  constructor(){
    super()
        this.state = {
            Txt : 'DEV 202',
            BtnTxt : 'Connecter'
        }
    }
   
    Affiche = () => {
        this.setState ( {
            Txt : 'DEV 204', BtnTxt :'Deconnecter'
        })

        console.log(this.state.Txt)
    }
  
    render() {
    return (
      <div>
        <h1>{this.state.Txt}</h1>
        <button onClick={this.Affiche} className='bg-danger'>{this.state.BtnTxt}</button>

      </div>
    )
  }
}
